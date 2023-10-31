import { QuestionData, QuestionAnswer } from '../question/question.interface';

export interface ExamData {
  name: string;
  secret: string;
  start_time: Date;
  questions: QuestionData[];
}

export interface ExamResult {
  secret: string;
  finish_time: Date;
  questions: QuestionAnswer[];
}
