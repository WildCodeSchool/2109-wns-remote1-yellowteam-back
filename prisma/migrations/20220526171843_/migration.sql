/*
  Warnings:

  - A unique constraint covering the columns `[token]` on the table `ResetPassword` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ResetPassword_token_key" ON "ResetPassword"("token");
