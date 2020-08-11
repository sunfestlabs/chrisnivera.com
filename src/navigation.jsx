import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import resume from './media/ChrisNiveraCVResume.pdf'
import './Navigation.css'

class Navigation extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render(){
    return(
      <div>
      <Navbar className="navbar" fixed="top">
        <Navbar.Brand className="mr-auto" id="brand" href="/">Chris Nivera</Navbar.Brand>
        <div className="links">
          <Navbar.Text className="kekeke"><a href="https://github.com/sunfestlabs" target="_blank" rel="noopener noreferrer" className="nav-link" id="github-link">github</a></Navbar.Text>
          <Navbar.Text><a href="https://linkedin.com/in/christopher-nivera" target="_blank" rel="noopener noreferrer" className="nav-link" id="linkedin-link">linkedin</a></Navbar.Text>
          <Navbar.Text><a href={resume} target="_blank" className="nav-link" rel="noopener noreferrer" id="resume-link">resume</a></Navbar.Text>
          <Navbar.Text><a href="mailto:christopher.nivera@gmail.com" className="nav-link" id="email-link">email me</a></Navbar.Text>
        </div>
      </Navbar>
      </div>
    );
  }

}


export default Navigation;
