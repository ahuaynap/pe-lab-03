import { IonButton, IonInput, IonItem, IonLabel, IonList, IonListHeader, IonLoading, IonToast, useIonViewDidEnter } from "@ionic/react";
import React, { useState } from "react";
import { Visita, ToastController } from "../interfaces/interfaces";
import app from "../Firebase";
import * as firebase from 'firebase/database';
import { useHistory } from "react-router";

const ChequeoForm: React.FC<{id: string;}> = ({id}) => {

    const [peso, setPeso] = useState<number | null>(null);
    const [temperatura, setTemperatura] = useState<number | null>(null);
    const [presion, setPresion] = useState<number | null>(null);
    const [saturacion, setSaturacion] = useState<number | null>(null);

    const [loading, setLoading] = useState<boolean>(false);
    const [toast, setToast] = useState<ToastController>({show: false, message: ""});
    const [visitante, setVisitante] = useState<Visita>();

    const db = firebase.getDatabase(app);

    const getVisitante = () => {
        console.log(id);
        const dbref = firebase.ref(db, "visitas/" + id);
        firebase.onValue(dbref, (snapshot) => {
            const data = snapshot.val() as Visita;
            data.id = id;
            setVisitante(data);
        })
    }

    const addVisita = () => {
        setLoading(true);

        const dbref = firebase.ref(db, "visitas/" + id);

        visitante!.peso = peso!;
        visitante!.temperatura = temperatura!;
        visitante!.presion = presion!;
        visitante!.saturacion = saturacion!;
        visitante!.fecha_chequeo = (new Date()).toLocaleString();

        firebase.set(dbref, visitante)
            .then( ()=> {
                setLoading(false);
                setToast({show: true, message: "Visita guardada"});
            })
            .catch( () => {
                setLoading(false);
                setToast({show: true, message: "Error "});
            });

        //useHistory().push("/visitas");
    }

    useIonViewDidEnter( ()=> {
        getVisitante();
    })

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
                    <IonLabel>Bienvenido {visitante?.nombres + " " + visitante?.apellidos} completa tu visita</IonLabel>
                </IonListHeader>
                <IonItem>
                    <IonLabel>Peso</IonLabel>
                    <IonInput
                        value={peso}
                        placeholder="60.4"
                        onIonChange={peso => setPeso(parseFloat(peso.detail.value!))} />
                </IonItem>
                <IonItem>
                    <IonLabel>Temperatura</IonLabel>
                    <IonInput
                        value={temperatura}
                        placeholder="60"
                        onIonChange={temperatura => setTemperatura(parseInt(temperatura.detail.value!))} />
                </IonItem>
                <IonItem>
                    <IonLabel>Presion</IonLabel>
                    <IonInput
                        value={presion}
                        placeholder="60"
                        onIonChange={presion => setPresion(parseInt(presion.detail.value!))} />
                </IonItem>
                <IonItem>
                    <IonLabel>Nivel de saturacion</IonLabel>
                    <IonInput
                        value={saturacion}
                        placeholder="60"
                        onIonChange={saturacion => setSaturacion(parseInt(saturacion.detail.value!))} />
                </IonItem>
            </IonList>
            <IonButton
                onClick={addVisita}
                expand="full">
                    Enviar
            </IonButton>
        </div>
    );
};

export default ChequeoForm;