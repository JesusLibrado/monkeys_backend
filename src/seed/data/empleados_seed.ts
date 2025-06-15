import { RolEmpleado } from '../../types/graphql';

export const empleadosData = [
  {
    nombre: 'Uriel',
    apellido: 'Velasco Galvan',
    rol: RolEmpleado.BARBERO,
    usuario: {
      create: {
        email: 'uriel@email.com',
        numeroTelefono: '2281434972',
      },
    },
    estacion: {
      create: {
        numero: 1,
      },
    },
  },
  {
    nombre: 'Javier',
    apellido: 'Gonzalez Hernandez',
    rol: RolEmpleado.BARBERO,
    usuario: {
      create: {
        email: 'javier@email.com',
        numeroTelefono: '2281570630',
      },
    },
    estacion: {
      create: {
        numero: 2,
      },
    },
  },
  {
    nombre: 'Oswaldo',
    apellido: 'Ruiz Hernandez',
    rol: RolEmpleado.BARBERO,
    usuario: {
      create: {
        email: 'oswaldo@email.com',
        numeroTelefono: '2281479279',
      },
    },
    estacion: {
      create: {
        numero: 3,
      },
    },
  },
  {
    nombre: 'Jimena',
    apellido: 'Landa Hernandez',
    rol: RolEmpleado.BARBERO,
    usuario: {
      create: {
        email: 'jimena@email.com',
        numeroTelefono: '2283763445',
      },
    },
    estacion: {
      create: {
        numero: 4,
      },
    },
  },
];
