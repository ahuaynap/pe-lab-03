import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ChequeoForm from '../components/ChequeoForm';
import VisitantesList from '../components/VistantesList';
import { ChequeoProps } from '../interfaces/interfaces';
import './Page.css';

const ChequeoFormPage: React.FC<ChequeoProps> = ({match}) => {
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
                <ChequeoForm id={match.params.id}/>
            </IonContent>
        </IonPage>
    );
}

export default ChequeoFormPage;