import { Controller, Get, Param } from '@nestjs/common';
import { ExamService } from '../service/exam.service';
import { ExamData } from '../exam.interface';

@Controller('api/v1/exam')
export class ExamController {
  constructor(private readonly examService: ExamService) {}

  @Get(':id')
  async getExam(@Param('id') id: number): Promise<ExamData> {
    return this.examService.getExam(Number(id));
  }
}
