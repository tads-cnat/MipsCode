/*
  Warnings:

  - Made the column `taskId` on table `Submission` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tasklistId` on table `Task` required. This step will fail if there are existing NULL values in that column.
  - Made the column `classroomId` on table `Tasklist` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Submission" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "answer" TEXT NOT NULL,
    "isCorrect" BOOLEAN NOT NULL,
    "userId" INTEGER NOT NULL,
    "taskId" TEXT NOT NULL,
    CONSTRAINT "Submission_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Submission" ("answer", "id", "isCorrect", "taskId", "userId") SELECT "answer", "id", "isCorrect", "taskId", "userId" FROM "Submission";
DROP TABLE "Submission";
ALTER TABLE "new_Submission" RENAME TO "Submission";
CREATE TABLE "new_Task" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "tasklistId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Task_tasklistId_fkey" FOREIGN KEY ("tasklistId") REFERENCES "Tasklist" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Task" ("createdAt", "description", "id", "tasklistId", "title", "updatedAt") SELECT "createdAt", "description", "id", "tasklistId", "title", "updatedAt" FROM "Task";
DROP TABLE "Task";
ALTER TABLE "new_Task" RENAME TO "Task";
CREATE UNIQUE INDEX "Task_title_key" ON "Task"("title");
CREATE TABLE "new_Tasklist" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "classroomId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Tasklist_classroomId_fkey" FOREIGN KEY ("classroomId") REFERENCES "Classroom" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Tasklist" ("classroomId", "createdAt", "id", "name", "updatedAt") SELECT "classroomId", "createdAt", "id", "name", "updatedAt" FROM "Tasklist";
DROP TABLE "Tasklist";
ALTER TABLE "new_Tasklist" RENAME TO "Tasklist";
CREATE UNIQUE INDEX "Tasklist_name_key" ON "Tasklist"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
