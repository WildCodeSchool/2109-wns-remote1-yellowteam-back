/*
  Warnings:

  - Changed the type of `total_time_spent` on the `Project` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `total_time_spent` on the `Task` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "total_time_spent",
ADD COLUMN     "total_time_spent" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "total_time_spent",
ADD COLUMN     "total_time_spent" INTEGER NOT NULL;
