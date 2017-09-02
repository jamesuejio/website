import React from 'react';
import './djuejio.css';

const DjUejio = React.createClass({
  render() {
    return (
      <div>
        <iframe
          id='spotify'
          src="https://open.spotify.com/embed/album/3MxO9mNCSFACA7DmV2GffE"
          width="300"
          height="380"
          onLoad={this.addOnClicks}
        >
        </iframe>
      </div>
    )
  },
});

export default DjUejio;
