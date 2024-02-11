import { useAtom } from 'jotai';
import { quizzesAtom } from '../../atoms';
import { Link } from 'react-router-dom';

function Subjects() {
  const [quizzes] = useAtom(quizzesAtom);

  return (
    <div>
      <h1>과목 선택</h1>
      <ul>
        {quizzes.map(({ key, label }) => (
          <li key={key}>
            <Link to={`/subject/${key}`}>
              <button>{label}</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Subjects;
