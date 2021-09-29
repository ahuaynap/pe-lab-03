import { Visita } from "../interfaces/interfaces";
import { useIonViewWillEnter } from '@ionic/react'
import { Storage } from '@ionic/storage';
import { useState } from "react";

const VisitasList: React.FC = ({}) => {

    const [visitas, setVisitas] = useState<Visita[]>([]);

    const vst: Visita[] = [];

    const getVisitas = async () => {
        const store = new Storage();
        await store.create();

        const keys = await store.keys();
        keys.map(async (key) => {
            const value = await store.get(key);
            const visita = JSON.parse(value) as Visita;
            if (!visita.ts_chequeo) {
                vst.push(visita)
            }    
        });
        setVisitas(vst);
        console.log(visitas);
    }

    useIonViewWillEnter(() => {
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