import React from 'react';
import './djuejio.css';

const DjUejio = React.createClass({
  componentDidMount() {
    var iframe = document.getElementById('spotify');
    var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
    console.log(innerDoc.documentElement.children);
    // debugger
  },
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
  // addOnClicks() {
  //   debugger;
  // },
});

export default DjUejio;
