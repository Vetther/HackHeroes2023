/*
  Warnings:

  - The `answer` column on the `actual_question` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `correct` on the `answer` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "correctAnswer" AS ENUM ('a', 'b', 'c', 'd');

-- AlterTable
ALTER TABLE "actual_question" DROP COLUMN "answer",
ADD COLUMN     "answer" "correctAnswer";

-- AlterTable
ALTER TABLE "answer" DROP COLUMN "correct",
ADD COLUMN     "correct" "correctAnswer" NOT NULL;
