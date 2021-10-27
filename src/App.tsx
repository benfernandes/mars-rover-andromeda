import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.scss';
import './views/Home.scss'
import Navbar from './components/navbar/navbar';
import Home from './views/Home';
import withSplashScreen from './components/splashScreen/withSplashScreen';

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
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default withSplashScreen(App);
