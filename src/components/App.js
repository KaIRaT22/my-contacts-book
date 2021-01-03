import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Title from './Title/Title'
import POPOList from './POPOSList/POPOSList'
import About from './About/About'
import POPOSDetails from './POPOSDetails/POPOSDetails'

import './App.css'

function App() {
  return (
      <Router>
        <div className='App'>
          <Title />
          <Route exact path="/" component={POPOList} />
          <Route path="/about" component={About} />
          <Route path="/details/:id" component={POPOSDetails} />
        </div>
      </Router>
  );
}

export default App;