import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import TasksWrapper from "./components/TasksWrapper";

function App(props) {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/tasks" component={TasksWrapper} />
      </Switch>
    </div>
  );
}

export default App;
