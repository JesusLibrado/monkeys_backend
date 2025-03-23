import { Empleado } from "@prisma/client";

export class Estacion {
    id: number;
    numero: number;
    empleado: Empleado | null;
    disponible: Boolean;
    createdAt: Date;
    updatedAt: Date;
}
