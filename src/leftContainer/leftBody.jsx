import React from "react";
import ReactDOM from "react-dom";
import "./leftBody.css";
import "../App.css";
import Header from "../header";
import ProjectTile from "./projectTile";

const LeftBody = React.createClass({
  render() {
    const { width } = this.props;
    return (
      <div className="left" style={{ width: width }}>
        <Header color={"#005b96"} width={width}>
          <div
            className="header-items header-left"
            onClick={() => this.scrollToDiv("intro")}
          >
            Intro
          </div>
          <div
            className="header-items header-left"
            onClick={() => this.scrollToDiv("projects")}
          >
            Projects
          </div>
          <div
            className="header-items header-left"
            onClick={() => this.scrollToDiv("TA")}
          >
            TA
          </div>
          <div
            className="header-items header-left"
            onClick={() => window.open("/resume.pdf")}
          >
            Resume
          </div>
          <div
            className="header-items header-left"
            onClick={() => this.scrollToDiv("contact")}
          >
            Contact
          </div>
        </Header>
        <div className="header-padding" />
        <div className="left-body">
          <div className="header-align" ref="intro">
            ... and I am a computer scientist.
          </div>
          <img src="/headpict.jpg" width="200px" height="200px" alt=""></img>
          <p className="intro-paragraph">
            My CS life truly began junior year of high school. I taught myself
            Java to skip to AP Computer Science, and there I knew I wanted to be
            a computer scientist. I loved having the power to manipulate and
            create something out of just bits and pieces (pun intended).
          </p>
          <p className="intro-paragraph">
            I decided to further my programming education and attended the
            University of Berkeley as a Computer Science major. There I expanded
            my knowledge by taking CS courses and becoming the head TA for the
            introductory CS course,{" "}
            <a
              href="https://cs61a.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CS 61A
            </a>
            . I interned at{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.pge.com/"
            >
              PG&amp;E
            </a>{" "}
            and{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.appdynamics.com/AppDynamics"
            >
              AppDynamics
            </a>{" "}
            and learned so much about industry and more about programming. The
            summer of my junior year, I interned at{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://liveramp.com/"
            >
              LiveRamp
            </a>{" "}
            as a full stack intern, and that's when I knew I wanted to do full
            stack web development.
          </p>
          <p className="intro-paragraph">
            This past year, I have been working full time as a Full Stack Web
            Developer at{" "}
            <a target="_blank" rel="noopener noreferrer" href="http://wish.com">
              Wish
            </a>
            . I owned the post purchase experience and rebuilt the customer
            support chat bot. I worked on countless experiments to improve key
            business metrics. I also mentored multiple interns and attended
            leadership workshops.
          </p>
          <div className="header-topic" ref="projects">
            Projects
          </div>
          <p className="intro-paragraph">
            All code located on{" "}
            <a href="https://github.com/jalagar">Github repo</a>
          </p>
          <div className="all-projects">
            <ProjectTile
              image="/website.png"
              link="https://github.com/jalagar/website"
              header="This website!"
              description="This is my website :). Built entirely from scratch using no 3rd party libraries."
              technologies="HTML, CSS, ReactJS"
            />
            <ProjectTile
              image="/calendar.png"
              link="https://github.com/MaxFangX/calendar-analytics"
              header="Calendar Analytics"
              description="Calendar Analytics takes your calendar and shows you what you've done over the years.
              The most sophisticated way to analyze your time."
              technologies="AngularJS, Django, HTML, CSS, Bower"
            />
            <ProjectTile
              image="/introspection.png"
              link="https://www.youtube.com/watch?v=66v9s0JetyQ"
              header="Introspection"
              description="Webapp to help quantify and track mental health. Users type in a
              diary entry and visualize the corresponding emotions."
              technologies="D3, Flask, JQuery, HTML, CSS"
            />
            <ProjectTile
              image="/music.jpg"
              link="/syncopation.m4a"
              header="Syncopation"
              description="Music project to explore computer generated music. Created music that analyzed
              transients on typing noises and created melody that matches rhythm exactly."
              technologies="OpenMusic, Lisp"
            />
            <ProjectTile
              image="/soundfyre.png"
              link="http://soundfyre.net/"
              header="SoundFyre"
              description="Hackathon project to help underground musicians find other musicians to collaborate with and find
              a local fan base. Can upload audio and a marker will drop on their geolocation."
              technologies="HTML, CSS, JS, Google Maps API"
            />
          </div>
          <div className="header-topic" ref="TA">
            TA
          </div>
          <p className="intro-paragraph">
            If you want to book an appointment,{" "}
            <a href="https://calendar.google.com/calendar/selfsched?sstoken=UU9XSzI2bDg0dE50fGRlZmF1bHR8ZjQ4NmQ4ZWZhY2Y5NzU0YjBhZWZhNTAxYzliMDJjMDI">
              click here!
            </a>{" "}
            Also check out the{" "}
            <a href="https://www.youtube.com/channel/UCuteugW6eO65Awk83I6ehoA/featured">
              CS 61A Youtube channel
            </a>{" "}
            which has tons of walkthrough videos. TAs and I spent many hours
            making the videos, so hope they help!
          </p>
          <div className="header-topic" ref="contact">
            Contact
          </div>
          <div className="contact-container">
            <p className="contact-paragraph">James Uejio</p>
            <p className="contact-paragraph">
              Full Stack Developer, Leader, Teacher
            </p>
            <p className="contact-paragraph">jamesuejio@berkeley.edu</p>
          </div>
          <a
            className="intro-paragraph"
            href="https://www.linkedin.com/in/james-uejio-479383a1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/linkedin.png" height="40px" alt="" />
          </a>
          <a
            className="intro-paragraph"
            href="https://github.com/jalagar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/github.png" height="40px" alt="" />
          </a>
        </div>
      </div>
    );
  },
  scrollToDiv(ref) {
    const elem = ReactDOM.findDOMNode(this.refs[ref]);
    if (elem) {
      elem.scrollIntoView({ block: "start", inline: "nearest" });
      document.getElementsByClassName("left")[0].scrollTop -= 40;
    }
  }
});

export default LeftBody;
