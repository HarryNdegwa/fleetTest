import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import TasksWrapper from "./components/TasksWrapper";
import TasksDashBoard from "./components/TasksDashBoard";
import SavedLists from "./components/SavedLists";
import NewList from "./components/NewList";

function App(props) {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/tasks" component={TasksWrapper} />
        <Route path="/tasks-dashboard" component={TasksDashBoard} />
        <Route path="/saved-lists" component={SavedLists} />
        <Route path="/new-list" component={NewList} />
      </Switch>
    </div>
  );
}

export default App;
