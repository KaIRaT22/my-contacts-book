import './css/App.css'
import './css/Header.css'
import './css/ContactItem.css'
import Get from './Get'
import logo from './img/logo.svg'
import React from 'react'

import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <header className="Header">
          
        </header>
          <h1>React tutorial</h1>
          <ul>
              <li>
                  <Link to="/get">GET</Link>
              </li>
          </ul>
      </div>
      <Switch>
          <Route path={'/get'} component={ Get }></Route>
      </Switch>
  </Router>
  );
}

export default App;
