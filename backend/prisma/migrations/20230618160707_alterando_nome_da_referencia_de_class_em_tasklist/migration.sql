/*
  Warnings:

  - You are about to drop the column `ClassId` on the `Tasklist` table. All the data in the column will be lost.
  - Added the required column `classId` to the `Tasklist` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tasklist" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "classId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Tasklist_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Tasklist" ("createdAt", "description", "id", "name", "updatedAt") SELECT "createdAt", "description", "id", "name", "updatedAt" FROM "Tasklist";
DROP TABLE "Tasklist";
ALTER TABLE "new_Tasklist" RENAME TO "Tasklist";
CREATE UNIQUE INDEX "Tasklist_name_key" ON "Tasklist"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
