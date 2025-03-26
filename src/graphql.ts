
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

export enum EstatusEvento {
    EN_PROGRESO = "EN_PROGRESO",
    TERMINADO = "TERMINADO",
    PAGADO = "PAGADO",
    CANCELADO = "CANCELADO"
}

export enum EstatusFactura {
    CREADA = "CREADA",
    PAGADA = "PAGADA",
    CANCELADA = "CANCELADA"
}

export enum MetodoDePago {
    EFECTIVO = "EFECTIVO",
    TARJETA_CREDITO = "TARJETA_CREDITO",
    TARJETA_DEBITO = "TARJETA_DEBITO"
}

export enum EstatusPago {
    REALIZADO = "REALIZADO",
    PENDIENTE = "PENDIENTE"
}

export enum CategoriaServicio {
    BARBA = "BARBA",
    CORTE = "CORTE",
    FACIAL = "FACIAL",
    GRECA = "GRECA",
    OTRO = "OTRO"
}

export class CreateConceptoFacturaInput {
    factura: UpdateFacturaInput;
    cantidad: number;
    producto?: Nullable<UpdateProductoInput>;
    servicio?: Nullable<UpdateServicioInput>;
}

export class CreateConceptoFacturaInputWithServicio {
    factura: UpdateFacturaInput;
    cantidad: number;
    servicio?: Nullable<CreateServicioInput>;
}

export class UpdateConceptoFacturaInput {
    id: number;
    cantidad?: Nullable<number>;
    producto?: Nullable<UpdateProductoInput>;
    servicio?: Nullable<UpdateServicioInput>;
}

export class UpdateConceptoFacturaInputWithServicio {
    id: number;
    cantidad?: Nullable<number>;
    servicio?: Nullable<CreateServicioInput>;
}

export class CreateEmpleadoInput {
    nombre: string;
    apellido: string;
    usuario: CreateUsuarioInput;
    estacion?: Nullable<UpdateEstacionInput>;
    horaEntrada?: Nullable<string>;
    horaSalida?: Nullable<string>;
    rol: RolEmpleado;
}

export class UpdateEmpleadoInput {
    id: number;
    nombre?: Nullable<string>;
    apellido?: Nullable<string>;
    usuario?: Nullable<UpdateUsuarioInput>;
    estacion?: Nullable<UpdateEstacionInput>;
    horaEntrada?: Nullable<string>;
    horaSalida?: Nullable<string>;
    rol?: Nullable<RolEmpleado>;
}

export class CreateEstacionInput {
    numero: number;
    empleado?: Nullable<UpdateEmpleadoInput>;
}

export class UpdateEstacionInput {
    id: number;
    empleado?: Nullable<UpdateEmpleadoInput>;
    disponible?: Nullable<boolean>;
}

export class CreateEventoInput {
    nombreCliente: string;
    estacion: UpdateEstacionInput;
    factura?: Nullable<UpdateFacturaInput>;
}

export class UpdateEventoInput {
    id: number;
    nombreCliente?: Nullable<string>;
    estacion?: Nullable<UpdateEstacionInput>;
    estatus?: Nullable<EstatusEvento>;
    factura?: Nullable<UpdateFacturaInput>;
}

export class CreateFacturaInput {
    conceptos?: Nullable<CreateConceptoFacturaInput[]>;
    evento: UpdateEventoInput;
}

export class CreateFacturaInputWithServicio {
    conceptos?: Nullable<CreateConceptoFacturaInputWithServicio[]>;
    evento: UpdateEventoInput;
}

export class UpdateFacturaInput {
    id: number;
    conceptos?: Nullable<Nullable<CreateConceptoFacturaInput>[]>;
    descuento?: Nullable<number>;
    estatus?: Nullable<EstatusFactura>;
}

export class UpdateFacturaInputWithServicio {
    id: number;
    conceptos?: Nullable<Nullable<CreateConceptoFacturaInputWithServicio>[]>;
    descuento?: Nullable<number>;
    estatus?: Nullable<EstatusFactura>;
}

export class CreatePagoInput {
    factura: UpdateFacturaInput;
    comision?: Nullable<number>;
    montoRecibido?: Nullable<number>;
    montoDevuelto?: Nullable<number>;
    metodoPago: MetodoDePago;
}

export class UpdatePagoInput {
    id: number;
    factura?: Nullable<UpdateFacturaInput>;
    comision?: Nullable<number>;
    montoRecibido?: Nullable<number>;
    montoDevuelto?: Nullable<number>;
    metodoPago?: Nullable<MetodoDePago>;
}

