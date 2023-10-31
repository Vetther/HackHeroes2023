-- CreateTable
CREATE TABLE "exam" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "exam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "question" (
    "id" SERIAL NOT NULL,
    "exam_id" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "attachment" TEXT,

    CONSTRAINT "question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "answer" (
    "id" SERIAL NOT NULL,
    "question_id" INTEGER NOT NULL,
    "answer_a" TEXT NOT NULL,
    "answer_b" TEXT NOT NULL,
    "answer_c" TEXT NOT NULL,
    "answer_d" TEXT NOT NULL,
    "correct" TEXT NOT NULL,

    CONSTRAINT "answer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "actual_exam" (
    "id" SERIAL NOT NULL,
    "exam_id" INTEGER NOT NULL,
    "secret" TEXT NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "finish_time" TIMESTAMP(3),

    CONSTRAINT "actual_exam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "actual_question" (
    "id" SERIAL NOT NULL,
    "actual_exam_id" INTEGER NOT NULL,
    "question_id" INTEGER NOT NULL,
    "answer" TEXT,

    CONSTRAINT "actual_question_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "actual_exam_secret_key" ON "actual_exam"("secret");

-- AddForeignKey
ALTER TABLE "question" ADD CONSTRAINT "question_exam_id_fkey" FOREIGN KEY ("exam_id") REFERENCES "exam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "answer" ADD CONSTRAINT "answer_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "actual_exam" ADD CONSTRAINT "actual_exam_exam_id_fkey" FOREIGN KEY ("exam_id") REFERENCES "exam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "actual_question" ADD CONSTRAINT "actual_question_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "actual_question" ADD CONSTRAINT "actual_question_actual_exam_id_fkey" FOREIGN KEY ("actual_exam_id") REFERENCES "actual_exam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
