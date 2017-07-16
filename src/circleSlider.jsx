import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './App.css';

const CircleSlider = React.createClass({
  render() {
    window.onload = this.addListeners;

    return (
      <div className="circle-slider" id="slider"></div>
    );
  },
  addListeners() {
    document.getElementById('slider').addEventListener('mousedown', this.mouseDown, false);
    window.addEventListener('mouseup', this.mouseUp, false);
  },
  divMove(e) {
    var div = document.getElementById('slider');
    div.style.left = e.clientX - 20 + 'px';
    if (e.clientX > (window.innerWidth / 2)) {
      document.getElementsByClassName('left')[0].style.zIndex = 2;
      this.props.moveLeft(e.clientX + 'px');
    } else {
      document.getElementsByClassName('right')[0].style.zIndex = 2;
      this.props.moveRight((window.innerWidth - e.clientX) + 'px');
    }
  },
  mouseUp() {
    window.removeEventListener('mousemove', this.divMove, true);
  },
  mouseDown(e){
    window.addEventListener('mousemove', this.divMove, true);
  },
});

export default CircleSlider;
