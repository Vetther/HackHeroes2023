import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExamModule } from './exam/exam.module';
import { QuestionModule } from './question/question.module';

@Module({
  imports: [ExamModule, QuestionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
