import React from 'react';
import ReactDOM from 'react-dom';
// import { Navbar, NavItem, Nav } from 'react-bootstrap';
import './App.css';
import Header from './header';

const Left = React.createClass({
  render() {
    return (
      <div className="left">
        <Header color={"#222"}>
          <div className="header-items header-left" onClick={()=>this.scrollToDiv('intro')}>Intro</div>
          <div className="header-items header-left" onClick={()=>this.scrollToDiv('TA')}>TA</div>
          <div className="header-items header-left" onClick={()=>this.scrollToDiv('projects')}>Projects</div>
          <div className="header-items header-left">Resume</div>
          <div className="header-items header-left" onClick={()=>this.scrollToDiv('contact')}>Contact</div>
        </Header>
        <div className="header-padding" />
        <div className="left-body">
          <div className="header-align" ref="intro">... and I am a computer scientist.</div>
          <img src="/headpict.jpg" width='50%' height='50%'></img>
          <p>
            My CS life truly began junior year of high school. I taught myself Java to skip to
            AP Computer Science, and there I knew I wanted to be a computer scientist. I loved having the power
            to manipulate and create something out of just bits and pieces (pun intended).
          </p>
          <p>
            I decided to further my programming education and attended the University of Berkeley
            as a Computer Science major. There I expanded my knowledge by taking CS courses and
            becoming the head TA for the introductory CS course, <a href="cs61a.org</CS 61Aa>"></a>.
            Last summer I interned at <a target="_blank" href="https://www.appdynamics.com/AppDynamics">AppDynamics
          </a> and learned so much about industry and more about programming. This summer I am interning at <a target="_blank"
             href="https://liveramp.com/">LiveRamp</a> as
             a full stack intern, and have fallen in love with web development.
          </p>
          <div className="header-topic" ref="TA">TA</div>
          <div className="header-topic" ref="projects">Projects</div>
        </div>
      </div>
    );
  },
  scrollToDiv(ref){
    const elem = ReactDOM.findDOMNode(this.refs[ref]);
    if (elem) {
      elem.scrollIntoView({block: "start", behavior: "smooth"});
      document.getElementsByClassName("left")[0].scrollTop -= 48;
    }
  }
});

export default Left;
