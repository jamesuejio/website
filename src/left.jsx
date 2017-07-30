import React from 'react';
import ReactDOM from 'react-dom';
// import { Navbar, NavItem, Nav } from 'react-bootstrap';
import './App.css';
import Header from './header';
import ProjectTile from './projectTile'

const Left = React.createClass({
  render() {
    const {width} = this.props;
    return (
      <div className="left" style={{width: width}}>
        <Header color={"#005b96"}>
          <div className="header-items header-left" onClick={()=>this.scrollToDiv('intro')}>Intro</div>
          <div className="header-items header-left" onClick={()=>this.scrollToDiv('TA')}>TA</div>
          <div className="header-items header-left" onClick={()=>this.scrollToDiv('projects')}>Projects</div>
          <div className="header-items header-left">Resume</div>
          <div className="header-items header-left" onClick={()=>this.scrollToDiv('contact')}>Contact</div>
        </Header>
        <div className="header-padding" />
        <div className="left-body">
          <div className="header-align" ref="intro">... and I am a computer scientist.</div>
          <img src="/headpict.jpg" width='200px' height='200px' alt=""></img>
          <p className="intro-paragraph">
            My CS life truly began junior year of high school. I taught myself Java to skip to
            AP Computer Science, and there I knew I wanted to be a computer scientist. I loved having the power
            to manipulate and create something out of just bits and pieces (pun intended).
          </p>
          <p className="intro-paragraph">
            I decided to further my programming education and attended the University of Berkeley
            as a Computer Science major. There I expanded my knowledge by taking CS courses and
            becoming the head TA for the introductory CS course, <a href="cs61a.org</CS 61Aa>"></a>.
            Last summer I interned at <a target="_blank" href="https://www.appdynamics.com/AppDynamics">AppDynamics
          </a> and learned so much about industry and more about programming. This summer I am interning at <a target="_blank"
             href="https://liveramp.com/">LiveRamp</a> as
             a full stack intern, and have fallen in love with web development.
          </p>
          <div className="header-topic" ref="TA">TA</div>
          <p className="intro-paragraph">Click on a specific discussion/lab for a brief summary and notes!
          </p>
          <div className="header-topic" ref="projects">Projects</div>
          <p className="intro-paragraph">All code located on <a href="https://github.com/jalagar">Github repo</a></p>
          <div className="all-projects">
            <ProjectTile
              image='/headpict.jpg'
              link='http://jamesuejio.com/'
              header='This website!'
              description='This is my website :)'
              technologies='HTML, CSS, React'
            />
            <ProjectTile
              image='/calendar.png'
              link='https://github.com/MaxFangX/calendar-analytics'
              header='Calendar Analytics'
              description="Calendar Analytics takes your calendar and shows you what you've done over the years.
              The most sophisticated way to analyze your time."
              technologies='Angular, Django, HTML, CSS, Bower'
            />
            <ProjectTile
              image='/introspection.png'
              link='https://www.youtube.com/watch?v=66v9s0JetyQ'
              header='Introspection'
              description="Webapp to help quantify and track mental health. Users type in a
              diary entry and visualize the corresponding emotions."
              technologies='D3, Flask, JQuery, HTML, CSS'
            />
            <ProjectTile
              image='/music.jpg'
              link='http://jamesuejio.com/'
            />
            <ProjectTile
              image='/headpict.jpg'
              link='http://jamesuejio.com/'
          />
          </div>
          <div className="header-topic" ref="contact">Contact</div>
          <p className="intro-paragraph">
            James Uejio
          </p>
          <p className="intro-paragraph">
            Software Engineer, Full Stack Developer, Teacher
          </p>
          <p className="intro-paragraph">
            jamesuejio@berkeley.edu
          </p>
          <a
            className="intro-paragraph"
            href="https://www.linkedin.com/in/james-uejio-479383a1"
            target="_blank"
          >
            <img src="/linkedin.png" />
          </a>
          <a
            className="intro-paragraph"
            href="https://github.com/jalagar"
            target="_blank"
          >
            <img src="/github.png" />
          </a>

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
