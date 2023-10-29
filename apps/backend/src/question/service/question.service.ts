import { PrismaService } from '../../prisma.service';
import { Injectable } from '@nestjs/common';
import { Question } from '@prisma/client';

@Injectable()
export class QuestionService {
  constructor(private prisma: PrismaService) {}

  async getQuestionById(id: number): Promise<Question> {
    return this.prisma.question.findUnique({ where: { id: Number(id) } });
  }

  async getRandomQuestions(): Promise<Question[]> {
    // Prisma nie wspiera jeszcze ORDER BY RANDOM()
    return this.prisma.$queryRawUnsafe(
      `SELECT * FROM "Question" ORDER BY RANDOM() LIMIT 40;`,
    );
  }
}
