export type Exam = Question[];

export type Question = {
    name: string;
    answers: {
        label: string;
    }[];
};
