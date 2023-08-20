import { 
  BrowserRouter as Router,
  Switch,
  Route,
 } from "react-router-dom";
 import Home from "./routes/Home";
 import Detail from "./routes/Detail";

function MovieApp() {
  return <Router>
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/movie">
        <Detail />
      </Route>
    </Switch>
  </Router>;
}

export default MovieApp;
