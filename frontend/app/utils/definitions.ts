export type User = {
    rut: string;
    nombres: string;
    apellidos: string;
    correo: string;
    clave: string;
    area: string;
    cargo: string;
    turno: string;
    empresa: string;
    qrCode: string;
    pin: string;
    sueldo: number;
    rolId: number;
};

export type Attendance = {
    id: number;
    horaEntrada: Date;
    horaSalida: Date;
    fecha: Date;
    usuarioRut: String;
}