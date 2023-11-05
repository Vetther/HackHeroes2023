import { PrismaService } from '../../prisma.service';
import { QuestionService } from '../../question/service/question.service';
import { Injectable } from '@nestjs/common';
import {
  ExamDto,
  ExamSecretDto,
  ResultExamDto,
  SolvedExamDto,
} from '../exam.interface';
import { v4 as uuidv4 } from 'uuid';
import {
  QuestionData,
  SolvedQuestionData, Answer
} from '../../question/question.interface';
import {
  ExamNotFound,
  ExamAlreadySolved,
  TimeOut,
} from 'src/errors/exam.errors';

@Injectable()
export class ExamService {
  constructor(
    private prisma: PrismaService,
    private question: QuestionService,
  ) {}

  async createExam(exam_id: number): Promise<ExamDto> {
    const questions: QuestionData[] = await this.question.getRandomQuestions();
    // Export exam data
    const examData: ExamDto = await this.createExamData(exam_id);

    // Create actual exam
    const exam = await this.prisma.actualExam.create({
      data: {
        secret: examData.secret,
        start_time: examData.start_time,
        finish_time: null,
        exam: {
          connect: {
            id: exam_id,
          },
        },
      },
    });
    // Create actual questions
    for (let i: number = 0; i < questions.length; i++) {
      const question: QuestionData = questions[i];
      const actualQuestion = await this.prisma.actualQuestion.create({
        data: {
          answer: null,
          question: {
            connect: {
              id: question.id,
            },
          },
          actual_exam: {
            connect: {
              id: exam.id,
            },
          },
        },
      });
      // Add question to exam data
      examData.questions.push({
        id: actualQuestion.id,
        content: question.content,
        attachment: question.attachment,
        answer_a: question.answer_a,
        answer_b: question.answer_b,
        answer_c: question.answer_c,
        answer_d: question.answer_d,
      });
    }

    return examData;
  }

  async sendExamResult(examResult: ResultExamDto): Promise<void> {
    await this.validateExamResult(examResult);

    const exam = await this.prisma.actualExam.findFirst({
      where: {
        secret: examResult.secret,
      },
    });

    if (exam) {
      await this.prisma.actualExam.update({
        where: {
          id: exam.id,
        },
        data: {
          finish_time: new Date(),
        },
      });

      for (let i = 0; i < examResult.questions.length; i++) {
        const question = examResult.questions[i];
        await this.prisma.actualQuestion.update({
          where: {
            id: question.id,
          },
          data: {
            answer: question.answer,
          },
        });
      }
    }
  }

  async validateExamResult(examResult: ResultExamDto) {
    const exam = await this.prisma.actualExam.findFirst({
      where: {
        secret: examResult.secret,
      },
    });

    if (exam) {
      if (exam.finish_time) {
        throw new ExamAlreadySolved();
      }
    } else {
      throw new ExamNotFound();
    }
    const examResultTime: number = new Date(examResult.finish_time).getTime();
    const examStartTime: number = new Date(exam.start_time).getTime();
    if (examResultTime - examStartTime > 3600000) {
      throw new TimeOut();
    }
  }

  async createExamData(exam_id: number): Promise<ExamDto> {
    const uuid = uuidv4();
    const name = await this.getExamName(exam_id);

    return {
      name: name,
      secret: uuid,
      start_time: new Date(),
      questions: [],
    };
  }

  public async getExamName(exam_id: number): Promise<string> {
    const user = await this.prisma.exam.findFirst({
      where: { id: exam_id },
      select: { name: true },
    });
    if (user) {
      return user.name;
    } else {
      throw new Error(`Exam with id ${exam_id} not found`);
    }
  }

  async sendExamSolved(secret: ExamSecretDto): Promise<SolvedExamDto> {
    const actualExam = await this.prisma.actualExam.findFirst({
      where: {
        secret: secret.secret,
      },
      select: {
        secret: true,
        start_time: true,
        finish_time: true,
        exam: {
          select: {
            name: true,
          },
        },
      },
    });
    if (!actualExam) {
      throw new ExamNotFound();
    }

    const actualQuestions = await this.prisma.actualQuestion.findMany({
      where: {
        actual_exam: {
          secret: secret.secret,
        },
      },
      select: {
        id: true,
        answer: true,
        question: {
          select: {
            content: true,
            attachment: true,
            answers: {
              select: {
                answer_a: true,
                answer_b: true,
                answer_c: true,
                answer_d: true,
                correct: true,
              },
            },
          },
        },
      },
    });

    const solvedQuestions: SolvedQuestionData[] = [];
    for (let i = 0; i < actualQuestions.length; i++) {
      const actualQuestion = actualQuestions[i];
      const question = actualQuestion.question;
      const answers = question.answers[0];
      const solvedQuestion: SolvedQuestionData = {
        id: actualQuestion.id,
        content: question.content,
        attachment: question.attachment,
        answer_a: answers.answer_a,
        answer_b: answers.answer_b,
        answer_c: answers.answer_c,
        answer_d: answers.answer_d,
        answer: actualQuestion.answer,
        correct_answer: answers.correct,
      };
      solvedQuestions.push(solvedQuestion);
    }

    return {
      name: actualExam.exam.name,
      secret: actualExam.secret,
      start_time: actualExam.start_time,
      finish_time: actualExam.finish_time,
      questions: solvedQuestions,
    };
  }
}
