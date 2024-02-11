# SprintOX

🎮 스프린트 OX 퀴즈 (찐 학습용)

# 1차 기능 요구사항

- 문제의 정보는 JSON으로 구성하며 데이터는 gist를 기반으로 불러 온다.
- 문제는 문항 번호, 발문, 정답, 해설(Optional) 여부를 가지며, 하나의 문제를 Question이라고 칭한다. (복수 Questions)
- 과목 내 문제 또는 전체 과목을 망라한 문제 정보를 Quiz라고 칭한다. (복수 Quizzes)
- 카드에는 문제의 문항 번호, 발문이 기입되어 있으며 사용자가 O/X 버튼 중 둘 중 하나를 클릭(터치)하여 정답을 고를 수 있다.
- 사용자가 카드에 해당하는 정답을 고르면 카드 바로 밑에 정답 여부를 알려주고 해설이 있으면 해설까지 표시한다.
- 모든 과목을 하나의 페이지에 퀴즈 카드 형식으로 보여줘서 문제를 풀고 버튼을 누르면 카드를 뒤집어 정보를 보여 준다.

# 2차 기능 요구사항 (버킷 리스트)

- 사용자가 문제를 얼마나 맞혔는지 백분율 점수로 보여 준다.
- gist 기반의 JSON 파일을 Firebase 등 문제를 안전하게 저장하고 수정할 수 있는 저장소로 대체한다.
- 라우팅 등 적절한 도구를 활용하여 과목을 먼저 선택하고 해당 과목만 풀 수 있는 페이지로 이동한다.
