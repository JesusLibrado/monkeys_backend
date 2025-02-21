
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum EmpleadoEstatus {
    ACTIVO = "ACTIVO",
    INACTIVO = "INACTIVO"
}

export enum EventoEstatus {
    INICIADO = "INICIADO",
    TERMINADO = "TERMINADO",
    PAGADO = "PAGADO",
    CANCELADO = "CANCELADO"
}

export enum FacturaEstatus {
    CREADA = "CREADA",
    PAGADA = "PAGADA",
    CANCELADA = "CANCELADA"
}

export enum MetodoDePago {
    TARJETA = "TARJETA",
    TRANSFERENCIA = "TRANSFERENCIA",
    EFECTIVO = "EFECTIVO"
}

export enum UsuarioEstatus {
    ACTIVO = "ACTIVO",
    INACTIVO = "INACTIVO",
    CANCELADO = "CANCELADO"
}

export class CreateEmpleadoInput {
    email: string;
    numeroTelefono: string;
    password: string;
    estatusUsuario?: Nullable<UsuarioEstatus>;
    nombre: string;
    apellido: string;
    estatusEmpleado?: Nullable<EmpleadoEstatus>;
    fechaHoraInicioTurno?: Nullable<string>;
    fechaHoraTerminoTurno?: Nullable<string>;
}

export class UpdateEmpleadoInput {
    id: number;
    email?: Nullable<string>;
    numeroTelefono?: Nullable<string>;
    password?: Nullable<string>;
    estatusUsuario?: Nullable<UsuarioEstatus>;
    nombre?: Nullable<string>;
    apellido?: Nullable<string>;
    estatusEmpleado?: Nullable<EmpleadoEstatus>;
    fechaHoraInicioTurno?: Nullable<string>;
    fechaHoraTerminoTurno?: Nullable<string>;
}

export class CrearEventoInput {
    empleadoID: string;
    nombreCliente: string;
    numeroEstacion: number;
    estatus?: Nullable<EventoEstatus>;
}

export interface Usuario {
    id: string;
    email: string;
    numeroTelefono: string;
    password: string;
    estatusUsuario: UsuarioEstatus;
}

export class Empleado implements Usuario {
    id: string;
    email: string;
    numeroTelefono: string;
    password: string;
    estatusUsuario: UsuarioEstatus;
    nombre: string;
    apellido: string;
    estatusEmpleado: EmpleadoEstatus;
    fechaHoraInicioTurno?: Nullable<string>;
    fechaHoraTerminoTurno?: Nullable<string>;
}

export abstract class IQuery {
    abstract empleados(): Nullable<Empleado>[] | Promise<Nullable<Empleado>[]>;

    abstract empleado(id: number): Nullable<Empleado> | Promise<Nullable<Empleado>>;

    abstract evento(id: string): Nullable<Evento> | Promise<Nullable<Evento>>;

    abstract eventos(): Evento[] | Promise<Evento[]>;

    abstract factura(id: string): Nullable<Factura> | Promise<Nullable<Factura>>;

    abstract facturas(): Factura[] | Promise<Factura[]>;
}

export abstract class IMutation {
    abstract createEmpleado(createEmpleadoInput: CreateEmpleadoInput): Empleado | Promise<Empleado>;

    abstract updateEmpleado(updateEmpleadoInput: UpdateEmpleadoInput): Empleado | Promise<Empleado>;

    abstract removeEmpleado(id: number): Nullable<Empleado> | Promise<Nullable<Empleado>>;
}

export class Evento {
    id: string;
    empleado: Empleado;
    estatus: EventoEstatus;
    nombreCliente: string;
    numeroEstacion: number;
    factura: Factura;
    fechaHoraCreacion: string;
    fechaHoraActualizacion: string;
}

export class Factura {
    id: string;
    folio: number;
    estatus: FacturaEstatus;
    metodoDePago: MetodoDePago;
    fechaHoraCreacion: string;
    fechaHoraActualizacion: string;
}

type Nullable<T> = T | null;
