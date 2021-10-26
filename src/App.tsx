import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.scss';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/earth">
            <p>Earth</p>
          </Route>
          <Route path="/mars">
            <p>Mars</p>
          </Route>
          <Route path="/">
            <p>Home</p>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
