import { useEffect, useState } from "react";

function UseEffectExample() {
  /* useEffect()
    useEffect()는 마치 onChange 이벤트 리스너처럼 작동한다.
    두번째 파라미터로 입력한 상태 변수가 업데이트 될 때마다 첫번째 파라미터로 입력한 함수를 실행한다.
    두번째 파라미터는 배열의 형태로 입력받으며 업데이트를 감지할 상태 변수를 여러개 동시에 지정할 수 있다.
    
    단, 첫번쨰 파라미터로 입력된 함수는 컴포넌트가 생성되는 시점에 한번은 반드시 실행되며
    이런 특성을 이용해 두번째 파라미터에 빈 배열을 입력하여 컴포넌트가 처음 생성될 때만 실행되는 코드를 작성할 수 있다.
    
    추가로 첫번째 파라미터에 입력된 함수의 반환 값을 함수로 두면
    useEffect()가 속한 컴포넌트가 파괴 될 때에 해당 함수를 실행시킨다.
  */
  // onClick을 이용한 useEffect 예시
  const [counter, setValue] = useState(0);
  const addCounter = () => setValue((prev) => prev + 1);
  console.log("렌더링마다 매번 실행");
  useEffect(() => {
    console.log("첫 렌더링시에만 실행");
  }, []);

  // onChange를 이용한 useEffect + if 예시
  const [keyword, setKeyword] = useState("");
  const searchKeyword = (event) => setKeyword(event.target.value);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log(keyword, "검색 중...\n(입력된 값이 5글자를 초과하는 경우 실행)");
    }
  }, [keyword]);

  // Cleanup 예시
  const [showing, setShowing] = useState(false);
  const toggleShow = () => setShowing((prev) => !prev);

  function CleanupExample() {
    useEffect(() => {
      console.log("Hello 생성됨");
      return () => console.log("Hello 파괴됨");
    }, []);
    return <h1>Hello</h1>;
  }

  return (
    <div className="App">
      <p>onClick을 이용한 useEffect 예시</p>
      <h1>{counter}</h1>
      <button onClick={addCounter}>Click me!</button>

      <p>onChange를 이용한 useEffect + if 예시</p>
      <input
        value={keyword}
        onChange={searchKeyword}
        type="text"
        placeholder="Search here..."
      />

      <p>Cleanup 예시</p>
      <button onClick={toggleShow}>{showing ? "Hide" : "Show"}</button>
      {showing ? <CleanupExample /> : null}
    </div>
  );
}

export default UseEffectExample;
