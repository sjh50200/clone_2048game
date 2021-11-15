# clone_2048game
cloning game at "https://play2048.co/" by react

전체 흐름

처음 
Header, AboveGame, Game 컴포넌트가 렌더링 된다.
이 때, score는 0점으로 시작되며, bestScore는 custom hook을 통해 local storage를 만들게 된다.
local storage는 현재 점수보다 작을 시 새로 최신화 되며, re-rendering 된다.
score 상태 변경 함수인 setScore 함수는 Game Component에 전달 되어 블록이 합쳐질 때마다
최신화 시키게 된다.

Game.js 
초기 바둑판을 그리기 위해서 바둑판 정보를 /util/tile 에서 받아온다.
tile에서는 constant.js에서 export 된 MAX_POS 값으로 MAX_POS by MAX_POS의 배열을 생성한다.
useMoveTile은 custom hook으로 필요한 키 이벤트 리스너를 등록한다.
이 때, tile.js의 함수들을 사용하여 hotkeys라는 library에서 키 이벤트 등록 업무를 위임한다.(설치 필요)
키가 이동하며, MoveTile 알고리즘(분석 필요)을 통해서 합쳐지며 합쳐진 블록들을 더해
setScore로 증가시킨다.
컴포넌트가 소멸할 때는, removeKey 함수들이 불리우며 키 리스너를 제거한다.

주요 배운 사항 : local Storage 사용 법, set함수를 props로 전달 가능, ui와 util(buisness logic) 분할하기,
custom hook
