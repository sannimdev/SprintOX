import { Fragment, useMemo } from 'react';
import { QuestionCardProps } from './QuestionCard';
import styled from 'styled-components';

interface Props extends QuestionCardProps {
  result: string;
  onClick: () => void;
}

const Description = styled.div`
  margin: 16px 0;

  > p.title {
    font-weight: bold;
    margin-bottom: 16px;
  }

  > p.description {
    text-align: left;
  }
`;

function AfterCard({ question, result, onClick }: Props) {
  const explanation = useMemo(
    () =>
      question.explanation?.split('\n').map((line, index) => (
        <Fragment key={index}>
          {line}
          <br />
        </Fragment>
      )),
    [question]
  );

  return (
    <>
      <h3>{question.id}</h3>
      <p>{question.prompt}</p>
      <h5>{question.answer}</h5>
      <h4>{result}</h4>
      {explanation && (
        <Description>
          <p className="title">해설</p>
          <p className="explanation">{explanation}</p>
        </Description>
      )}
      <button onClick={() => onClick()}>다시 풀기</button>
    </>
  );
}

export default AfterCard;