export class CreateProductoInput {
    nombre: string;
    marca?: Nullable<string>;
    cantidadDisponible: number;
    comisionEmpleado: number;
    precioProveedor: number;
    precioPublico: number;
    ganancia: number;
}

export class UpdateProductoInput {
    id: number;
    nombre?: Nullable<string>;
    marca?: Nullable<string>;
    cantidadVendida?: Nullable<number>;
    cantidadDisponible?: Nullable<number>;
    comisionEmpleado?: Nullable<number>;
    precioProveedor?: Nullable<number>;
    precioPublico?: Nullable<number>;
    ganancia?: Nullable<number>;
}

export class CreateServicioInput {
    nombre: string;
    categoria: CategoriaServicio;
    precio: number;
    comisionBarbero: number;
    ganancia: number;
}

export class UpdateServicioInput {
    id: number;
    nombre?: Nullable<string>;
    categoria?: Nullable<CategoriaServicio>;
    precio?: Nullable<number>;
    comisionBarbero?: Nullable<number>;
    ganancia?: Nullable<number>;
}

export class CreateUsuarioInput {
    email: string;
    numeroTelefono?: Nullable<string>;
    password?: Nullable<string>;
}

export class UpdateUsuarioInput {
    id: number;
    email?: Nullable<string>;
    numeroTelefono?: Nullable<string>;
    password?: Nullable<string>;
    acvtivo?: Nullable<boolean>;
}

export class ConceptoFactura {
    id: string;
    factura: Factura;
    cantidad: number;
    producto?: Nullable<Producto>;
    servicio?: Nullable<Servicio>;
    total: number;
    createdAt: Date;
    updatedAt: Date;
}

export abstract class IQuery {
    abstract conceptoFacturas(): Nullable<ConceptoFactura>[] | Promise<Nullable<ConceptoFactura>[]>;

    abstract conceptoFactura(id: number): Nullable<ConceptoFactura> | Promise<Nullable<ConceptoFactura>>;

    abstract empleados(): Nullable<Empleado>[] | Promise<Nullable<Empleado>[]>;

    abstract empleado(id: number): Nullable<Empleado> | Promise<Nullable<Empleado>>;

    abstract estaciones(): Nullable<Estacion>[] | Promise<Nullable<Estacion>[]>;

    abstract estacion(id: number): Nullable<Estacion> | Promise<Nullable<Estacion>>;

    abstract eventos(): Nullable<Evento>[] | Promise<Nullable<Evento>[]>;

    abstract evento(id: number): Nullable<Evento> | Promise<Nullable<Evento>>;

    abstract facturas(): Nullable<Factura>[] | Promise<Nullable<Factura>[]>;

    abstract factura(id: number): Nullable<Factura> | Promise<Nullable<Factura>>;

    abstract pagos(): Nullable<Pago>[] | Promise<Nullable<Pago>[]>;

    abstract pago(id: number): Nullable<Pago> | Promise<Nullable<Pago>>;

    abstract productos(): Nullable<Producto>[] | Promise<Nullable<Producto>[]>;

    abstract producto(id: number): Nullable<Producto> | Promise<Nullable<Producto>>;

    abstract servicios(): Nullable<Servicio>[] | Promise<Nullable<Servicio>[]>;

    abstract servicio(id: number): Nullable<Servicio> | Promise<Nullable<Servicio>>;

    abstract usuarios(): Nullable<Usuario>[] | Promise<Nullable<Usuario>[]>;

    abstract usuario(id: number): Nullable<Usuario> | Promise<Nullable<Usuario>>;
}

export abstract class IMutation {
    abstract createConceptoFactura(createConceptoFacturaInput: CreateConceptoFacturaInput): ConceptoFactura | Promise<ConceptoFactura>;

    abstract updateConceptoFactura(updateConceptoFacturaInput: UpdateConceptoFacturaInput): ConceptoFactura | Promise<ConceptoFactura>;

    abstract removeConceptoFactura(id: number): Nullable<ConceptoFactura> | Promise<Nullable<ConceptoFactura>>;

    abstract createEmpleado(createEmpleadoInput: CreateEmpleadoInput): Empleado | Promise<Empleado>;

    abstract updateEmpleado(updateEmpleadoInput: UpdateEmpleadoInput): Empleado | Promise<Empleado>;

    abstract removeEmpleado(id: number): Nullable<Empleado> | Promise<Nullable<Empleado>>;

