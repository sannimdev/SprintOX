import { atom } from 'jotai';
import { IQuiz } from './types';

export const quizzesAtom = atom<IQuiz[]>([]);
