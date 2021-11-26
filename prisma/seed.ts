/* eslint-disable no-console */
import { PrismaClient, Status_Invitation } from '@prisma/client';
import { logGenerated, randomNotificationStatus } from './seeds/seedsService';
import newProject from './seeds/createProjectSeed';
import newUser from './seeds/createUserSeed';
import newTask from './seeds/createTaskSeed';
import { newAdmin, newSuperAdmin } from './seeds/createAdmins';
import newManager from './seeds/createManagerSeed';
import newTaskComment from './seeds/createTaskCommentSeed';
import newProjectComment from './seeds/createProjectCommentSeed';
import newNotification from './seeds/createUserNotification';
import newFile from './seeds/createFilesSeed';

const prisma = new PrismaClient();

const seed = async () => {
  const fakeManagers = new Array(2).fill('').map(() => newManager());
  const fakeProjects = new Array(10).fill('').map(() => newProject());
  const fakeTasks = new Array(20).fill('').map(() => newTask());
  const fakeUsers = new Array(30).fill('').map(() => newUser());
  const fakeTaskComments = new Array(200).fill('').map(() => newTaskComment());
  const fakeProjectsComments = new Array(200)
    .fill('')
    .map(() => newProjectComment());
  const fakeUserNotifications = new Array(200)
    .fill('')
    .map(() => newNotification());
  const fakeProjectFiles = new Array(50).fill('').map(() => newFile());
  const fakeTaskFiles = new Array(150).fill('').map(() => newFile());

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

  // MANAGERS
  console.log('🌱 Generate 2 Managers ...');
  const createdManagers = await Promise.all(
    fakeManagers.map((newManagerData) =>
      prisma.user.create({
        data: newManagerData,
      })
    )
  );
  logGenerated({ entity: createdManagers, name: 'Managers' });

  // USERS
  console.log('🌱 Generate 30 Users ...');
  const createdUsers = await Promise.all(
    fakeUsers.map((newUserData) =>
      prisma.user.create({
        data: newUserData,
      })
    )
  );
  logGenerated({ entity: createdUsers, name: 'Users' });

  // PROJECTS
  console.log('🌱 Generate 10 Projects with invitations ...');
  const createdProjects = await Promise.all(
    fakeProjects.map((newProjectData) => {
      const randomStartSlice = Math.floor(Math.random() * createdUsers.length);
      const randomEndSlice = Math.floor(
        Math.random() * randomStartSlice + createdUsers.length
      );

      const slicedUsersIds = () => {
        const sliced = createdUsers
          .slice(randomStartSlice, randomEndSlice)
          .map((user) => ({
            id: user.id,
          }));

        return sliced;
      };
      const slicedInvitations = () => {
        const sliced = createdUsers
          .slice(randomStartSlice, randomEndSlice)
          .map((user) => ({
            email: user.email,
            status: 'ACCEPTED' as Status_Invitation,
            userId: user.id,
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
            connect: slicedUsersIds(),
          },
          invitations: {
            createMany: {
              data: slicedInvitations(),
            },
          },
        },
      });
    })
  );
  logGenerated({ entity: createdProjects, name: 'Projects' });

  const allProjects = await prisma.project.findMany({
    include: {
      users: true,
    },
  });

  // TASKS
  console.log('🌱 Generate 20 Tasks ...');
  const createdTasks = await Promise.all(
    fakeTasks.map((newTaskData) => {
      const randomProjectIndex = Math.floor(
        Math.random() * createdProjects.length
      );
      const randomProjectId = allProjects[randomProjectIndex].id;

      return prisma.task.create({
        data: {
          ...newTaskData,

          project: {
            connect: {
              id: randomProjectId,
            },
          },

          user: {
            connect: {
              id: allProjects[randomProjectIndex].users[
                Math.floor(
                  Math.random() * allProjects[randomProjectIndex].users.length
                )
              ].id,
            },
          },
        },
      });
    })
  );

  logGenerated({ entity: createdTasks, name: 'Tasks' });

  // TASKS NOTIFICATIONS
  console.log('🌱 Generate 200 Task Notifications ...');
  const createdUserTaskNotifications = await Promise.all(
    fakeUserNotifications.map((newNotificationData) => {
      const randomProjectIndex = Math.floor(
        Math.random() * createdProjects.length
      );
      const randomProjectId = allProjects[randomProjectIndex].id;

      return prisma.notification.create({
        data: {
          ...newNotificationData,

          senderId:
            createdManagers[Math.floor(Math.random() * createdManagers.length)]
              .id,
          type: 'PROJECT',

          status: randomNotificationStatus(),

          reference_id: randomProjectId,

          user: {
            connect: {
              id: allProjects[randomProjectIndex].users[
                Math.floor(
                  Math.random() * allProjects[randomProjectIndex].users.length
                )
              ].id,
            },
          },
        },
      });
    })
  );

  logGenerated({
    entity: createdUserTaskNotifications,
    name: 'Tasks Notifications',
  });
  const AllTasks = await prisma.task.findMany({
    include: {
      user: true,
    },
  });
  // PROJECT NOTIFICATIONS
  console.log('🌱 Generate 200 Project Notifications ...');
  const createdUserProjectNotifications = await Promise.all(
    fakeUserNotifications.map((newNotificationData) => {
      const randomTaskIndex = Math.floor(Math.random() * AllTasks.length);
      const randomTaskId = AllTasks[randomTaskIndex].projectId;

      return prisma.notification.create({
        data: {
          ...newNotificationData,

          senderId:
            createdManagers[Math.floor(Math.random() * createdManagers.length)]
              .id,

          type: 'TASK',

          status: randomNotificationStatus(),

          reference_id: randomTaskId,

          user: {
            connect: {
              id: AllTasks[randomTaskIndex].userId,
            },
          },
        },
      });
    })
  );

  logGenerated({
    entity: createdUserProjectNotifications,
    name: 'Projects Notifications',
  });

  // PROJECT NOTIFICATIONS
  console.log('🌱 Generate 10 Notifications ...');
  const createdProjectNotification = await Promise.all(
    fakeUserNotifications.map((newNotificationData) =>
      prisma.notification.create({
        data: {
          ...newNotificationData,
          senderId:
            createdManagers[Math.floor(Math.random() * createdManagers.length)]
              .id,
          type: 'PROJECT',
          status: randomNotificationStatus(),
          reference_id:
            createdProjects[Math.floor(Math.random() * createdProjects.length)]
              .id,
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
  logGenerated({
    entity: createdProjectNotification,
    name: 'Notification Tasks',
  });

  // TASKS COMMENTS
  console.log('🌱 Generate 200 Comments in Tasks ...');
  const createdTasksComments = await Promise.all(
    fakeTaskComments.map((newCommentData) =>
      prisma.comment.create({
        data: {
          ...newCommentData,

          task: {
            connect: {
              id: createdTasks[Math.floor(Math.random() * createdTasks.length)]
                .id,
            },
          },

          user_task_comments: {
            connect: {
              id: createdUsers[Math.floor(Math.random() * createdUsers.length)]
                .id,
            },
          },
        },
      })
    )
  );

  logGenerated({ entity: createdTasksComments, name: 'Comments Tasks' });

  // PROJECT COMMENTS
  console.log('🌱 Generate 200 Comments in Projects ...');
  const createdProjectsComments = await Promise.all(
    fakeProjectsComments.map((newCommentData) =>
      prisma.comment.create({
        data: {
          ...newCommentData,

          project: {
            connect: {
              id: createdProjects[
                Math.floor(Math.random() * createdProjects.length)
              ].id,
            },
          },

          user_project_comments: {
            connect: {
              id: createdUsers[Math.floor(Math.random() * createdUsers.length)]
                .id,
            },
          },
        },
      })
    )
  );

  logGenerated({ entity: createdProjectsComments, name: 'Comments Projects' });

  // PROJECT FILE
  console.log('🌱 Generate 10 Files in Projects ...');
  const createdProjectsFile = await Promise.all(
    fakeProjectFiles.map((newFileData) => {
      const randomProjectIndex = Math.floor(
        Math.random() * createdProjects.length
      );
      const randomProjectId = allProjects[randomProjectIndex].id;
      const randomUserId =
        allProjects[randomProjectIndex].users[
          Math.floor(
            Math.random() * allProjects[randomProjectIndex].users.length
          )
        ].id;
      return prisma.file.create({
        data: {
          ...newFileData,

          project: {
            connect: {
              id: randomProjectId,
            },
          },

          user: {
            connect: {
              id: randomUserId,
            },
          },
        },
      });
    })
  );

  logGenerated({ entity: createdProjectsFile, name: 'Project File' });

  // TASK FILE
  console.log('🌱 Generate 10 Files in Tasks ...');
  const createdTaskFile = await Promise.all(
    fakeTaskFiles.map((newFileData) => {
      const randomTaskIndex = Math.floor(
        Math.random() * createdProjects.length
      );
      const randomTaskId = AllTasks[randomTaskIndex].id;
      const taskUserId = AllTasks[randomTaskIndex].user.id;
      return prisma.file.create({
        data: {
          ...newFileData,

          task: {
            connect: {
              id: randomTaskId,
            },
          },

          project: {
            connect: {
              id: AllTasks[randomTaskIndex].projectId,
            },
          },

          user: {
            connect: {
              id: taskUserId,
            },
          },
        },
      });
    })
  );

  logGenerated({ entity: createdTaskFile, name: 'Task File' });
};

seed()
  .catch(async (e) => {
    console.error(e);
    console.log('❌ Oops there is something wrong !');
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log('🌱✅ All done !!!');
  });