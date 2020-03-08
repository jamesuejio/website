import React, { useRef } from "react";
import "./LeftBody.css";
import "../App.css";
import Header from "../Header";
import ProjectTile from "./ProjectTile";

const LeftBody = ({ width }) => {
  const introRef = useRef(null);
  const projectRef = useRef(null);
  const teacherRef = useRef(null);
  const contactRef = useRef(null);
  const scrollToRef = ref => {
    const elem = ref.current;
    if (elem) {
      elem.scrollIntoView({ block: "start", inline: "nearest" });
      document.getElementsByClassName("left")[0].scrollTop -= 40;
    }
  };
  return (
    <div className="left" style={{ width: width }}>
      <Header color={"#005b96"} width={width}>
        <div
          className="header-items header-left"
          onClick={() => scrollToRef(introRef)}
        >
          Intro
        </div>
        <div
          className="header-items header-left"
          onClick={() => scrollToRef(projectRef)}
        >
          Projects
        </div>
        <div
          className="header-items header-left"
          onClick={() => scrollToRef(teacherRef)}
        >
          Teacher
        </div>
        <div
          className="header-items header-left"
          onClick={() => window.open("/resume.pdf")}
        >
          Resume
        </div>
        <div
          className="header-items header-left"
          onClick={() => scrollToRef(contactRef)}
        >
          Contact
        </div>
      </Header>
      <div className="header-padding" />
      <div className="left-body">
        <div className="header-align" ref={introRef}>
          I am a computer scientist.
        </div>
        <img src="/headpict.jpg" width="200px" height="200px" alt=""></img>
        <p className="intro-paragraph">
          My CS life truly began junior year of high school. I taught myself
          Java to skip to AP Computer Science, and there I knew I wanted to be a
          computer scientist. I loved having the power to manipulate and create
          something out of just bits and pieces (pun intended).
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
          <a target="_blank" rel="noopener noreferrer" href="https://wish.com">
            Wish
          </a>
          . I work mainly on post purchase features, and my biggest project has
          been rewriting and leading the Customer Support Chatbot (Wish
          Assistant). It has decreased tickets by 50%, increased CSAT by 20%,
          and increased many other high level metrics. I manage all Wish
          Assistant features, releases, code, and mentor two interns who
          actively work it.
        </p>
        <div className="header-topic" ref={projectRef}>
          Projects
        </div>
        <p className="intro-paragraph">
          All code located on{" "}
          <a href="https://github.com/jamesuejio">Github repo</a>
        </p>
        <div className="all-projects">
          <ProjectTile
            image="/raspberry.jpg"
            header="BarPoppin'"
            description="BarPoppin' tracks and advertises how many people are in your bar."
            technologies="Raspberry Pi, Python, Heroku"
          />
          <ProjectTile
            image="/website.png"
            link="https://github.com/jamesuejio/website"
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
            header="SoundFyre"
            description="Hackathon project to help underground musicians find other musicians to collaborate with and find
            a local fan base. Can upload audio and a marker will drop on their geolocation."
            technologies="HTML, CSS, JS, Google Maps API"
          />
        </div>
        <div className="header-topic" ref={teacherRef}>
          Teacher
        </div>
        <p className="intro-paragraph">
          I really enjoy teaching and creating video walkthroughs. I believe
          videos are a perfect balance between visual learning and audio
          learning, and have a much wider breadth than other mediums. At my
          current job, I have mentored multiple interns and have created
          onboarding videos and documentation to help new hires.
        </p>
        <p className="intro-paragraph">
          I am also a video instructor for one of the world's largest Python
          resource websites, <a href="https://realpython.com/">RealPython</a>. I
          record and create multiple hours of content with thousands of views.
          You can see my video on sets{" "}
          <a href="https://realpython.com/courses/sets-python/">here</a> and my
          video on recursion{" "}
          <a href="https://realpython.com/courses/thinking-recursively-python/">
            here
          </a>
          .
        </p>
        <p className="intro-paragraph">
          I also was the summer instructor for the nation's largest computer
          science course, CS 61A, and was the head TA for three semesters. You
          can find the summer content at the{" "}
          <a href="https://inst.eecs.berkeley.edu/~cs61a/su18/">
            Summer 2018 CS 61A
          </a>
          website and some of my exam walkthrough videos{" "}
          <a href="https://www.youtube.com/channel/UCNZABnj6W_e274QqFoRBy1Q?view_as=subscriber">
            here
          </a>
          .
        </p>
        <div className="header-topic" ref={contactRef}>
          Contact
        </div>
        <div className="contact-container">
          <p className="contact-paragraph">James Uejio</p>
          <p className="contact-paragraph">
            Full Stack Developer, Pythonista, Leader, Teacher
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
          href="https://github.com/jamesuejio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/github.png" height="40px" alt="" />
        </a>
      </div>
    </div>
  );
};

export default LeftBody;
