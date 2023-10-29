import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ExamService } from './service/exam.service';
import { ExamController } from './controller/exam.controller';

@Module({
  controllers: [ExamController],
  providers: [PrismaService, ExamService],
})
export class ExamModule {}
