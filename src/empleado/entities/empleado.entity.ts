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

    constructor(newEmpleado: {
        id: number,
        usuario?: Usuario,
        estacion?: null,
        horaEntrada: Date | null,
        horaSalida: Date | null,
        rol: string,
        createdAt: Date,
        updatedAt: Date
    }) {
        for(let property in Object.keys(newEmpleado)) {
            this[property] = newEmpleado[property];
        }
        console.log(this.usuario);
    }

}
