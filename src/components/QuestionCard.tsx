import { IQuestion } from '../types';

interface Props {
  question: IQuestion;
}
function QuestionCard({ question }: Props) {
  return (
    <div>
      <h3>{question.id}</h3>
      <p>{question.prompt}</p>
      <button>O</button>
      <button>X</button>
    </div>
  );
}

export default QuestionCard;
