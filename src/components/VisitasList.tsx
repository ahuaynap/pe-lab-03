import { Visita } from "../interfaces/interfaces";
import { useIonViewDidEnter } from '@ionic/react'
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
                    <div key={visita.id}>
                        <p>{visita.nombres + " " +visita.apellidos}</p>
                        <p>{visita.direccion}</p>
                        <p>{visita.estatura}</p>
                        <p>{visita.peso}</p>
                        <p>{visita.presion}</p>
                        <p>{visita.saturacion}</p>
                        <p>{visita.temperatura}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default VisitasList;