import { QuestionData, ResultAnswerDto } from '../question/question.interface';
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
  @ApiProperty({
    description: 'Exam name',
    example: 'INF.02',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Exam secret',
    example: 'e579d074-b9fe-4c9b-9af0-99507ccd4ab8',
  })
  @IsNotEmpty()
  @IsString()
  secret: string;

  @ApiProperty({
    description: 'Exam start time',
    example: '2023-11-03T12:30:44.073Z',
  })
  @IsNotEmpty()
  @IsDate()
  start_time: Date;

  @ApiProperty({
    description: 'Exam questions',
    example: [
      {
        id: 1,
        content: '16 + 16 = ?',
        attachment: 'https://i.imgur.com/1.jpg',
        answer_a: '10',
        answer_b: '31',
        answer_c: '64',
        answer_d: '128',
      },
    ],
  })
  @IsNotEmpty()
  @IsArray()
  questions: QuestionData[];
}

export class ResultExamDto {
  @ApiProperty({
    description: 'Exam secret',
    example: 'e579d074-b9fe-4c9b-9af0-99507ccd4ab8',
  })
  @IsNotEmpty()
  @IsString()
  secret: string;

  @ApiProperty({
    description: 'Exam finish time',
    example: '2023-11-03T12:30:44.073Z',
  })
  @IsNotEmpty()
  @IsDate()
  finish_time: Date;

  @ApiProperty({
    type: [ResultAnswerDto],
    description: 'Exam questions',
    example: [...generateResultAnswerDtoList(40)],
  })
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => ResultAnswerDto)
  @IsArray()
  questions: ResultAnswerDto[];
}

function generateResultAnswerDto() {
  const resultAnswerDto: ResultAnswerDto = new ResultAnswerDto();
  resultAnswerDto.id = Math.floor(Math.random() * 100);
  resultAnswerDto.answer = 'a';
  return resultAnswerDto;
}

export function generateResultAnswerDtoList(length: number): ResultAnswerDto[] {
  const resultAnswerDtoList: ResultAnswerDto[] = [];
  for (let i: number = 0; i < length; i++) {
    resultAnswerDtoList.push(generateResultAnswerDto());
  }
  return resultAnswerDtoList;
}
