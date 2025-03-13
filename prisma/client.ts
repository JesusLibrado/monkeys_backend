import { PrismaClient } from '@prisma/client';

const globalPrismaClient = globalThis as unknown as {prisma: PrismaClient};

export const prisma = globalPrismaClient.prisma || new PrismaClient();

if (!process.env.NODE_ENV?.includes('prod')) globalPrismaClient.prisma = prisma;