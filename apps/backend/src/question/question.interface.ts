import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export type Answer = 'a' | 'b' | 'c' | 'd';

export class QuestionData {
  @ApiProperty({
    description: 'Question id',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @ApiProperty({
    description: 'Question content',
    example: '16 + 16 = ?',
  })
  @IsNotEmpty()
  @IsString()
  content: string;

  @ApiProperty({
    description: 'Question attachment',
    example: 'https://i.imgur.com/1.jpg',
  })
  @IsNotEmpty()
  @IsString()
  attachment: string;

  @ApiProperty({
    description: 'Question answer A',
    example: '10',
  })
  @IsNotEmpty()
  @IsString()
  answer_a: string;

  @ApiProperty({
    description: 'Question answer B',
    example: '31',
  })
  @IsNotEmpty()
  @IsString()
  answer_b: string;

  @ApiProperty({
    description: 'Question answer C',
    example: '64',
  })
  @IsNotEmpty()
  @IsString()
  answer_c: string;

  @ApiProperty({
    description: 'Question answer D',
    example: '128',
  })
  @IsNotEmpty()
  @IsString()
  answer_d: string;
}

export class SolvedQuestionData extends QuestionData {
  @ApiProperty({
    description: 'Question answer',
    example: 'a',
  })
  @IsNotEmpty()
  @IsString()
  answer: Answer | string;

  @ApiProperty({
    description: 'Question correct answer',
    example: 'a',
  })
  @IsNotEmpty()
  @IsString()
  correct_answer: Answer | string;
}

export class ResultAnswerDto {
  @ApiProperty({
    description: 'Question id',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @ApiProperty({
    description: 'Question answer',
    example: 'a',
  })
  @IsNotEmpty()
  @IsString()
  answer: Answer;
}
