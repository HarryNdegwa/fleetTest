import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import TasksDashBoard from "./components/TasksDashBoard";
import SavedLists from "./components/SavedLists";
import NewList from "./components/NewList";
import { connect } from "react-redux";
import Register from "./components/Register";

function App(props) {
  const { isAuth } = props;
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/tasks-dashboard" component={TasksDashBoard} />
        <Route path="/saved-lists" component={SavedLists} />
        <Route path="/new-list" component={NewList} />
        {/* <Route
          path="/tasks-dashboard"
          render={() =>
            isAuth ? <TasksDashBoard /> : <Redirect to="/login" />
          }
        /> */}
        {/* <Route
          path="/saved-lists"
          render={() => (isAuth ? <SavedLists /> : <Redirect to="/login" />)}
        />
        <Route
          path="/new-list"
          render={() => (isAuth ? <NewList /> : <Redirect to="/login" />)}
        /> */}
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.loginReducer.isAuth,
  };
};

export default connect(mapStateToProps)(App);
