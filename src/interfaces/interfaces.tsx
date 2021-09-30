import { RouteComponentProps } from "react-router";

export interface Visita {
    id?: string;
    nombres: string;
    apellidos: string;
    fecha_nacimiento: string;
    estatura: number;
    direccion: string;
    latitud: number;
    longitud: number;
    fecha_registro: string;
    peso?: number;
    temperatura?: number;
    presion?: number;
    saturacion?: number;
    fecha_chequeo?: string;
}

export interface AppPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
}

export interface ToastController {
    show: boolean;
    message: string;
}

export interface ChequeoProps extends RouteComponentProps<{
    id: string;
}> {}
  