import './App.css';
import React from "react";
// import { Router} from "@reach/router";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import Word from './Components/Word';
import Number from './Components/Number';

function App() {

  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/Home">
              <Home/>
            </Route>
            <Route exact path="/:Number">
              <Number/>
            </Route>
            <Route exact path="/:word">
              <Word/>
            </Route>
            <Route path="/:word/:textColor/:backgroundColor">
              <Word/>
            </Route>
            <Route  path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
