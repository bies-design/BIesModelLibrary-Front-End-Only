// // lib/prisma.ts
// import 'dotenv/config';
// import path from 'path';
// require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
// import { PrismaPg } from '@prisma/adapter-pg';
// import { PrismaClient } from '../prisma/generated/prisma/client';

// const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
// const prisma = new PrismaClient({ adapter });

// export { prisma };

// lib/prisma.ts
import { PrismaClient } from '../prisma/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL_REMOTE!,
});

const prisma =
    globalForPrisma.prisma ||
    new PrismaClient({ adapter });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;
