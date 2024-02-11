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

  > h3 {
    font-size: 1.2rem;
    text-align: center;
  }

  > p {
    margin: 16px 0;
    font-size: 1.1rem;
    text-align: center;
  }

  > button {
  }
`;

const buttons = ['O', 'X'] as const;
type Button = (typeof buttons)[number]; // 'O' | 'X'
type TSelected = Button | undefined;

function QuestionCard({ question }: Props) {
  const [selected, setSelected] = useState<TSelected>(undefined);
  const taken = useMemo(() => selected !== undefined, [selected]);
  console.log(taken);

  const handleButtonClick = (choice: TSelected) => {
    setSelected(choice);
  };

  return taken ? (
    <div>풂</div>
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
