
import { HomePage } from './components/Home.page';
import { RQSuperheroesPage } from './components/RQSuperheroes.page';
import { SuperheroesPage } from './components/Superheroes.page';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/super-heroes'>Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path='/super-heroes'>
              <SuperheroesPage />
            </Route>
            <Route path='/rq-super-heroes'>
              <RQSuperheroesPage />
            </Route>
            <Route path='/'>
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
