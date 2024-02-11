import { useEffect } from 'react';
import { useAtom } from 'jotai';
import styled from 'styled-components';
import axios from 'axios';
import { QUIZZES_URL } from './constants';
import { quizzesAtom } from './atoms';

const AppContainer = styled.div`
  width: 500px;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

function App({ children }: React.PropsWithChildren) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setQuizzes] = useAtom(quizzesAtom);

  const loadQuiz = async () => {
    const response = await axios(QUIZZES_URL);

    if (!response?.data) {
      throw new Error('불러오기 오류');
    }

    setQuizzes(response.data);
  };

  useEffect(() => {
    loadQuiz();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <AppContainer>{children}</AppContainer>;
}

export default App;
