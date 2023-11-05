import {
  Body,
  Controller,
  Get,
  HttpException,
  InternalServerErrorException,
  Param,
  Post,
  UseFilters,
} from '@nestjs/common';
import { ExamService } from '../service/exam.service';
import { ExamDto, ExamSecretDto, ResultExamDto, SolvedExamDto } from '../exam.interface';
import { HttpExceptionFilter } from '../../errors/filter';
import { ApiOperation } from '@nestjs/swagger';

@Controller('api/v1/exam')
export class ExamController {
  constructor(private readonly examService: ExamService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Get exam by id. (e.g. ../exam/1 == INF.02)' })
  async createExam(@Param('id') id: number): Promise<ExamDto> {
    return this.examService.createExam(Number(id));
  }

  @Post()
  @UseFilters(new HttpExceptionFilter())
  async sendExamResult(@Body() resultExam: ResultExamDto): Promise<void> {
    try {
      await this.examService.sendExamResult(resultExam);
    } catch (error: any) {
      if (error instanceof HttpException) {
        throw error;
      } else {
        throw new InternalServerErrorException(error.message);
      }
    }
  }

  @Post('solved')
  @UseFilters(new HttpExceptionFilter())
  async sendExamSolved(@Body() secret: ExamSecretDto): Promise<SolvedExamDto> {
    try {
      return await this.examService.sendExamSolved(secret);
    } catch (error: any) {
      if (error instanceof HttpException) {
        throw error;
      } else {
        console.error(error);
      }
    }
  }
}
