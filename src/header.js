import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import './App.css';

class Header extends Component {
  render() {
    const {width} = this.props;
    return (
      <div className="header-container" style={{backgroundColor: this.props.color, width: width}}>
        <div className="header-flex">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Header;
