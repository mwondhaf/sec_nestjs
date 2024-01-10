import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const admin = {
  email: 'admin@mail.com',
  password: 'admin123',
  idNumber: '12345',
  name: 'Admin',
};

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);
  const adminUser = await prisma.user.upsert({
    where: { email: admin.email },
    update: {
      email: admin.email,
      password: await bcrypt.hash(admin.password, 10),
      idNumber: admin.idNumber,
      role: 'ADMIN',
      name: admin.name,
    },
    create: {
      email: admin.email,
      password: await bcrypt.hash(admin.password, 10),
      idNumber: admin.idNumber,
      role: 'ADMIN',
      name: admin.name,
    },
  });
  if (adminUser) {
    await prisma.userProfile.create({
      data: {
        userEmail: adminUser.email,
      },
    });
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
