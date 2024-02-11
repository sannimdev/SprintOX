import { useAtom } from 'jotai';
import Quiz from '../../components/Quiz';
import { quizzesAtom } from '../../atoms';
import { useLocation, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { IQuiz } from '../../types';

const parsePathname = (pathname = '') => {
  return pathname.slice(pathname.lastIndexOf('/') + 1);
};

function Questions() {
  const [quizzes] = useAtom(quizzesAtom);
  const [viewQuizzes, setViewQuizzes] = useState<IQuiz[]>([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const subject = parsePathname(location.pathname);

    if (!subject) {
      return;
    }

    setViewQuizzes(() => quizzes.filter(({ key }) => key === subject));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, navigate]);

  if (!viewQuizzes.length) {
    return;
  }

  return (
    <ul>
      {viewQuizzes.map((quiz) => (
        <li key={quiz.key}>
          <Quiz quiz={quiz} />
        </li>
      ))}
    </ul>
  );
}

export default Questions;
