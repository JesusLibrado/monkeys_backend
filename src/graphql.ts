
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum RolEmpleado {
    BARBERO = "BARBERO",
    RECEPCIONISTA = "RECEPCIONISTA"
}

export class CreateEmpleadoInput {
    usuario?: Nullable<CreateUsuarioInput>;
    estacion?: Nullable<UpdateEstacionInput>;
    horaEntrada?: Nullable<string>;
    horaSalida?: Nullable<string>;
    rol: RolEmpleado;
}

export class UpdateEmpleadoInput {
    id: string;
    usuario?: Nullable<UpdateUsuarioInput>;
    estacion?: Nullable<UpdateEstacionInput>;
    horaEntrada?: Nullable<string>;
    horaSalida?: Nullable<string>;
    rol?: Nullable<RolEmpleado>;
}

export class CreateEstacionInput {
    numero: number;
    empleado?: Nullable<UpdateEmpleadoInput>;
    disponible?: Nullable<boolean>;
}

export class UpdateEstacionInput {
    id: string;
    numero?: Nullable<number>;
    empleado?: Nullable<UpdateEmpleadoInput>;
    disponible?: Nullable<boolean>;
}

export class CreateUsuarioInput {
    nombre: string;
    apellido: string;
    email: string;
    numeroTelefono?: Nullable<string>;
    password: string;
}

export class UpdateUsuarioInput {
    id: string;
    nombre?: Nullable<string>;
    apellido?: Nullable<string>;
    email?: Nullable<string>;
    numeroTelefono?: Nullable<string>;
    password?: Nullable<string>;
    acvtivo?: Nullable<boolean>;
}

export class Empleado {
    id?: Nullable<string>;
    usuario?: Nullable<Usuario>;
    estacion?: Nullable<Estacion>;
    horaEntrada?: Nullable<string>;
    horaSalida?: Nullable<string>;
    rol?: Nullable<RolEmpleado>;
    createdAt?: Nullable<Date>;
    updatedAt?: Nullable<Date>;
}

export abstract class IQuery {
    abstract empleados(): Nullable<Empleado>[] | Promise<Nullable<Empleado>[]>;

    abstract empleado(id: number): Nullable<Empleado> | Promise<Nullable<Empleado>>;

    abstract estaciones(): Nullable<Estacion>[] | Promise<Nullable<Estacion>[]>;

    abstract estacion(id: number): Nullable<Estacion> | Promise<Nullable<Estacion>>;

    abstract usuarios(): Nullable<Usuario>[] | Promise<Nullable<Usuario>[]>;

    abstract usuario(id: number): Nullable<Usuario> | Promise<Nullable<Usuario>>;
}

export abstract class IMutation {
    abstract createEmpleado(createEmpleadoInput: CreateEmpleadoInput): Empleado | Promise<Empleado>;

    abstract updateEmpleado(updateEmpleadoInput: UpdateEmpleadoInput): Empleado | Promise<Empleado>;

    abstract removeEmpleado(id: number): Nullable<Empleado> | Promise<Nullable<Empleado>>;

    abstract createEstacion(createEstacionInput: CreateEstacionInput): Estacion | Promise<Estacion>;

    abstract updateEstacion(updateEstacionInput: UpdateEstacionInput): Estacion | Promise<Estacion>;

    abstract removeEstacion(id: number): Nullable<Estacion> | Promise<Nullable<Estacion>>;
}

export class Estacion {
    id: string;
    numero?: Nullable<number>;
    empleado: Empleado;
    disponible?: Nullable<boolean>;
    createdAt: Date;
    updatedAt: Date;
}

export class Usuario {
    id?: Nullable<string>;
    empleado?: Nullable<Empleado>;
    nombre: string;
    apellido: string;
    email?: Nullable<string>;
    numeroTelefono?: Nullable<string>;
    password: string;
    activo?: Nullable<boolean>;
    createdAt?: Nullable<Date>;
    updatedAt?: Nullable<Date>;
}

type Nullable<T> = T | null;
