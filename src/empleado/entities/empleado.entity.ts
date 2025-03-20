import { Usuario } from "src/usuario/entities/usuario.entity";

export class Empleado {
    id: number;
    usuario: Usuario;
    estacion: null;
    horaEntrada: Date | null;
    horaSalida: Date | null;
    rol: string;
    createdAt: Date;
    updatedAt: Date;
}
