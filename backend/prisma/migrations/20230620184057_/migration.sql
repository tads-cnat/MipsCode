/*
  Warnings:

  - Made the column `taskId` on table `Submission` required. This step will fail if there are existing NULL values in that column.

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
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
