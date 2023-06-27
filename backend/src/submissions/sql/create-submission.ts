import { randomUUID } from "crypto";
import { CreateSubmissionDto } from "../dto/create-submission.dto";

export default function createSubmission(createSubmissionDto: CreateSubmissionDto) {
  const { answer, taskId, userId, tasklistId } = createSubmissionDto

  return `
    INSERT INTO Submission (id, answer, isCorrect, userId, taskId, createdAt)
    SELECT
      '${randomUUID()}', 
      '${answer}',
      FALSE,
      '${userId}',
      '${taskId}',
      datetime('now')
    FROM
      Class AS c
      JOIN Tasklist AS tl ON c.id = tl.classId
      JOIN Task AS t ON tl.id = t.tasklistId
      JOIN User AS u ON c.id = u.ClassId
    WHERE
      t.id = '${taskId}'
      AND u.id = '${userId}'
      AND EXISTS (
        SELECT 1
        FROM Tasklist AS tl2
        WHERE tl2.id = '${tasklistId}'
        AND tl2.classId = c.id
      )
    LIMIT 1;
    SELECT last_insert_rowid() AS id;
  `;
}

// datetime('now') é para o sqlite, ao mudar para postgres usar NOW()
