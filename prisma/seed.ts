import { PrismaClient } from '@prisma/client'
import { empleadosData } from './data/empleados_seed';
import { serviciosData } from './data/servicios_seed';
import { productosData } from './data/productos_seed';

const prisma = new PrismaClient();

async function seedEmpleados() {
    console.log("Seeding empleados...");
    try{
        for(let i=0; i<empleadosData.length; i++) {
            await prisma.empleado.create({
                data: empleadosData[i]
            });
        }
    } catch(e) {
        console.error(`Error seeding Empleados ${e}`);
    }
}

async function seedServicios() {
    console.log("Seeding servicios...");
    try{
        await prisma.servicio.createMany({
            data: serviciosData
        });
    } catch(e) {
        console.error(`Error seeding Servicios ${e}`);
    }
}

async function seedProductos() {
    console.log("Seeding productos...");
    try {
        await prisma.producto.createMany({
            data: productosData
        });
    } catch (e) {
        console.log(`Error seeding Productos ${e}`);
    }
}

seedEmpleados();
seedServicios();
seedProductos();

