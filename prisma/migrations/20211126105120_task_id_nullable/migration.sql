/*
  Warnings:

  - You are about to drop the column `taskId` on the `File` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "File" DROP CONSTRAINT "File_taskId_fkey";

-- AlterTable
ALTER TABLE "File" DROP COLUMN "taskId",
ADD COLUMN     "task_id" TEXT;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "Task"("id") ON DELETE SET NULL ON UPDATE CASCADE;
