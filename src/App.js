import React from 'react';
import Right from './right';
import Left from './left';
import './App.css';

const App = React.createClass({
  render() {
    const headerJames = "Hi I'm ";
    return (
      <div>
      <div className="App">
        <div className="flexicution">
          <Left />
          <Right />
          <div className="header-james">
            <span style={{color:"white"}}>
              {headerJames}
            </span>
            <span style={{color:"black"}}>
              James
            </span>
          </div>
        </div>
      </div>
      </div>
    );
  }
});

export default App;
