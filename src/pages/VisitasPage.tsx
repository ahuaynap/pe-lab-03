import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import VisitasList from '../components/VisitasList';
import './Page.css';

const VisitasPage: React.FC = ({}) => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>Visitas</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                <IonToolbar>
                    <IonTitle size="large">Visitas</IonTitle>
                </IonToolbar>
                </IonHeader>
                <VisitasList />
            </IonContent>
        </IonPage>
    );
}

export default VisitasPage;