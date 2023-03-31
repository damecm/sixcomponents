import React, { Component } from 'react';
import Align from './align'
import Hide from './hide'
import Counter from './counter'
import Font from './font'
import ColorMe from './colorME'
import ClockTog from './clocktog'

export default class App extends Component {
  render() {
    return (
      <div className='app'>

          <div className='page-container'>
            <h1>6 Tricks You Should Know</h1>
            

            <Align />
            <Hide />
            <Counter />
            <Font />
            <ColorMe />
            <ClockTog />
          </div>
      </div>


    );
  }
}