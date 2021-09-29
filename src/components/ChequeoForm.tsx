import { IonButton, IonInput, IonItem, IonLabel, IonList, IonListHeader } from "@ionic/react";
import React, { useState } from "react";
import { Visita } from "../interfaces/interfaces";
import { Storage }  from '@ionic/storage';

const ChequeoForm: React.FC<Visita> = (visita) => {
    const [peso, setPeso] = useState<number | null>(null);
    const [temperatura, setTemperatura] = useState<number | null>(null);
    const [presion, setPresion] = useState<number | null>(null);
    const [saturacion, setSaturacion] = useState<number | null>(null);
    
    const store = new Storage();

    const addVisita = async () => {
        
    }

    return (
        <div className="">
            <IonList lines="full">
                <IonListHeader lines="full">
                    <IonLabel>Bienvenido</IonLabel>
                </IonListHeader>
                <IonItem>
                    <IonLabel>Peso</IonLabel>
                    <IonInput
                        value={peso}
                        placeholder="60.4"
                        onIonChange={peso => setPeso(parseFloat(peso.detail.value!))}></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel>Temperatura</IonLabel>
                    <IonInput
                        value={temperatura}
                        placeholder="60"
                        onIonChange={temperatura => setTemperatura(parseInt(temperatura.detail.value!))}></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel>Presion</IonLabel>
                    <IonInput
                        value={presion}
                        placeholder="60"
                        onIonChange={presion => setPresion(parseInt(presion.detail.value!))}></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel>Nivel de saturacion</IonLabel>
                    <IonInput
                        value={saturacion}
                        placeholder="60"
                        onIonChange={saturacion => setSaturacion(parseInt(saturacion.detail.value!))}></IonInput>
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