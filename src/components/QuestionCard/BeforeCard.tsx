import { QuestionCardProps } from './QuestionCard';
import { TSelected, choiceButtons } from './types';

interface Props extends QuestionCardProps {
  onClick: (choice: TSelected) => void;
}

function BeforeCard({ question, onClick }: Props) {
  return (
    <>
      <h3>{question.id}</h3>
      <p>{question.prompt}</p>
      {choiceButtons.map((key) => (
        <button key={key} onClick={() => onClick(key)}>
          {key}
        </button>
      ))}
    </>
  );
}

export default BeforeCard;
