/*
  Warnings:

  - You are about to drop the `Project_Comment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Task_Comment` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Project_Comment" DROP CONSTRAINT "Project_Comment_projectId_fkey";

-- DropForeignKey
ALTER TABLE "Project_Comment" DROP CONSTRAINT "Project_Comment_userId_fkey";

-- DropForeignKey
ALTER TABLE "Task_Comment" DROP CONSTRAINT "Task_Comment_taskId_fkey";

-- DropForeignKey
ALTER TABLE "Task_Comment" DROP CONSTRAINT "Task_Comment_userId_fkey";

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "userId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Project_Comment";

-- DropTable
DROP TABLE "Task_Comment";

-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL,
    "is_disabled" BOOLEAN NOT NULL,
    "content" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "project_id" TEXT NOT NULL,
    "task_id" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "Task"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
