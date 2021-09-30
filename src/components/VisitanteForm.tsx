import { IonButton, IonDatetime, IonInput, IonItem, IonLabel, IonList, IonListHeader, IonLoading, IonToast } from "@ionic/react";
import React, { useState } from "react";
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { ToastController, Visita } from "../interfaces/interfaces";
import app from "../Firebase";
import * as firebase from 'firebase/database';
import { useHistory } from "react-router";

const VisitanteForm: React.FC = () => {
    const [nombres, setNombres] = useState<string | null>(null);
    const [apellidos, setApellidos] = useState<string | null>(null);
    const [fechaNacimiento, setFechaNacimiento] = useState<string>("1995/2/02");
    const [estatura, setEstatura] = useState<string | null>(null);
    const [direccion, setDireccion] = useState<string | null>(null);

    const [loading, setLoading] = useState<boolean>(false);
    const [toast, setToast] = useState<ToastController>({show: false, message: ""});

    const db = firebase.getDatabase(app);

    const addVisitante = async () => {
        setLoading(true);
        try {
            const position: Geoposition = await Geolocation.getCurrentPosition();
            const dbref = firebase.ref(db, "visitas/");
            let visita: Visita = {
                nombres: nombres!,
                apellidos: apellidos!,
                fecha_nacimiento: (new Date(fechaNacimiento)).toLocaleDateString(),
                estatura: parseFloat(estatura!),
                direccion: direccion!,
                latitud: position.coords.latitude,
                longitud: position.coords.longitude,
                fecha_registro: (new Date()).toLocaleString()
            }
            firebase.push(dbref, visita);
            //cleanForm();
            setToast({show: true, message: "Vistante agregado"});
            
        } catch(e: any) {
            setToast({show: true, message: "Cannot get user location. Check Permission"});
        }

        setLoading(false);
        //useHistory().push("/chequeo");
    }


    return (
        <div className="">
            <IonLoading
                isOpen={loading}
                message={"Procesando"}
                onDidDismiss={() => setLoading(false)}
            />
            <IonToast
                isOpen={toast.show}
                message={toast.message}
                onDidDismiss={() => setToast({show: false, message: ""})}
                duration={3000}
            />
            <IonList lines="full">
                <IonListHeader lines="full">
                    <IonLabel>Bienvenido</IonLabel>
                </IonListHeader>
                <IonItem>
                    <IonLabel>Nombres</IonLabel>
                    <IonInput
                        value={nombres}
                        placeholder="Inola"
                        autoCapitalize="words"
                        onIonChange={nombres => setNombres(nombres.detail.value!)} />
                </IonItem>
                <IonItem>
                    <IonLabel>Apellidos</IonLabel>
                    <IonInput
                        value={apellidos}
                        placeholder="Tudas"
                        onIonChange={apellidos => setApellidos(apellidos.detail.value!)} />
                </IonItem>
                <IonItem>
                    <IonLabel>Fecha de nacimiento</IonLabel>
                    <IonDatetime 
                        value={fechaNacimiento}
                        placeholder="1995-02-03"
                        onIonChange={fechaNacimiento => setFechaNacimiento(fechaNacimiento.detail.value!)} />
                </IonItem>
                <IonItem>
                    <IonLabel>Estatura</IonLabel>
                    <IonInput
                        value={estatura}
                        placeholder="1.68"
                        onIonChange={estatura => setEstatura(estatura.detail.value!)} />
                </IonItem>
                <IonItem>
                    <IonLabel>Direccion</IonLabel>
                    <IonInput
                        value={direccion}
                        placeholder="Av. Larco 657 Galería Larco Tda.43."
                        onIonChange={direccion => setDireccion(direccion.detail.value!)} />
                </IonItem>    
            </IonList>
            <IonButton
                onClick={addVisitante}
                expand="full"
            >
                Registrarse
            </IonButton>
        </div>
    );
};

export default VisitanteForm;