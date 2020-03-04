import React, { useRef } from "react";
import "./RightBody.css";
import "../App.css";
import Header from "../Header";
import Jazz from "./Jazz";

const scrollToRef = ref => {
  const elem = ref.current;
  if (elem) {
    elem.scrollIntoView({ block: "start", inline: "nearest" });
    document.getElementsByClassName("left")[0].scrollTop -= 40;
  }
};

const RightBody = ({ width }) => {
  const contactRef = useRef(null);
  const jazzRef = useRef(null);
  const introRef = useRef(null);
  return (
    <div className="right" style={{ width: width }}>
      <Header color={"#fff"} width={width}>
        <div
          className="header-items header-right"
          onClick={() => scrollToRef(contactRef)}
        >
          Contact
        </div>
        <div
          className="header-items header-right"
          onClick={() => scrollToRef(jazzRef)}
        >
          Jazz
        </div>
        <div
          className="header-items header-right"
          onClick={() => scrollToRef(introRef)}
        >
          Intro
        </div>
      </Header>
      <div className="header-padding" />
      <div>
        <div className="header-align" ref={introRef}>
          ... and I am a musician.
        </div>
        <img
          id="music"
          src="/musicman.jpg"
          width="200px"
          height="200px"
          alt=""
        ></img>
        <p className="intro-paragraph">
          Music has been a huge part of my life since I was young. I learned
          piano but quickly switched to guitar. In middle school I formed a rock
          band and performed at places like The Fillmore and Bimbo's Cafe. But
          alas I craved complexity and switched to jazz. In high school I joined
          the school's jazz band.
        </p>
        <p className="intro-paragraph">
          I decided to further my music education and attended the University of
          Berkeley as a Music minor. I joined UC Jazz played in jazz combos for
          all four years. I performed in cafes, restaurants, on campus, and
          hotels. Check out{" "}
          <span onClick={() => scrollToRef(jazzRef)}>Jazz </span>
          for some jazz recordings. Post-grad, I am recording a fusion EP.
        </p>
        <div className="header-topic" ref={jazzRef}>
          Jazz
        </div>
        <Jazz />
        <div className="header-topic" ref={contactRef}>
          Contact
        </div>
        <div className="contact-container">
          <p className="contact-paragraph">James Uejio</p>
          <p className="contact-paragraph">
            Jazz Guitarist, Musician, Producer, Performer
          </p>
          <p className="contact-paragraph">jamesuejio@berkeley.edu</p>
        </div>
      </div>
    </div>
  );
};

export default RightBody;
