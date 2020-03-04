import React from "react";
import "./Jazz.css";

const Jazz = () => (
  <div className="jazz-container">
    <div className="top-container">
      <img
        className="jazz-pict"
        src="nathanjames.jpg"
        alt=""
        width="350px"
        height="auto"
      />
      <div className="jazz-description">
        <div className="header">
          Here are some recordings from college where I played duo guitar gigs
          with Nathan Le!
        </div>
        <div className="audio-title">All The Things You Are</div>
        <audio controls>
          <source src="all.m4a" />
          Your browser does not support the audio tag.
        </audio>
        <div className="audio-title">
          Alice In Wonderland/Someday My Prince Will Come Medley
        </div>
        <audio controls>
          <source src="alice.m4a" />
          Your browser does not support the audio tag.
        </audio>
        <div className="audio-title">Strasbourg St. Denis</div>
        <audio controls>
          <source src="stras.m4a" />
          Your browser does not support the audio tag.
        </audio>
        <div className="audio-title">East Of The Sun</div>
        <audio controls>
          <source src="east.m4a" />
          Your browser does not support the audio tag.
        </audio>
      </div>
    </div>
    <div className="bottom-container">
      <div className="jazz-description">
        <div className="header">
          Here are some recordings of my jazz combo, Village Vanguard!
        </div>
        <div className="audio-title">Oleo</div>
        <audio controls>
          <source src="oleo.wav" />
          Your browser does not support the audio tag.
        </audio>
        <div className="audio-title">Black Narcissus</div>
        <audio controls>
          <source src="black.wav" />
          Your browser does not support the audio tag.
        </audio>
        <div className="audio-title">Song For Bilbao</div>
        <audio controls>
          <source src="bilbao.wav" />
          Your browser does not support the audio tag.
        </audio>
        <div className="audio-title">Friday Night At The Cadillac Club</div>
        <audio controls>
          <source src="friday.wav" />
          Your browser does not support the audio tag.
        </audio>
      </div>
      <img
        className="jazz-pict"
        src="band.jpg"
        alt=""
        width="350px"
        height="auto"
      />
    </div>
  </div>
);

export default Jazz;
