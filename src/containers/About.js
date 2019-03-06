import React, { Component } from 'react';

class About extends Component {

  render() {
    return (
      <div>
        <h2 className='header'><em>About</em></h2>
        <div className='about'>
        <div>
          Hi, welcome to My Money Tree! This is a personal finance application
          with a fun little twist!<br/><br/>

          The most difficult thing, in my opinion, about personal finance is that
          frankly, it's leads to what many people perceive as a relatively
          boring life with no immediate tangible results.<br/><br/>

          To tackle this, I decided to create a fun app that visually show you
          the growth of your net worth by gamifying the management of your personal
          balance sheet.<br/><br/>

          It's meant for the younger folks who are not too well versed in the world
          of personal finance. You'll learn about critical topics including but
          not limited to: <br/><br/>

          <ul>
            <li>Credit Utilization</li>
            <li>Debt management</li>
            <li>Good budgeting practices</li>
          </ul><br/>

          As you remain consistent with your goals, your money tree will grow alongside
          your net worth.

          Let's see that little seed turn into a full-blown money tree, fellow gardeners!
        </div>
        <img className='man' src={require('../pics/man.png')} alt='financial freedom' />
        </div>


        <div className='credits'>
          Resource Credits:<br/>
          Header typography styling was done by Daniel Burrows
        </div>
      </div>
    );
  }

}

export default About;
