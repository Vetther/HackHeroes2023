import { PrismaService } from '../../prisma.service';
import { QuestionService } from '../../question/service/question.service';
import { Injectable } from '@nestjs/common';
import { ExamData } from '../exam.interface';
import { v4 as uuidv4 } from 'uuid';
import { QuestionData } from '../../question/question.interface';

@Injectable()
export class ExamService {
  constructor(
    private prisma: PrismaService,
    private question: QuestionService,
  ) {}

  async getExam(exam_id: number): Promise<ExamData> {
    const questions: QuestionData[] = await this.question.getRandomQuestions();
    const examData: ExamData = await this.createExam(exam_id);
    examData.questions = questions;

    await this.prisma.actualExam.create({
      data: {
        secret: examData.secret,
        start_time: examData.start_time,
        finish_time: null,
        questions: {
          create: questions.map((question) => {
            return {
              question_id: question.id,
              answer: '',
            };
          }, {}),
        },
        exam: {
          connect: {
            id: exam_id,
          },
        },
      },
    });

    return examData;
  }

  async createExam(exam_id: number): Promise<ExamData> {
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
}
