import { useAtom } from 'jotai';
import { quizzesAtom } from '../../atoms';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  h1 {
    font-size: 1.6rem;
    font-weight: bold;
    text-align: center;
    margin: 32px 0;
  }

  ul > li:not(:last-child) {
    margin-bottom: 16px;
  }
`;

function Subjects() {
  const [quizzes] = useAtom(quizzesAtom);

  return (
    <Container>
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
    </Container>
  );
}

export default Subjects;
