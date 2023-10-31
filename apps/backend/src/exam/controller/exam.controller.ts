import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ExamService } from '../service/exam.service';
import { ExamData, ExamResult } from '../exam.interface';

@Controller('api/v1/exam')
export class ExamController {
  constructor(private readonly examService: ExamService) {}

  @Get(':id')
  async createExam(@Param('id') id: number): Promise<ExamData> {
    return this.examService.createExam(Number(id));
  }

  @Post()
  async sendExamResult(@Body() examResult: ExamResult): Promise<void> {
    return this.examService.sendExamResult(examResult);
  }
}
