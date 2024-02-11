import { IQuiz } from '../types';
import QuestionCard from './QuestionCard';

interface Props {
  quiz: IQuiz;
}

function Quiz({ quiz }: Props) {
  return (
    <div>
      <h2>{quiz.label}</h2>
      <ol>
        {quiz.questions.map((question) => (
          <li key={question.id}>
            <QuestionCard question={question} />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Quiz;
