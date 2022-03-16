import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import AllSports from "./components/AllSports";
import Home from "./components/Home";
import SearchResult from "./components/SearchResult/SearchResult";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/allsports" component={AllSports} />
          <Route exact path="/search" component={SearchResult} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
