export interface Visitante {
    id: number;
    nombres: string;
    apellidos: string;
    fecha_nacimiento: Date;
    estatura: number;
    direccion: string;
    latitud: number;
    longitud: number;
    ts: Date;
}

export interface Chequeo {
    id: number;
    visitante_id: number;
    peso: number;
    temperatura: number;
    presion: number;
    saturacion: number;
    ts: Date;
}

export interface AppPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
}
  