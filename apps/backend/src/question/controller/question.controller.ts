import { Controller, Get, InternalServerErrorException, Param } from '@nestjs/common';
import { QuestionService } from '../service/question.service';
import { Question } from '@prisma/client';
import { QuestionData } from '../question.interface';
import { DevApiTags } from '../../decorators/dev.controller';

@Controller('dev-api/v1/question')
@DevApiTags('dev')
export class DevQuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get(':id')
  async getQuestionById(@Param('id') id: number): Promise<Question | null> {
    await this.checkDevMode();
    return this.questionService.getQuestionById(id);
  }

  @Get()
  async getRandomQuestions(): Promise<QuestionData[]> {
    await this.checkDevMode();
    return this.questionService.getRandomQuestions();
  }

  async checkDevMode(): Promise<void> {
    if (process.env.DEV_MODE !== 'true') {
      throw new InternalServerErrorException('Dev mode is not enabled.');
    }
  }
}
