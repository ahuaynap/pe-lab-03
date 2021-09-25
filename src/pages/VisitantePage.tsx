import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import VisitanteForm from '../components/VisitanteForm';
import './Page.css';

const VisitantePage: React.FC = ({}) => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>Registro de Visitantes</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                <IonToolbar>
                    <IonTitle size="large">Visitantes</IonTitle>
                </IonToolbar>
                </IonHeader>
                <VisitanteForm />
            </IonContent>
        </IonPage>
    );
}

export default VisitantePage;