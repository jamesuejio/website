import React from 'react';
import ReactDOM from 'react-dom';
import './rightBody.css';
import '../App.css';
import Header from '../header';
import Jazz from './jazz';

const RightBody = React.createClass({
  render() {
    const {width} = this.props;
    return (
      <div className="right" style={{width: width}}>
        <Header color={"#fff"} width={width}>
          <div className="header-items header-right" onClick={()=>this.scrollToDiv('intro')}>Intro</div>
          <div className="header-items header-right" onClick={()=>this.scrollToDiv('djuejio')}>DJ Uejio</div>
          <div className="header-items header-right" onClick={()=>this.scrollToDiv('jazz')}>Jazz</div>
          <div className="header-items header-right" onClick={()=>this.scrollToDiv('contact')}>Contact</div>
        </Header>
        <div className="header-padding" />
        <div>
          <div className="header-align" ref="intro">... and I am a musician.</div>
          <img id="music" src="/musicman.jpg" width='200px' height='200px' alt=""></img>
          <p className="intro-paragraph">
            Music has been a huge part of my life since I was young. I learned piano but quickly switched to guitar.
            In middle school I formed a rock band and performed at places like The Fillmore and Bimbo's Cafe.
            But alas I craved complexity and switched to jazz. In high school I joined the school's jazz band.
          </p>
          <p className="intro-paragraph">
            I decided to further my music education and attended the University of Berkeley
            as a Music minor. I joined UC Jazz, and am currently a part of one of the intermediate jazz combos.
            Outside of classes, I write and play a variety of music, from
            <span onClick={()=>this.scrollToDiv('djuejio')}>rap to rock</span>
            to <span onClick={()=>this.scrollToDiv('jazz')}>jazz</span>. I perform
            in cafes, restaurants, on campus, and hotels. Sophomore year of college, I released an album under
            the name DJ Uejio. Check out <span onClick={()=>this.scrollToDiv('djuejio')}>DJ Uejio </span>
          for lyrics and backstories and check out <span onClick={()=>this.scrollToDiv('jazz')}>Jazz </span>
        for some jazz recordings.
          </p>
          <div className="header-topic" ref="jazz">Jazz</div>
          <Jazz />
          <div className="header-topic" ref="djuejio">DJ Uejio</div>
          <div className="header-topic" ref="contact">Contact</div>
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

export default RightBody;
