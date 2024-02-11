export interface IQuestion {
  id: number;
  prompt: string;
  answer: 'O' | 'X';
  explanation?: string;
}

export interface IQuiz {
  key: string;
  label: string;
  questions: IQuestion[];
}
