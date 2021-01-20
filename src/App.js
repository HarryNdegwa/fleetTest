import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./components/Login";

function App(props) {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
