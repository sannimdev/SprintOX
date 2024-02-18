import styled from 'styled-components';
import { IQuestion } from '../../types';
import { useMemo, useState } from 'react';
import { TSelected } from './types';
import AfterCard from './AfterCard';
import BeforeCard from './BeforeCard';

export interface QuestionCardProps {
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
  }

  button {
    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
`;

function QuiestionCard({ question }: QuestionCardProps) {
  const [selected, setSelected] = useState<TSelected>(undefined);

  const taken = useMemo(() => selected !== undefined, [selected]);

  const result = useMemo(
    () => (question.answer === selected ? '정답입니다' : '틀렸습니다'),
    [question.answer, selected]
  );

  const handleButtonClick = (choice: TSelected) => {
    setSelected(choice);
  };

  return (
    <Container>
      {taken ? (
        <AfterCard question={question} result={result} onClick={() => setSelected(undefined)} />
      ) : (
        <BeforeCard question={question} onClick={handleButtonClick} />
      )}
    </Container>
  );
}
export default QuiestionCard;
