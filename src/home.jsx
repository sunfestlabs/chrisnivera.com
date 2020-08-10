import React, { Component } from 'react';
import Navigation from './navigation.jsx';
import Project from './project.jsx';
import discordimg from './media/stopwatch/stopwatch-mockup.png';
import friendecksimg from './media/friendecks/fd-mockup.png'
import flexiblyimg from './media/flexibly.png'
import ideimg from './media/ide/ide-iphone-mockup.png';
import './home.css'
import selfPortrait from './media/chrisCroppedCircle.png'


class Home extends Component {

  render() {

    return(
      <div className="App">
      <Navigation></Navigation>
        <div className="aboutme" data-aos="fade-up">
          <div className="intro">
          <div className="cta">Hey, I'm Chris. </div>
I'm a junior studying CS at Brown with a focus on full-stack software engineering and UI/UX. This summer, I'll be working as an intern with the <a href="https://medinashealth.com" target="_blank">@medinas</a> team.
            Outside of work, I'll be doing my best to chip away at some MCAT practice tests.</div>
          <div className="portrait-container">
            <img src={selfPortrait} alt="" className="self-portrait" />
          </div>
        </div>

        <h1 id="worktitle" data-aos="fade-up">Featured Work</h1>
        <div className="projects" data-aos="fade-up">
          <Project className="project" name="Stopwatch" img={discordimg} subtitle="Utilizing speech recognition to make games a little bit easier." url="/projects/stopwatch" id="stopwatch" imgid="stopwatchimg" animationOffset={0}/>
          <Project name="Friendecks" img={friendecksimg} subtitle="Enabling the development of meaningful relationships." url="/projects/friendecks" id="friendecks" imgid="friendecksimg" animationOffset={250}/>
          <Project name="Flexibly" img={flexiblyimg} subtitle="Flexibly manages your time so you don't have to." animationOffset={0}/>
          <Project name="Iterative Design" img={ideimg} url="/projects/ide" subtitle="An introduction to the full iterative design process, from sketches to hi-fi prototypes." animationOffset={0}/>
        </div>
      </div>


    );
  }
}

export default Home;
