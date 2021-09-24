import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import InicioContent from '../components/InicioContent';
import './Page.css';

const InicioPage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>Incio</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                <IonToolbar>
                    <IonTitle size="large">Inicio</IonTitle>
                </IonToolbar>
                </IonHeader>
                <InicioContent />
            </IonContent>
        </IonPage>
    );
}

export default InicioPage;