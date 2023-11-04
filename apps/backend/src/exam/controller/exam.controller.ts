import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  HttpStatus,
  UseFilters,
} from '@nestjs/common';
import { ExamService } from '../service/exam.service';
import { ExamData, ExamResult } from '../exam.interface';
import {
  ExamAlreadySolved,
  ExamNotFound,
  TimeOut,
} from '../../errors/exam.errors';
import { response } from 'express';
import { HttpExceptionFilter } from '../../errors/filter';

@Controller('api/v1/exam')
export class ExamController {
  constructor(private readonly examService: ExamService) {}

  @Get(':id')
  async createExam(@Param('id') id: number): Promise<ExamData> {
    return this.examService.createExam(Number(id));
  }

  @Post()
  @UseFilters(new HttpExceptionFilter())
  async sendExamResult(@Body() examResult: ExamResult): Promise<void> {
    try {
      return this.examService.sendExamResult(examResult);
    } catch (error: any) {
      if (error instanceof ExamNotFound) {
        console.log('Exam not found.');
        response.status(HttpStatus.NOT_FOUND).send('Exam not found.');
      } else if (error instanceof ExamAlreadySolved) {
        console.log('Exam already solved.');
        response.status(HttpStatus.BAD_REQUEST).send('Exam already solved.');
      } else if (error instanceof TimeOut) {
        console.log('Exam time has expired.');
        response.status(HttpStatus.BAD_REQUEST).send('Exam time has expired.');
      }
    }
  }
}
