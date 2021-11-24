/* eslint-disable no-console */
import { PrismaClient, Role } from '@prisma/client';
import faker from 'faker';
import bcrypt from 'bcrypt';
import {
  dueDate,
  endDate,
  logGenerated,
  randomStatus,
  startDate,
} from './seedsService';

const prisma = new PrismaClient();

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

  const newUser = () => ({
    firstName: faker.name.findName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: bcrypt.hashSync('password', 10),
    isDisabled: false,
    role: ['USER'] as Role[],
  });

  const newProject = () => {
    const start = startDate().plus({
      days: Math.floor(Math.random() * 30),
      month: Math.floor(Math.random() * 4),
    });
    const end = endDate(start);
    const due = dueDate(end);

    return {
      title: faker.company.companyName(),
      description: faker.lorem.paragraph(),
      private: false,
      enable: true,
      status_project: randomStatus(),
      total_time_spent: 216753972,
      start_date: start.toJSDate(),
      end_date: end.toJSDate(),
      due_date: due.toJSDate(),
    };
  };

  const newTask = () => {
    const start = startDate();
    const end = endDate(start);

    return {
      title: faker.company.catchPhrase(),
      description: faker.lorem.paragraph(),
      private: false,
      enable: true,
      status_task: randomStatus(),
      total_time_spent: 216753972,
      start_date: start.toJSDate(),
      end_date: end.toJSDate(),
    };
  };

  const fakeManagers = new Array(2).fill('').map(() => newManager());
  const fakeProjects = new Array(10).fill('').map(() => newProject());
  const fakeTasks = new Array(20).fill('').map(() => newTask());
  const fakeUsers = new Array(30).fill('').map(() => newUser());

  console.log('🌱 Generate 1 admin ...');
  await prisma.user.create({
    data: newAdmin,
  });
  console.log('✅ ADMIN creation successfull');

  console.log('🌱 Generate 1 super admin ...');
  await prisma.user.create({
    data: newSuperAdmin,
  });
  console.log('✅ SUPER_ADMIN creation successfull');

  console.log('🌱 Generate 2 Managers ...');
  const createdManagers = await Promise.all(
    fakeManagers.map((newManagerData) =>
      prisma.user.create({
        data: newManagerData,
      })
    )
  );
  logGenerated(createdManagers);

  console.log('🌱 Generate 30 Users ...');
  const createdUsers = await Promise.all(
    fakeUsers.map((newUserData) =>
      prisma.user.create({
        data: newUserData,
      })
    )
  );
  logGenerated(createdUsers);

  console.log('🌱 Generate 10 Projects ...');
  const createdProjects = await Promise.all(
    fakeProjects.map((newProjectData) => {
      const randomStartSlice = Math.floor(Math.random() * createdUsers.length);
      const randomEndSlice = Math.floor(
        Math.random() * randomStartSlice + createdUsers.length
      );
      const slicedUsers = () => {
        const sliced = createdUsers
          .slice(randomStartSlice, randomEndSlice)
          .map((user) => ({
            id: user.id,
          }));

        return sliced;
      };

      return prisma.project.create({
        data: {
          ...newProjectData,
          ownerId:
            createdManagers[Math.floor(Math.random() * createdManagers.length)]
              .id,
          users: {
            connect: slicedUsers(),
          },
        },
      });
    })
  );
  logGenerated(createdProjects);

  console.log('🌱 Generate 20 Tasks ...');
  const createdTasks = await Promise.all(
    fakeTasks.map((newTaskData) =>
      prisma.task.create({
        data: {
          ...newTaskData,
          project: {
            connect: {
              id: createdProjects[
                Math.floor(Math.random() * createdProjects.length)
              ].id,
            },
          },

          user: {
            connect: {
              id: createdUsers[Math.floor(Math.random() * createdUsers.length)]
                .id,
            },
          },
        },
      })
    )
  );

  logGenerated(createdTasks);
};

seed()
  .catch(async (e) => {
    console.error(e);
    console.log('❌ Oops there is something wrong !');
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log('🌱✅ All done !');
  });
