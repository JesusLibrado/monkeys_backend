import { Estacion } from "src/estacion/entities/estacion.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";

export class Empleado {
    id: number;
    usuario: Usuario;
    estacion: Estacion | null;
    horaEntrada: Date | null;
    horaSalida: Date | null;
    rol: string;
    createdAt: Date;
    updatedAt: Date;
}
