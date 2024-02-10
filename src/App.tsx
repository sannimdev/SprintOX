import { useEffect, useState } from 'react';
import axios from 'axios';

interface Question {
  id: number;
  prompt: string;
  answer: 'O' | 'X';
  explanation?: string;
}

type Subject = 'history' | 'education';

type Quiz = {
  [K in Subject]?: Question[];
};

function App() {
  const [quiz, setQuiz] = useState<Quiz>({});

  const loadQuiz = async () => {
    const response = await axios(
      'https://gist.githubusercontent.com/sannimdev/f61b28824f5d8733e3bb8b4a10852e0f/raw/65e5a0502fd70bac1a2cabc08b8c33d051e48b45/%2508quiz.json'
    );

    if (!response?.data) {
      throw new Error('불러오기 오류');
    }

    setQuiz(response.data);
  };

  useEffect(() => {
    loadQuiz();
  }, []);

  return (
    <>
      {quiz?.history && (
        <div>
          {quiz.history.map((question) => (
            <div>
              <h3>{question.id}</h3>
              <p>{question.prompt}</p>
              <button>O</button>
              <button>X</button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
