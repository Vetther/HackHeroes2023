import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { QuestionService } from './service/question.service';
import { QuestionController } from './controller/question.controller';

@Module({
  controllers: [QuestionController],
  providers: [PrismaService, QuestionService],
})
export class QuestionModule {}
