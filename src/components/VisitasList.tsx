import { Visita } from "../interfaces/interfaces";
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonList, useIonViewDidEnter } from '@ionic/react'
import { useState } from "react";
import app from "../Firebase";
import * as firebase from 'firebase/database';

const VisitasList: React.FC = ({}) => {

    const [visitas, setVisitas] = useState<Visita[]>([]);
    const db = firebase.getDatabase(app);

    const getVisitas = () => {
        const ref = firebase.ref(db, 'visitas');
        firebase.onValue(ref, (snapshot: firebase.DataSnapshot) => {
            setVisitas(transformData(snapshot));
        });
    }

    const transformData = (snapshot: firebase.DataSnapshot) => {
        const data: Visita[] = []
        snapshot.forEach((snapshot) => {
            let visita = snapshot.val() as Visita;
            visita.id = snapshot.key!
            if(visita.fecha_chequeo){
                data.push(visita);
            }
        });
        return data;
    }

    useIonViewDidEnter(() => {
        getVisitas();
    });

    return (
        <div>
            {visitas.map(visita => {
                return (
                    <IonCard
                        key={visita.id}
                        routerLink={"/chequeo/" + visita.id}>
                        <IonCardHeader>
                            <IonCardTitle>{visita.nombres + " " + visita.apellidos}</IonCardTitle>
                            <IonCardSubtitle>
                                {visita.direccion}
                            </IonCardSubtitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <IonList>
                                <IonItem>
                                    <IonLabel>Fecha de nacimiento</IonLabel>
                                    <IonLabel>{visita.fecha_nacimiento}</IonLabel>
                                </IonItem>
                                <IonItem>
                                    <IonLabel>Estatura</IonLabel>
                                    <IonLabel>{visita.estatura}</IonLabel>
                                </IonItem>
                                <IonItem>
                                    <IonLabel>Peso</IonLabel>
                                    <IonLabel>{visita.peso}</IonLabel>
                                </IonItem>
                                <IonItem>
                                    <IonLabel>Temperatura</IonLabel>
                                    <IonLabel>{visita.temperatura}</IonLabel>
                                </IonItem>
                                <IonItem>
                                    <IonLabel>Presion</IonLabel>
                                    <IonLabel>{visita.presion}</IonLabel>
                                </IonItem>
                                <IonItem>
                                    <IonLabel>Nivel de saturacion</IonLabel>
                                    <IonLabel>{visita.saturacion}</IonLabel>
                                </IonItem>
                                <IonItem>
                                    <IonLabel>Fecha de chequeo</IonLabel>
                                    <IonLabel>{visita.fecha_chequeo}</IonLabel>
                                </IonItem>
                            </IonList>
                        </IonCardContent>
                    </IonCard>
                );
            })}
        </div>
    );
};

export default VisitasList;