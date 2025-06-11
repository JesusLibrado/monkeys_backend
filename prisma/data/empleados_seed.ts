import { RolEmpleado } from '../../src/graphql';

export const empleadosData = [
    {
        nombre: 'Uriel',
        apellido: 'Velasco',
        rol: RolEmpleado.BARBERO,
        usuario: {
            create: {
                email: 'uriel@email.com'
            }
        },
        estacion: {
            create: {
                numero: 1
            }
        }
    },
    {
        nombre: 'Javier',
        apellido: 'Hernandez',
        rol: RolEmpleado.BARBERO,
        usuario: {
            create: {
                email: 'javier@email.com'
            }
        },
        estacion: {
            create: {
                numero: 2
            }
        }
    },
    {
        nombre: 'Oswaldo',
        apellido: 'Garcia',
        rol: RolEmpleado.BARBERO,
        usuario: {
            create: {
                email: 'oswaldo@email.com'
            }
        },
        estacion: {
            create: {
                numero: 3
            }
        }
    },
    {
        nombre: 'Jimena',
        apellido: 'Gutierritoz',
        rol: RolEmpleado.BARBERO,
        usuario: {
            create: {
                email: 'jimena@email.com'
            }
        },
        estacion: {
            create: {
                numero: 4
            }
        }
    },
]