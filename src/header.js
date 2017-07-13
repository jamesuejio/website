import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import './App.css';

class Header extends Component {
  render() {
    return (
      <div className="header-container" style={{backgroundColor: this.props.color}}>
        <div className="header-flex">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Header;
