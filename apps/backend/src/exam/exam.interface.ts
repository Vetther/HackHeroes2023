import { QuestionData } from '../question/question.interface';

export interface ExamData {
  name: string;
  secret: string;
  start_time: Date;
  questions: QuestionData[];
}
