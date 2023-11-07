export type Exam = {
  name: string
  secret: string
  start_time: Date
  finish_time: Date | null
  questions: Question[]
}

export type Question = {
  id: string
  content: string
  attachment: string | null
  answer_a: string
  answer_b: string
  answer_c: string
  answer_d: string
}
