
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound.js/NotFound';
import LeagueDetails from './Components/LeagueDetails/LeagueDetails';

function App() {
  return (
    <Router>
      {/* <Header/> */}
      <Switch>
        <Route path="/home">
            <Home/> 
        </Route>
        <Route path="/league/:id">
            <LeagueDetails/>
        </Route>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route path="*">
            <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
