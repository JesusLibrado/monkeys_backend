import { UpdateEstacionInput } from "src/graphql";
import { CreateUsuarioInput } from "src/usuario/dto/create-usuario.input";

export class CreateEmpleadoInput{
    usuario: CreateUsuarioInput
    estacion?: UpdateEstacionInput
    horaEntrada?: string
    horaSalida?: string
    rol: "BARBERO" | "RECEPCIONISTA"
}

