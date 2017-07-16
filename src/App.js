import React from 'react';
import Right from './right';
import Left from './left';
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
    const headerJames = "Hi I'm ";
    return (
      <div>
        <div className="App">
          <CircleSlider moveLeft={this.moveLeft} moveRight={this.moveRight} />
          <div className="flexicution">
            <Left width={this.state.leftWidth} />
            <Right width={this.state.rightWidth}/>
            <div className="header-james">
              <span style={{color:"white"}}>
                {headerJames}
              </span>
              <span style={{color:"#005b96"}}>
                James
              </span>
            </div>
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
