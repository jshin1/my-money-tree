import React, { Component } from 'react';
import './App.scss';

// import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import LandingPage from './containers/LandingPage'
import Home from './containers/Home'
import About from './containers/About'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <>
            <nav>
              <Link to='/home'>Home</Link>
              <Link to='/about'>About</Link>
            </nav>
              <Route path='/' exact component={LandingPage} />
              <Route path='/about' component={About} />
              <Route path='/home' component={Home} />
          </>
        </Router>
      </div>
    );
  }
}

export default App;
