import React from 'react';
import './jazz.css';

const Jazz = React.createClass({
  render() {
    return (
      <div className="jazz-container">
        <img src='nathanjames.jpg' alt='' />
        <div>
          <h4>All The Things You Are</h4>
          <audio controls>
            <source src="all.m4a">
            Your browser does not support the audio tag.
          </audio>
        </div>
      </div>
    );
  },
});

export default Jazz;
