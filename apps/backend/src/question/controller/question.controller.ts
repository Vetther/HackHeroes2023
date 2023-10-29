// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Controller, Get, Param } from '@nestjs/common';
import { QuestionService } from '../service/question.service';
import { Question } from '@prisma/client';

@Controller('api/v1/question')
export class QuestionController {
  constructor(private readonly examService: QuestionService) {}

  @Get(':id')
  async getQuestionById(@Param('id') id: number): Promise<Question | null> {
    return this.examService.getQuestionById(id);
  }

  @Get()
  async getRandomQuestions(): Promise<Question[]> {
    return this.examService.getRandomQuestions();
  }
}
