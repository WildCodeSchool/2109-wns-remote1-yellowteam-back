/* eslint-disable no-console */
import { PrismaClient, Role, Status } from '@prisma/client';
import faker from 'faker';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const startDate = () =>
  new Date(Date.now()).setDate(
    new Date().getDate() + Math.floor(Math.random() * 100)
  );

const endDate = () =>
  new Date(startDate()).setDate(
    new Date().getDate() + 5 + Math.floor(Math.random() * 100)
  );

const dueDate = () =>
  new Date(endDate()).setDate(
    new Date().getDate() + 10 + Math.floor(Math.random() * 10)
  );

const randomStatusProject = () => {
  const status: Status[] = ['IN_PROGRESS', 'NOT_STARTED', 'FIHISHED'];
  return status[Math.floor(Math.random() * status.length)];
};

const seed = async () => {
  const newAdmin = {
    firstName: process.env.ADMIN_NAME as string,
    lastName: process.env.ADMIN_NAME as string,
    email: process.env.ADMIN_EMAIL as string,
    password: bcrypt.hashSync(process.env.ADMIN_PASSWORD as string, 10),
    isDisabled: false,
    role: ['ADMIN'] as Role[],
  };

  const newSuperAdmin = {
    firstName: process.env.SUPER_ADMIN_NAME as string,
    lastName: process.env.SUPER_ADMIN_NAME as string,
    email: process.env.SUPER_ADMIN_EMAIL as string,
    password: bcrypt.hashSync(process.env.SUPER_ADMIN_PASSWORD as string, 10),
    isDisabled: false,
    role: ['SUPER_ADMIN'] as Role[],
  };

  const newManager = () => ({
    firstName: faker.name.findName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: bcrypt.hashSync('password', 10),
    isDisabled: false,
    role: ['MANAGER'] as Role[],
  });

  const newProject = () => ({
    title: faker.company.companyName(),
    description: faker.lorem.paragraph(),
    private: false,
    enable: true,
    status_project: 'IN_PROGRESS' as Status,
    total_time_spent: new Date(216753972).toISOString(),
    start_date: new Date(startDate()).toISOString(),
    end_date: new Date(endDate()).toISOString(),
    due_date: new Date(dueDate()).toISOString(),
  });

  const fakeManagers = new Array(2).fill('').map(() => newManager());
  const fakeProjects = new Array(10).fill('').map(() => newProject());

  console.log('🌱 Generate 1 admin ...');
  await prisma.user.create({
    data: newAdmin,
  });

  console.log('🌱 Generate 1 super admin ...');
  await prisma.user.create({
    data: newSuperAdmin,
  });

  console.log('🌱 Generate 2 Managers ...');
  const createdManagers = await Promise.all(
    fakeManagers.map((newManagerData) =>
      prisma.user.create({
        data: newManagerData,
      })
    )
  );

  console.log('🌱 Generate 10 Projects ...');
  const createdProjects = Promise.all(
    fakeProjects.map((newProjectData) =>
      prisma.project.create({
        data: {
          ...newProjectData,
          status_project: randomStatusProject() as Status,
          ownerId:
            createdManagers[Math.floor(Math.random() * createdManagers.length)]
              .id,
        },
      })
    )
  );
};

seed()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log('✅ All done !');
  });
