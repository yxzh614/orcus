import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import { HomePage } from './pages/home';
import { SelfChangePage } from './pages/selfChange';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/selfChange">
            <SelfChangePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
