import styled from 'styled-components';
import { IQuiz } from '../types';
import { QuestionCard } from './QuestionCard';

interface Props {
  quiz: IQuiz;
}

const Container = styled.div`
  > h2 {
    font-size: 1.4rem;
    text-align: center;
    margin: 24px 0;
  }
`;

function Quiz({ quiz }: Props) {
  return (
    <Container>
      <h2>{quiz.label}</h2>
      <ol>
        {quiz.questions.map((question) => (
          <li key={question.id}>
            <QuestionCard question={question} />
          </li>
        ))}
      </ol>
    </Container>
  );
}

export default Quiz;
