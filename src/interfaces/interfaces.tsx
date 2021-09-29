export interface Visita {
    id: number;
    nombres: string;
    apellidos: string;
    fecha_nacimiento: Date;
    estatura: number;
    direccion: string;
    latitud: number;
    longitud: number;
    ts_registro: Date;
    peso?: number;
    temperatura?: number;
    presion?: number;
    saturacion?: number;
    ts_chequeo?: Date;
}

export interface AppPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
}

export interface LocationError {
    showError: boolean;
    message?: string;
}
  