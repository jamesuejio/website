import React from 'react';
import RightBody from './rightContainer/rightBody';
import LeftBody from './leftContainer/leftBody';
import CircleSlider from './circleSlider'
import './App.css';

const App = React.createClass({
  getInitialState() {
    return {
      leftWidth: "50%",
      rightWidth: "50%",
    }
  },
  render() {
    const headerJames = "Hi I'm James Uejio";
    return (
      <div>
        <div className="App">
          <CircleSlider moveLeft={this.moveLeft} moveRight={this.moveRight} />
          <div className="flexicution">
            <div className="header-james">{headerJames}</div>
            <LeftBody width={this.state.leftWidth} />
            <RightBody width={this.state.rightWidth}/>
          </div>
        </div>
      </div>
    );
  },
  moveLeft(newWidth) {
    this.setState({leftWidth: newWidth});
  },
  moveRight(newWidth) {
    this.setState({rightWidth: newWidth});
  }
});

export default App;
