/*
  Warnings:

  - You are about to drop the `Project_Notification` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Task_Notification` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Type_Notification" AS ENUM ('PROJECT', 'TASK');

-- DropForeignKey
ALTER TABLE "Project_Notification" DROP CONSTRAINT "Project_Notification_projectId_fkey";

-- DropForeignKey
ALTER TABLE "Project_Notification" DROP CONSTRAINT "Project_Notification_userId_fkey";

-- DropForeignKey
ALTER TABLE "Task_Notification" DROP CONSTRAINT "Task_Notification_taskId_fkey";

-- DropForeignKey
ALTER TABLE "Task_Notification" DROP CONSTRAINT "Task_Notification_userId_fkey";

-- DropTable
DROP TABLE "Project_Notification";

-- DropTable
DROP TABLE "Task_Notification";

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "is_disabled" BOOLEAN NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" "Type_Notification" NOT NULL,
    "senderId" TEXT NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
