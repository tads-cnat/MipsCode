/*
  Warnings:

  - A unique constraint covering the columns `[registration]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN "registration" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_registration_key" ON "User"("registration");
