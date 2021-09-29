import { IonButton, IonDatetime, IonInput, IonItem, IonLabel, IonList, IonListHeader, IonLoading, IonToast } from "@ionic/react";
import React, { useState } from "react";
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { LocationError, Visita } from "../interfaces/interfaces";
import { Storage } from '@ionic/storage';

const VisitanteForm: React.FC = () => {
    const [nombres, setNombres] = useState<string | null>(null);
    const [apellidos, setApellidos] = useState<string | null>(null);
    const [fechaNacimiento, setFechaNacimiento] = useState<string>("1995-02-03");
    const [estatura, setEstatura] = useState<string | null>(null);
    const [direccion, setDireccion] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<LocationError>({showError: false});

    const addVisitante = async () => {
        setLoading(true);
        const store = new Storage();
        try {
            const position: Geoposition = await Geolocation.getCurrentPosition();

            await store.create();
            const id = (await store.keys()).length + 1;
            let visita: Visita = {
                id: id,
                nombres: nombres!,
                apellidos: apellidos!,
                fecha_nacimiento: new Date(fechaNacimiento!),
                estatura: parseFloat(estatura!),
                direccion: direccion!,
                latitud: position.coords.latitude,
                longitud: position.coords.longitude,
                ts_registro: new Date()
            }
            await store.set("" + id, JSON.stringify(visita));

            setLoading(false);
            setError({showError: false, message: undefined});
        } catch(e: any) {
            const message = e.message.length > 0 ? e.message : "Cannot get user location. Check Permission";
            setError({showError: true, message});
            setLoading(false);
        }
    }


    return (
        <div className="">
            <IonLoading
                isOpen={loading}
                message={"Procesando"}
                onDidDismiss={() => setLoading(false)}
            />
            <IonToast
                isOpen={error.showError}
                message={error.message}
                onDidDismiss={() => setError({showError: false, message: undefined})}
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