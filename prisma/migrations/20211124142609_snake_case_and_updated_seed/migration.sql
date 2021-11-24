/*
  Warnings:

  - You are about to drop the column `enable` on the `File` table. All the data in the column will be lost.
  - You are about to drop the column `enable` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `enable` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `enable` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `isDisabled` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Comment` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `is_disable` to the `File` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_disable` to the `Notification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_disable` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_disable` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_disabled` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_projectId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_taskId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_userId_fkey";

-- AlterTable
ALTER TABLE "File" DROP COLUMN "enable",
ADD COLUMN     "is_disable" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Notification" DROP COLUMN "enable",
ADD COLUMN     "is_disable" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "enable",
ADD COLUMN     "is_disable" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "enable",
ADD COLUMN     "is_disable" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "firstName",
DROP COLUMN "isDisabled",
DROP COLUMN "lastName",
ADD COLUMN     "first_name" TEXT NOT NULL,
ADD COLUMN     "is_disabled" BOOLEAN NOT NULL,
ADD COLUMN     "last_name" TEXT NOT NULL;

-- DropTable
DROP TABLE "Comment";

-- CreateTable
CREATE TABLE "Task_Comment" (
    "id" TEXT NOT NULL,
    "is_disable" BOOLEAN NOT NULL,
    "content" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "taskId" TEXT NOT NULL,

    CONSTRAINT "Task_Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project_Comment" (
    "id" TEXT NOT NULL,
    "is_disable" BOOLEAN NOT NULL,
    "content" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,

    CONSTRAINT "Project_Comment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Task_Comment" ADD CONSTRAINT "Task_Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task_Comment" ADD CONSTRAINT "Task_Comment_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project_Comment" ADD CONSTRAINT "Project_Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project_Comment" ADD CONSTRAINT "Project_Comment_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
