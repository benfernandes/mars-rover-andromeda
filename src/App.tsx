import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.scss';
import Navbar from "./components/navbar/Navbar";
import Home from './views/Home';
import Earth from "./views/Earth";
import Mars from "./views/Mars";
import NotFound from "./views/NotFound";
import withSplashScreen from './components/splashScreen/withSplashScreen';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/earth" component={Earth}/>
          <Route exact path="/mars" component={Mars}/>
          <Route exact path="/" component={Home}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    </div>
  );
}

export default withSplashScreen(App);
