import { PrismaService } from '../../prisma.service';
import { Injectable } from '@nestjs/common';
import { Question } from '@prisma/client';
import { QuestionData } from '../question.interface';

@Injectable()
export class QuestionService {
  constructor(private prisma: PrismaService) {}

  async getQuestionById(id: number): Promise<Question> {
    return this.prisma.question.findUnique({ where: { id: Number(id) } });
  }

  async getRandomQuestions(): Promise<QuestionData[]> {
    // Prisma nie wspiera jeszcze ORDER BY RANDOM()
    return this.prisma.$queryRawUnsafe(
      `SELECT question.id, question.content, question.attachment, answer.answer_a, answer.answer_b, answer.answer_c, answer.answer_d FROM "question" INNER JOIN "answer" ON question.id = answer.question_id ORDER BY RANDOM() LIMIT 40;`,
    );
  }
}
