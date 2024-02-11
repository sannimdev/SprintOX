import { useEffect, useState } from 'react';
import axios from 'axios';

interface Question {
  id: number;
  prompt: string;
  answer: 'O' | 'X';
  explanation?: string;
}

interface Quiz {
  key: string;
  label: string;
  questions: Question[];
}

function App() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);

  const loadQuiz = async () => {
    const response = await axios(
      'https://gist.githubusercontent.com/sannimdev/f61b28824f5d8733e3bb8b4a10852e0f/raw/2fe826de0d01f1a03646d49d65438e0535362c5d/%2508%2508quizzes.json'
    );

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
          <li>
            <h2>{quiz.label}</h2>
            <ol>
              {quiz.questions.map((question) => (
                <li>
                  <div>
                    <h3>{question.id}</h3>
                    <p>{question.prompt}</p>
                    <button>O</button>
                    <button>X</button>
                  </div>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
