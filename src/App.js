import NavBar from "./components/NavBar";
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Alert from "./components/Alert";
import AlertState from "./context/alert/AlertState";
import { GithubState } from "./context/github/GithubState";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <NavBar />
          <div className="container pt-4">
            <Alert alert={{text: 'Test alert'}} />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/profile/:name" component={Profile} />
            </Switch>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
