import { PrismaClient } from "@prisma/client";

//if global prisma is set, take the same value and export, otherwise create a new client
const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === 'development') {
    global.prisma = prisma
}

export {
    prisma
}