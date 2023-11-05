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
import { ApiOperation } from '@nestjs/swagger';

@Controller('api/v1/exam')
export class ExamController {
  constructor(private readonly examService: ExamService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Get exam by id. (e.g. ../exam/1 == INF.02)' })
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
        response.status(HttpStatus.NOT_FOUND).send('Exam not found.');
      } else if (error instanceof ExamAlreadySolved) {
        response.status(HttpStatus.BAD_REQUEST).send('Exam already solved.');
      } else if (error instanceof TimeOut) {
        response.status(HttpStatus.BAD_REQUEST).send('Exam time has expired.');
      }
    }
  }
}