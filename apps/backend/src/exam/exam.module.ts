import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ExamService } from './service/exam.service';
import { ExamController } from './controller/exam.controller';
import { QuestionService } from '../question/service/question.service';

@Module({
  controllers: [ExamController],
  providers: [PrismaService, ExamService, QuestionService],
})
export class ExamModule {}
