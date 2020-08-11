import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import resume from './media/ChrisNiveraCVResume.pdf';
import HamburgerMenu from 'react-hamburger-menu';
import './Burger.css';
import './Navigation.css'
import Sidebar from './Sidebar';

class Navigation extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  constructor(props) {
    super(props);

    this.state = {
      openBurger: false,
    }
  }

  handleClick = () => {
    this.setState({
      openBurger: !this.state.openBurger,
    });
  }

  render(){
    return(
      <div>

      <Navbar className="navbar" fixed="top">
        <Sidebar openBurger={this.state.openBurger} handleClick={this.handleClick} />
        <Navbar.Brand className="mr-auto" id="brand" href="/">Chris Nivera</Navbar.Brand>
        <HamburgerMenu className="burger-menu" isOpen={this.state.openBurger} menuClicked={this.handleClick} />
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
