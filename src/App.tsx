import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.scss';
import Navbar from './components/navbar/navbar';
import Home from './views/Home/Home';
import Earth from './views/Earth/Earth';
import Mars from './views/Mars/Mars';
import NotFound from "./views/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/earth" component={Earth} />
          <Route path="/mars" component={Mars} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
