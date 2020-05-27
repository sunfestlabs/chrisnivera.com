import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Router, Link} from 'react-router-dom';
import resume from './media/ChrisNiveraCVResume.pdf'
import './navigation.css'

class Navigation extends Component {

  render(){
    return(
      <div>
      <Navbar className="navbar" fixed="top">
        <Navbar.Brand className="mr-auto" id="brand" href="/">Chris Nivera</Navbar.Brand>
        <div className="links">
          <Navbar.Text><a href="https://github.com/sunfestlabs" target="_blank" className="nav-link">github</a></Navbar.Text>
          <Navbar.Text><a href="https://linkedin.com/in/christopher-nivera" target="_blank" className="nav-link">linkedin</a></Navbar.Text>
          <Navbar.Text><a href={resume} target="_blank" className="nav-link">resume</a></Navbar.Text>
          <Navbar.Text><a href="mailto:christopher.nivera@gmail.com" className="nav-link">email me</a></Navbar.Text>
        </div>
      </Navbar>
      </div>
    );
  }

}


export default Navigation;