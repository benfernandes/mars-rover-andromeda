import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.scss';
import Navbar from "./components/navbar/Navbar";
import Home from './views/Home';
import withSplashScreen from './components/splashScreen/withSplashScreen';

const App = () => {
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
