/*
  Warnings:

  - You are about to drop the column `photoId` on the `User` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Photo` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Photo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fileName" TEXT NOT NULL,
    "contentLength" INTEGER NOT NULL,
    "contentType" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Photo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Photo" ("contentLength", "contentType", "fileName", "id", "path") SELECT "contentLength", "contentType", "fileName", "id", "path" FROM "Photo";
DROP TABLE "Photo";
ALTER TABLE "new_Photo" RENAME TO "Photo";
CREATE UNIQUE INDEX "Photo_userId_key" ON "Photo"("userId");
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "bio" TEXT,
    "avatar" TEXT,
    "role" TEXT NOT NULL,
    "ide_theme" BOOLEAN NOT NULL DEFAULT true,
    "ClassId" TEXT
);
INSERT INTO "new_User" ("ClassId", "avatar", "bio", "email", "id", "ide_theme", "name", "password", "role") SELECT "ClassId", "avatar", "bio", "email", "id", "ide_theme", "name", "password", "role" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
