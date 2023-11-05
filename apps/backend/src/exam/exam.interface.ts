import { QuestionData, QuestionAnswer } from '../question/question.interface';
import {
  IsNotEmpty,
  IsString,
  IsDate,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateExamDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  secret: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  start_time: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  questions: QuestionData[];
}

export class ResultExamDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  secret: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  finish_time: Date;

  @ApiProperty({ type: [QuestionAnswer] })
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => QuestionAnswer)
  @IsArray()
  questions: QuestionAnswer[];
}
