/*
  Warnings:

  - You are about to drop the column `is_disable` on the `File` table. All the data in the column will be lost.
  - You are about to drop the column `is_disable` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `is_disable` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `is_disable` on the `Project_Comment` table. All the data in the column will be lost.
  - You are about to drop the column `is_disable` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `is_disable` on the `Task_Comment` table. All the data in the column will be lost.
  - Added the required column `is_disabled` to the `File` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_disabled` to the `Notification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_disabled` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_disabled` to the `Project_Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_disabled` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_disabled` to the `Task_Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "File" DROP COLUMN "is_disable",
ADD COLUMN     "is_disabled" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Notification" DROP COLUMN "is_disable",
ADD COLUMN     "is_disabled" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "is_disable",
ADD COLUMN     "is_disabled" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Project_Comment" DROP COLUMN "is_disable",
ADD COLUMN     "is_disabled" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "is_disable",
ADD COLUMN     "is_disabled" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Task_Comment" DROP COLUMN "is_disable",
ADD COLUMN     "is_disabled" BOOLEAN NOT NULL;
