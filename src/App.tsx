import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Quiz from './components/Quiz';
import { IQuiz } from './types';
import { QUIZZES_URL } from './constants';

const AppContainer = styled.div`
  width: 500px;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

function App() {
  const [quizzes, setQuizzes] = useState<IQuiz[]>([]);

  const loadQuiz = async () => {
    const response = await axios(QUIZZES_URL);
    console.log(QUIZZES_URL, 'URL');

    if (!response?.data) {
      throw new Error('불러오기 오류');
    }

    setQuizzes(response.data);
  };

  useEffect(() => {
    loadQuiz();
  }, []);

  return (
    <AppContainer>
      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz.key}>
            <Quiz quiz={quiz} />
          </li>
        ))}
      </ul>
    </AppContainer>
  );
}

export default App;
