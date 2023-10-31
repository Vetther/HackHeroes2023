export interface QuestionData {
  id: number;
  content: string;
  attachment: string;
  answer_a: string;
  answer_b: string;
  answer_c: string;
  answer_d: string;
}

export interface QuestionAnswer {
  id: number;
  answer: string;
}
