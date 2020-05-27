import React, { Component } from 'react';
import Navigation from './navigation.jsx';
import Project from './project.jsx';
import discordimg from './media/discord.png';
import friendecksimg from './media/friendecks/friendecks.png'
import flexiblyimg from './media/flexibly.jpg'
import './home.css'

class Home extends Component {


  render() {
    return(
      <div className="App">
      <Navigation></Navigation>
        <div className="aboutme">
          <div className="cta">Hey, I'm Chris. </div>
          <div className="intro">I'm a junior studying CS at Brown with a focus on full-stack software engineering and UI/UX. This summer, I'll be working as an intern with the<a href="https://medinashealth.com" target="_blank">@medinas</a>team.
            Outside of work, I'll be doing my best to chip away at some MCAT practice tests.</div>
        </div>

        <h1 id="worktitle">Featured Work</h1>
        <div className="projects">
          <Project name="Stopwatch" img={discordimg} subtitle="Utilizing speech recognition to make games a little bit easier." url="/projects/stopwatch" id="stopwatch" imgid="stopwatchimg"/>
          <Project name="Friendecks" img={friendecksimg} subtitle="Enabling the development of meaningful relationships." url="/projects/friendecks" id="friendecks" imgid="friendecksimg"/>
          <Project name="Flexibly" img={flexiblyimg} subtitle="Flexibly manages your time so you don't have to."/>
          <Project name="Iterative Design" img="./media/discord.png" url="/projects/ide" subtitle="An introduction to the full iterative design process, from sketches to hi-fi prototypes."/>
        </div>
      </div>


    );
  }
}

export default Home;