    abstract createEstacion(createEstacionInput: CreateEstacionInput): Estacion | Promise<Estacion>;

    abstract updateEstacion(updateEstacionInput: UpdateEstacionInput): Estacion | Promise<Estacion>;

    abstract removeEstacion(id: number): Nullable<Estacion> | Promise<Nullable<Estacion>>;

    abstract createEvento(createEventoInput: CreateEventoInput): Evento | Promise<Evento>;

    abstract updateEvento(updateEventoInput: UpdateEventoInput): Evento | Promise<Evento>;

    abstract removeEvento(id: number): Nullable<Evento> | Promise<Nullable<Evento>>;

    abstract createFactura(createFacturaInput: CreateFacturaInput): Factura | Promise<Factura>;

    abstract updateFactura(updateFacturaInput: UpdateFacturaInput): Factura | Promise<Factura>;

    abstract removeFactura(id: number): Nullable<Factura> | Promise<Nullable<Factura>>;

    abstract createPago(createPagoInput: CreatePagoInput): Pago | Promise<Pago>;

    abstract updatePago(updatePagoInput: UpdatePagoInput): Pago | Promise<Pago>;

    abstract removePago(id: number): Nullable<Pago> | Promise<Nullable<Pago>>;

    abstract createProducto(createProductoInput: CreateProductoInput): Producto | Promise<Producto>;

    abstract updateProducto(updateProductoInput: UpdateProductoInput): Producto | Promise<Producto>;

    abstract removeProducto(id: number): Nullable<Producto> | Promise<Nullable<Producto>>;

    abstract createServicio(createServicioInput: CreateServicioInput): Servicio | Promise<Servicio>;

    abstract updateServicio(updateServicioInput: UpdateServicioInput): Servicio | Promise<Servicio>;

    abstract removeServicio(id: number): Nullable<Servicio> | Promise<Nullable<Servicio>>;

    abstract updateUsuario(usuario?: Nullable<UpdateUsuarioInput>): Usuario | Promise<Usuario>;
}

export class Empleado {
    id?: Nullable<string>;
    nombre: string;
    apellido: string;
    usuario?: Nullable<Usuario>;
    estacion?: Nullable<Estacion>;
    horaEntrada?: Nullable<string>;
    horaSalida?: Nullable<string>;
    rol?: Nullable<RolEmpleado>;
    createdAt?: Nullable<Date>;
    updatedAt?: Nullable<Date>;
}

export class Estacion {
    id: string;
    numero?: Nullable<number>;
    empleado?: Nullable<Empleado>;
    disponible?: Nullable<boolean>;
    eventos: Evento[];
    createdAt: Date;
    updatedAt: Date;
}

export class Evento {
    id: string;
    factura: Factura;
    nombreCliente?: Nullable<string>;
    estacion: Estacion;
    estatus?: Nullable<EstatusEvento>;
    createdAt: Date;
    updatedAt: Date;
}

export class Factura {
    id: string;
    evento: Evento;
    folio: number;
    conceptos: ConceptoFactura[];
    total: number;
    descuento?: Nullable<number>;
    estatus: EstatusFactura;
    createdAt: Date;
    updatedAt: Date;
}

export class Pago {
    id: string;
    factura: Factura;
    comision?: Nullable<number>;
    montoRecibido?: Nullable<number>;
    montoDevuelto?: Nullable<number>;
    metodoPago: MetodoDePago;
    estatus: EstatusPago;
    createdAt: Date;
    updatedAt: Date;
}

export class Producto {
    id: string;
    nombre: string;
    marca?: Nullable<string>;
    cantidadDisponible: number;
    cantidadVendida?: Nullable<number>;
    comisionEmpleado: number;
    precioProveedor: number;
    precioPublico: number;
    ganancia: number;
    createdAt: Date;
    updatedAt: Date;
}

export class Servicio {
    id: string;
    nombre: string;
    categoria: CategoriaServicio;
    precio: number;
    comisionBarbero: number;
    ganancia: number;
    createdAt: Date;
    updatedAt: Date;
}

export class Usuario {
    id?: Nullable<string>;
    empleado?: Nullable<Empleado>;
    email?: Nullable<string>;
    numeroTelefono?: Nullable<string>;
    password?: Nullable<string>;
    activo?: Nullable<boolean>;
    createdAt?: Nullable<Date>;
    updatedAt?: Nullable<Date>;
}

type Nullable<T> = T | null;
