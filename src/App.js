import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Tasks from "./components/Tasks";

function App(props) {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/tasks" component={Tasks} />
      </Switch>
    </div>
  );
}

export default App;
