import styled from 'styled-components';
import { IQuestion } from '../types';
import { useCallback, useMemo, useState } from 'react';

interface Props {
  question: IQuestion;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid #efefef;
  padding: 8px;
  margin: 16px 0;

  > h3,
  > h4,
  > h5 {
    text-align: center;
    margin-bottom: 16px;
  }

  > h3 {
    font-size: 1.2rem;
  }

  > p {
    padding: 16px 0;
    font-size: 1.1rem;
    text-align: center;
  }
`;

const buttons = ['O', 'X'] as const;
type Button = (typeof buttons)[number]; // 'O' | 'X'
type TSelected = Button | undefined;

function QuestionCard({ question }: Props) {
  const [selected, setSelected] = useState<TSelected>(undefined);

  const taken = useMemo(() => selected !== undefined, [selected]);

  const result = useMemo(
    () => (question.answer === selected ? '정답입니다' : '틀렸습니다'),
    [question.answer, selected]
  );

  const handleButtonClick = (choice: TSelected) => {
    setSelected(choice);
  };

  return taken ? (
    <Container>
      <h3>{question.id}</h3>
      <p>{question.prompt}</p>
      <h5>{question.answer}</h5>
      <h4>{result}</h4>
      <button onClick={() => setSelected(undefined)}>다시 풀기</button>
    </Container>
  ) : (
    <Container>
      <h3>{question.id}</h3>
      <p>{question.prompt}</p>
      {buttons.map((key) => (
        <button key={key} onClick={() => handleButtonClick(key)}>
          {key}
        </button>
      ))}
    </Container>
  );
}

export default QuestionCard;
