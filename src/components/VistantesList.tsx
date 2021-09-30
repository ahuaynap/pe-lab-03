import { Visita } from "../interfaces/interfaces";
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonItem, IonLabel, IonList, useIonViewDidEnter } from '@ionic/react'
import { useState } from "react";
import app from "../Firebase";
import * as firebase from 'firebase/database';

const VisitantesList: React.FC = ({}) => {

    const [visitantes, setVisitantes] = useState<Visita[]>([]);
    const db = firebase.getDatabase(app);

    const getVisitas = () => {
        const ref = firebase.ref(db, 'visitas');
        firebase.onValue(ref, (snapshot: firebase.DataSnapshot) => {
            setVisitantes(transformData(snapshot));
        });
    }

    const transformData = (snapshot: firebase.DataSnapshot) => {
        const data: Visita[] = []
        snapshot.forEach((snapshot) => {
            let visita = snapshot.val() as Visita;
            visita.id = snapshot.key!
            if(!visita.fecha_chequeo){
                data.push(visita);
            }
        });
        return data;
    }

    useIonViewDidEnter(() => {
        getVisitas();
    });

    const renderForm = (visitante: Visita) => {
        console.log("render chequeo form " + visitante.id)
    }

    return (
        <IonContent>
            {
                visitantes.map((visitante) => {
                    return (
                        <IonCard
                            key={visitante.id}
                            routerLink={"/chequeo/" + visitante.id}>
                            <IonCardHeader>
                                <IonCardTitle>{visitante.nombres + " " + visitante.apellidos}</IonCardTitle>
                                <IonCardSubtitle>
                                    {visitante.direccion}
                                </IonCardSubtitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <IonList>
                                    <IonItem>
                                        <IonLabel>Fecha de nacimiento</IonLabel>
                                        <IonLabel>{visitante.fecha_nacimiento}</IonLabel>
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel>Estatura</IonLabel>
                                        <IonLabel>{visitante.estatura}</IonLabel>
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel>Fecha de visita</IonLabel>
                                        <IonLabel>{visitante.fecha_registro}</IonLabel>
                                    </IonItem>
                                </IonList>
                            </IonCardContent>
                        </IonCard>
                    );
                })
            }
        </IonContent>
    );
}

export default VisitantesList;