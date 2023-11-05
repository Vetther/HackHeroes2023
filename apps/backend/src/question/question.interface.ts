import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export type Answer = 'a' | 'b' | 'c' | 'd';

export class QuestionData {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  content: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  attachment: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  answer_a: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  answer_b: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  answer_c: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  answer_d: string;
}

export class QuestionAnswer {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  answer: Answer;
}
