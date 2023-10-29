import { PrismaService } from '../../prisma.service';
import { Injectable } from '@nestjs/common';
import { Exam } from '@prisma/client';

@Injectable()
export class ExamService {
  constructor(private prisma: PrismaService) {}

  async getAllExams(): Promise<Exam[]> {
    return this.prisma.exam.findMany();
  }

  async getExamById(id: number): Promise<Exam> {
    return this.prisma.exam.findUnique({ where: { id: Number(id) } });
  }
}
