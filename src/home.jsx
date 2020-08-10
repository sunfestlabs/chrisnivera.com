import React, { Component } from 'react';
import Navigation from './Navigation.jsx';
import Project from './Project.jsx';
import discordimg from './media/stopwatch/stopwatch-mockup.png';
import friendecksimg from './media/friendecks/fd-mockup.png'
import flexiblyimg from './media/flexibly/mockup.png'
import ideimg from './media/ide/ide-iphone-mockup.png';
import medinasimg from './media/medinas/home-mockup.png';
import './Home.css'
import selfPortrait from './media/chrisCroppedCircle.png'


class Home extends Component {

  render() {

    return(
      <div className="App">
      <Navigation></Navigation>
        <div className="aboutme" data-aos="fade-up">
          <div className="intro">
          <div className="cta">Hey, I'm Chris. </div>
I'm a senior studying CS at Brown with a focus on full-stack software engineering and UI/UX. This summer, I'll be working as an intern with the <a href="https://medinashealth.com" target="_blank" rel="noopener noreferrer">@medinas</a> team.
            Outside of work, I'll be doing my best to chip away at some MCAT practice tests. Scroll down to learn a bit more about my work!</div>
          <div className="portrait-container">
            <img src={selfPortrait} alt="" className="self-portrait" />
          </div>
        </div>
        
        <div id="work-scroll-anchor" style={{marginBottom: "100px"}}></div>
        <h1 id="worktitle" data-aos="fade-up">Featured Work</h1>
        <div className="projects" data-aos="fade-up">
          <Project name="Medinas Health" subtitle="Software Engineering Internship" url="/projects/medinas" id="medinas" img={medinasimg} />
          <Project className="project" name="Stopwatch" img={discordimg} subtitle="Utilizing speech recognition to make games a little bit easier." url="/projects/stopwatch" id="stopwatch" imgid="stopwatchimg" />
          <Project name="Friendecks" img={friendecksimg} subtitle="Enabling the development of meaningful relationships." url="/projects/friendecks" id="friendecks" imgid="friendecksimg"/>
          <Project name="Flexibly" img={flexiblyimg} url="/projects/flexibly" subtitle="Flexibly manages your time so you don't have to."/>
          <Project name="Iterative Design" img={ideimg} url="/projects/ide" subtitle="An introduction to the full iterative design process, from sketches to hi-fi prototypes." />
        </div>
      </div>


    );
  }
}

export default Home;
