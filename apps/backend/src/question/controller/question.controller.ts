import { Controller, Get, Param } from '@nestjs/common';
import { QuestionService } from '../service/question.service';
import { Question } from '@prisma/client';
import { QuestionData } from '../question.interface';

@Controller('api/v1/question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get(':id')
  async getQuestionById(@Param('id') id: number): Promise<Question | null> {
    return this.questionService.getQuestionById(id);
  }

  @Get()
  async getRandomQuestions(): Promise<QuestionData[]> {
    return this.questionService.getRandomQuestions();
  }
}
