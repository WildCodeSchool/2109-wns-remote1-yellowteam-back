/*
  Warnings:

  - You are about to drop the column `initial_time_spent_estimee` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `due_date` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `initial_time_spent_estimee` on the `Task` table. All the data in the column will be lost.
  - Added the required column `due_date` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "initial_time_spent_estimee",
ADD COLUMN     "due_date" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "due_date",
DROP COLUMN "initial_time_spent_estimee";
