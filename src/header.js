import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render() {
    const {width} = this.props;
    return (
      <div className="header-container" style={{backgroundColor: this.props.color, width: width}}>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Header;
