<<<<<<< Updated upstream
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.scss';
import Navbar from './components/navbar/navbar';
import Home from './views/Home';
=======
import React, {useEffect, useState } from 'react';
import './App.scss';
>>>>>>> Stashed changes
import { DailyPhoto } from './components/Potd/Potd.component';


function App() {

  

  return (
    <div className="App">
<<<<<<< Updated upstream
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
=======
      <DailyPhoto/>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
