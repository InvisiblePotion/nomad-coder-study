import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

/* 
  아래의 경우 path가 "/"인 Route의 경우 다른 모든 Route의 경로를 포함하기에
  반드시 최하단에 위치시켜야 한다.

  스프링 때도 그랬지만 라우터는 위에서부터 조건을 만족하는 경로를 찾아가기 때문에
  상세한 경로일 수록 위로, 포괄적인 경로일 수록 아래로 위치시켜야 한다.

  깜박하고 "/"를 최상단에 위치 시켰다가 왜 Link에 의한 url 변경은 작동하는데
  페이지가 재렌더링 되지 않는거지 하고 한참을 혼자 헤메었다...
*/
function MovieApp() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default MovieApp;
