import React, { Component } from 'react';

class LandingPage extends Component {

  render() {
    return (
      <div className='landingpage'>
        <h1 className='header'><em>My Money Tree</em>a personal finance app that lets you see the fruits of your labor</h1>
        <div className='form-container'>
          <img className='moneytree' src={require('../pics/moneytree.png')} alt='money tree' />
          <div className='form'>
            LOGIN: <br/>
            Username<br/>
            Password<br/>
          <p>Don't have an account? Sign up!</p>
          </div>
        </div>
      </div>
    );
  }

}

export default LandingPage;
