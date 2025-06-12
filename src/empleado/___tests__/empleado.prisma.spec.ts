import { prisma } from 'prisma/client';

describe('EmpleadoDBIntegration', () => {
  const empleadosData = [
    {
      nombre: 'uriel',
      apellido: 'velasco',
      usuario: {
        email: 'empleado1@email.com',
      },
      rol: 'BARBERO',
    },
    {
      nombre: 'javier',
      apellido: 'sanchez',
      usuario: {
        email: 'empleado2@email.com',
      },
      rol: 'BARBERO',
    },
  ];

  afterAll(async () => {
    const deleteEmpleados = prisma.empleado.deleteMany();
    const deleteUsuarios = prisma.usuario.deleteMany();

    await prisma.$transaction([deleteEmpleados, deleteUsuarios]);

    await prisma.$disconnect();
  });

  it('should create two new Empleados', async () => {
    for (let empleado in empleadosData) {
      console.log(empleado);
    }

    expect(true);
  });
});
