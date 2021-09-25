import { IonButton, IonDatetime, IonInput, IonItem, IonLabel, IonList, IonListHeader } from "@ionic/react";
import React, { useState } from "react";


const VisitanteForm: React.FC = () => {
    const [nombres, setNombres] = useState<string | null>(null);
    const [apellidos, setApellidos] = useState<string | null>(null);
    const [fechaNacimiento, setFechaNacimiento] = useState<string>("1995-02-03");
    const [estatura, setEstatura] = useState<string | null>(null);
    const [direccion, setDireccion] = useState<string | null>(null);

    return (
        <div className="">
            <IonList lines="full">
                <IonListHeader lines="full">
                    <IonLabel>Bienvenido</IonLabel>
                </IonListHeader>
                <IonItem>
                    <IonLabel>Nombres</IonLabel>
                    <IonInput
                        value={nombres}
                        placeholder="Inola"
                        autoCapitalize="words"
                        onIonChange={nombres => setNombres(nombres.detail.value!)}></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel>Apellidos</IonLabel>
                    <IonInput
                        value={apellidos}
                        placeholder="Tudas"
                        onIonChange={apellidos => setApellidos(apellidos.detail.value!)}></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel>Fecha de nacimiento</IonLabel>
                    <IonDatetime 
                        value={fechaNacimiento}
                        placeholder="1995-02-03"
                        onIonChange={fechaNacimiento => setFechaNacimiento(fechaNacimiento.detail.value!)}></IonDatetime>
                </IonItem>
                <IonItem>
                    <IonLabel>Estatura</IonLabel>
                    <IonInput
                        value={estatura}
                        placeholder="1.68"
                        onIonChange={estatura => setEstatura(estatura.detail.value!)}></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel>Direccion</IonLabel>
                    <IonInput
                        value={direccion}
                        placeholder="Av. Larco 657 Galería Larco Tda.43."
                        onIonChange={direccion => setDireccion(direccion.detail.value!)}></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel>Ubicacion</IonLabel>
                </IonItem>
                <IonItem>
                    <IonButton expand="full">Registrarse</IonButton>
                </IonItem>
            </IonList>
        </div>
    );
};

export default VisitanteForm;