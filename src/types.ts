export interface Question {
  id: number;
  prompt: string;
  answer: 'O' | 'X';
  explanation?: string;
}

export interface Quiz {
  key: string;
  label: string;
  questions: Question[];
}
