import { PrismaClient } from '@prisma/client';
import { empleadosData, serviciosData, productosData } from './data';
import { DB_URL } from '../environments';

process.env.DB_URL = DB_URL;
const prisma = new PrismaClient();

async function seedEmpleados() {
  console.log('seeding empleados...');
  try {
    for (let i = 0; i < empleadosData.length; i++) {
      await prisma.empleado.create({
        data: empleadosData[i],
      });
    }
  } catch (e) {
    console.error(`Error seeding Empleados ${e}`);
  }
}

async function seedServicios() {
  console.log('seeding servicios...');
  try {
    await prisma.servicio.createMany({
      data: serviciosData,
    });
  } catch (e) {
    console.error(`Error seeding Servicios ${e}`);
  }
}

async function seedProductos() {
  console.log('seeding productos...');
  try {
    await prisma.producto.createMany({
      data: productosData,
    });
  } catch (e) {
    console.log(`Error seeding Productos ${e}`);
  }
}

seedEmpleados();
seedServicios();
seedProductos();
