import { chequeo_fake } from "../interfaces/data";
import { visitantes_fake } from "../interfaces/data";
import { Chequeo, Visitante } from "../interfaces/interfaces";

interface Visita {
    visitante: Visitante;
    chequeo: Chequeo;
}

const VisitasList: React.FC = ({}) => {

    const visitas = chequeo_fake.map((chequeo, index) => {
        let visita: Visita = {
            visitante: visitantes_fake[index],
            chequeo: chequeo
        }
        return visita
    });

    return (
        <div>
            {visitas.map((visita, index) => {
                return (
                    <div key={visita.chequeo.id}>
                        <p>{visita.visitante.id}</p>
                        <p>{visita.visitante.nombres + " " +visita.visitante.apellidos}</p>
                        <p>{visita.visitante.fecha_nacimiento.toISOString()}</p>
                        <p>{visita.visitante.direccion}</p>
                        <p>{visita.visitante.estatura}</p>
                        <p>{visita.chequeo.peso}</p>
                        <p>{visita.chequeo.presion}</p>
                        <p>{visita.chequeo.saturacion}</p>
                        <p>{visita.chequeo.temperatura}</p>
                        <p>{visita.chequeo.visitante_id}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default VisitasList;