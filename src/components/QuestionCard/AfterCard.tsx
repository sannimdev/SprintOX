import { QuestionCardProps } from './QuestionCard';

interface Props extends QuestionCardProps {
  result: string;
  onClick: () => void;
}

function AfterCard({ question, result, onClick }: Props) {
  return (
    <>
      <h3>{question.id}</h3>
      <p>{question.prompt}</p>
      <h5>{question.answer}</h5>
      {question.explanation && <p>{question.explanation}</p>}
      <h4>{result}</h4>
      <button onClick={() => onClick()}>다시 풀기</button>
    </>
  );
}

export default AfterCard;
