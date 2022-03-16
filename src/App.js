import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nabar from "./components/Nav/Nabar";
import "bootstrap/dist/css/bootstrap.min.css";
import AllSports from "./components/AllSports";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/allsports" component={AllSports} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
