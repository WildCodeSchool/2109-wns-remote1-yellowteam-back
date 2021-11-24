/*
  Warnings:

  - Added the required column `status` to the `Notification` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Status_Notification" AS ENUM ('READ', 'UNREAD');

-- AlterTable
ALTER TABLE "Notification" ADD COLUMN     "status" "Status_Notification" NOT NULL;
