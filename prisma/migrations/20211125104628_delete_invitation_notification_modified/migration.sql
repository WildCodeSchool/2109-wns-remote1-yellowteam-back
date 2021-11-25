/*
  Warnings:

  - You are about to drop the column `projectId` on the `File` table. All the data in the column will be lost.
  - You are about to drop the column `taskId` on the `File` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `File` table. All the data in the column will be lost.
  - You are about to drop the column `senderId` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `ownerId` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `projectId` on the `Project_Comment` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Project_Comment` table. All the data in the column will be lost.
  - You are about to drop the column `projectId` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `taskId` on the `Task_Comment` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Task_Comment` table. All the data in the column will be lost.
  - You are about to drop the `Invitation` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `project_id` to the `File` table without a default value. This is not possible if the table is not empty.
  - Added the required column `task_id` to the `File` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `File` table without a default value. This is not possible if the table is not empty.
  - Added the required column `project_id` to the `Notification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sender_id` to the `Notification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `task_id` to the `Notification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Notification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `owner_id` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `status_project` on the `Project` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `project_id` to the `Project_Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Project_Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `project_id` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `status_task` on the `Task` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `task_id` to the `Task_Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Task_Comment` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Status_Project" AS ENUM ('IN_PROGRESS', 'NOT_STARTED', 'FIHISHED');

-- AlterEnum
ALTER TYPE "Type_Notification" ADD VALUE 'INVITATION';

-- DropForeignKey
ALTER TABLE "File" DROP CONSTRAINT "File_projectId_fkey";

-- DropForeignKey
ALTER TABLE "File" DROP CONSTRAINT "File_taskId_fkey";

-- DropForeignKey
ALTER TABLE "File" DROP CONSTRAINT "File_userId_fkey";

-- DropForeignKey
ALTER TABLE "Invitation" DROP CONSTRAINT "Invitation_projectId_fkey";

-- DropForeignKey
ALTER TABLE "Invitation" DROP CONSTRAINT "Invitation_userId_fkey";

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_userId_fkey";

-- DropForeignKey
ALTER TABLE "Project_Comment" DROP CONSTRAINT "Project_Comment_projectId_fkey";

-- DropForeignKey
ALTER TABLE "Project_Comment" DROP CONSTRAINT "Project_Comment_userId_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_projectId_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_userId_fkey";

-- DropForeignKey
ALTER TABLE "Task_Comment" DROP CONSTRAINT "Task_Comment_taskId_fkey";

-- DropForeignKey
ALTER TABLE "Task_Comment" DROP CONSTRAINT "Task_Comment_userId_fkey";

-- AlterTable
ALTER TABLE "File" DROP COLUMN "projectId",
DROP COLUMN "taskId",
DROP COLUMN "userId",
ADD COLUMN     "project_id" TEXT NOT NULL,
ADD COLUMN     "task_id" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Notification" DROP COLUMN "senderId",
DROP COLUMN "userId",
ADD COLUMN     "project_id" TEXT NOT NULL,
ADD COLUMN     "sender_id" TEXT NOT NULL,
ADD COLUMN     "task_id" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "ownerId",
ADD COLUMN     "owner_id" TEXT NOT NULL,
DROP COLUMN "status_project",
ADD COLUMN     "status_project" "Status_Project" NOT NULL;

-- AlterTable
ALTER TABLE "Project_Comment" DROP COLUMN "projectId",
DROP COLUMN "userId",
ADD COLUMN     "project_id" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "projectId",
DROP COLUMN "userId",
ADD COLUMN     "project_id" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL,
DROP COLUMN "status_task",
ADD COLUMN     "status_task" "Status_Project" NOT NULL;

-- AlterTable
ALTER TABLE "Task_Comment" DROP COLUMN "taskId",
DROP COLUMN "userId",
ADD COLUMN     "task_id" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "Invitation";

-- DropEnum
DROP TYPE "Status";

-- DropEnum
DROP TYPE "Status_Invitation";

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task_Comment" ADD CONSTRAINT "Task_Comment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task_Comment" ADD CONSTRAINT "Task_Comment_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project_Comment" ADD CONSTRAINT "Project_Comment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project_Comment" ADD CONSTRAINT "Project_Comment_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
