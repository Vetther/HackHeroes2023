import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { QuestionService } from './service/question.service';
import { DevQuestionController } from './controller/question.controller';

@Module({
  controllers: [DevQuestionController],
  providers: [PrismaService, QuestionService],
})
export class QuestionModule {}
