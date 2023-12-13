-- CreateTable
CREATE TABLE "Photo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fileName" TEXT NOT NULL,
    "contentLength" INTEGER NOT NULL,
    "contentType" TEXT NOT NULL,
    "path" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "bio" TEXT,
    "avatar" TEXT,
    "role" TEXT NOT NULL,
    "ide_theme" BOOLEAN NOT NULL DEFAULT true,
    "ClassId" TEXT,
    "photoId" TEXT,
    CONSTRAINT "User_photoId_fkey" FOREIGN KEY ("photoId") REFERENCES "Photo" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_User" ("ClassId", "avatar", "bio", "email", "id", "ide_theme", "name", "password", "role") SELECT "ClassId", "avatar", "bio", "email", "id", "ide_theme", "name", "password", "role" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_photoId_key" ON "User"("photoId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
