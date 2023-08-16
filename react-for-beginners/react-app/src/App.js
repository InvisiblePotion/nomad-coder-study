import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  // 입력이 있을 때 마다 input 태그의 value를 toDo에 입력
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault(); // submit 이벤트의 기본 행동 차단
    if (toDo === "") return; // toDo가 빈 문자열인 경우 리턴
    // 전개 연산자를 이용하여 현재 toDo를 추가한 새 배열을 toDos에 입력
    setToDos((currentArray) => [...currentArray, toDo]);
    setToDo(() => "");
  };
  function eraseAll() {
    setToDos(() => []);
  }

  // li 태그를 사용해서 toDos를 리스트화 시키는 함수
  function createToDoList(toDos) {
    return toDos.map((item, index) => <li key={"todo_" + index}>{item}</li>);
  }

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <button onClick={eraseAll}>Erase All</button>
      <hr />
      {createToDoList(toDos)}
    </div>
  );
}

export default App;
