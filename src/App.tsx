import { useEffect, useState } from 'react';
import axios from 'axios';
import { IQuiz } from './types';
import Quiz from './components/Quiz';
import { QUIZZES_URL } from './constants';

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
    <>
      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz.key}>
            <Quiz quiz={quiz} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
