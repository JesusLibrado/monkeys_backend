export class Usuario {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    numeroTelefono: string;
    password: string;
    activo: Boolean;
    createdAt: string;
    updatedAt: string;

    constructor(newUsuario: {
        id: string,
        nombre: string,
        apellido: string,
        email: string,
        numeroTelefono: string,
        password: string,
        activo: Boolean,
        createdAt: string,
        updatedAt: string
    }) {
        for(let property in Object.keys(newUsuario)) {
            this[property] = newUsuario[property];
        }
    }
}
