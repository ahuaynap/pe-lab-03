import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ChequeoForm from '../components/ChequeoForm';
import VisitantesList from '../components/VistantesList';
import './Page.css';

const ChequeoPage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>Chequeo</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                <IonToolbar>
                    <IonTitle size="large">Chequeo</IonTitle>
                </IonToolbar>
                </IonHeader>
                <VisitantesList />
            </IonContent>
        </IonPage>
    );
}

export default ChequeoPage;