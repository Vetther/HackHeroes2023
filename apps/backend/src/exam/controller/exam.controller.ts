// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Controller, Get, Param } from '@nestjs/common';
import { ExamService } from '../service/exam.service';
import { Exam } from '@prisma/client';

@Controller('api/v1/exam')
export class ExamController {
  constructor(private readonly examService: ExamService) {}

  @Get()
  async getAllExams(): Promise<Exam[]> {
    return this.examService.getAllExams();
  }

  @Get(':id')
  async getExamById(@Param('id') id: number): Promise<Exam | null> {
    return this.examService.getExamById(id);
  }
}
