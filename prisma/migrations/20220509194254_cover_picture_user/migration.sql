/*
  Warnings:

  - You are about to drop the column `cover_picture` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "cover_picture";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "cover_picture" TEXT;
