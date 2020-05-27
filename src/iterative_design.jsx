import React, {Component} from 'react';
import Navigation from './navigation.jsx';
import './navigation.css';
import './projects.css';
import me_thumb from './media/ide/me_thumbnail.png';
import lofi1 from './media/ide/lofi1.PNG';
import lofi2 from './media/ide/lofi2.PNG';
import lofi3 from './media/ide/lofi3.PNG';
import lofi4 from './media/ide/lofi4.PNG';
import lofi5 from './media/ide/lofi5.PNG';
import lofi6 from './media/ide/lofi6.PNG';
import lofi7 from './media/ide/lofi7.PNG';
import hifi1 from './media/ide/hifi1.png';
import hifi2 from './media/ide/hifi2.png';
import hifi3 from './media/ide/hifi3.png';
import hifi4 from './media/ide/hifi4.png';
import hifi5 from './media/ide/hifi5.png';
import hifi6 from './media/ide/hifi6.png';
import heatmap1 from './media/ide/heatmap1.PNG';
import heatmap2 from './media/ide/heatmap2.PNG';
import heatmap3 from './media/ide/heatmap3.PNG';
import heatmap4 from './media/ide/heatmap4.PNG';
import replay1 from './media/ide/replay1.PNG';
import replay2 from './media/ide/replay1.PNG';
import replay3 from './media/ide/replay1.PNG';
import replay4 from './media/ide/replay1.PNG';


import './iterative_design.css';
import Carousel from 'react-bootstrap/Carousel';

class IterativeDesign extends Component {

  render() {
    return (<div>
      <Navigation></Navigation>
      <div className="proj-text">
        <h1 className="proj-title">Iterative Design</h1>
        <h3>An introduction to the full iterative design process, from sketches to hi-fi prototypes.</h3>

        <div className="proj-section">
          <h2 className="proj-title-2">Context</h2>
          <p>The "Iterative Design" project was a group endeavor for CSCI 1300 (User Interfaces and User Experience), a course at Brown University. Our task was to choose an idea from a list of startups and design a user interface for that product, from scratch. My team consisted of three other CSCI 1300 students:
            <a href="http://heidierwin.com/" target="_blank"> Heidi Erwin</a>, Justin Chen, and Gregory Dahl.</p>

        </div>

        <div className="proj-section">
          <h2 className="proj-title-2">What is #ME?</h2>
          <p>For this project, we collectively decided to design an interface for the startup #ME. #ME is an avatar-based social network empowering people to develop their identity in any way they want. They&#39;re committed to providing a welcoming environment for people from all walks of life. We selected to design a mobile interface, as #ME is intended to be engaged with on the go.
          </p>


          <img className="proj-img" src={me_thumb} alt=""/>
        </div>

        <div className="proj-section">
          <h2 className="proj-title-2">Design Process</h2>
          <p>As a group, we realized that we wouldn't be able to come up with a solid design in one go. Thus, we started with the fundamentals -- sketching. Through sketching, we could each individually come up with our visions of the app, draw them on paper, and compare ideas. It was great that all of our designs were so different, as that helped us share points that we might not have thought of initially and allowed us to consider alternate designs.​​​​​​​</p>

            <Carousel className="ide-carousel" interval={null} >
              <Carousel.Item>
                <img
                  src={lofi1}
                  alt="First slide"
                  className="ide-carousel-img"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={lofi2}
                  alt="Second slide"
                  className="ide-carousel-img"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={lofi3}
                  alt="Third slide"
                  className="ide-carousel-img"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={lofi4}
                  alt="Third slide"
                  className="ide-carousel-img"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={lofi5}
                  alt="Third slide"
                  className="ide-carousel-img"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={lofi6}
                  alt="Third slide"
                  className="ide-carousel-img"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={lofi7}
                  alt="Third slide"
                  className="ide-carousel-img"
                />
              </Carousel.Item>
            </Carousel>
          <p>After sketching, the group came together and decided on which direction to go. Although the designs of our hi-fi prototype are a mix of all of the designs, we agreed that the space-themed design illustrated in one of the sketches was a unique take on #ME's mission. Focused around a sense of a community and exploration, a space-focused #ME would align with the fact that #ME is made for people to express themselves in avenues they would not necessarily do in real life. Users can make their avatars as wild as they want, partake in fantastical games, and meet people from across the world.</p>

            <Carousel className="ide-carousel" interval={null} >
              <Carousel.Item>
                <img
                  src={hifi1}
                  alt="First slide"
                  className="ide-carousel-img"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={hifi2}
                  alt="Second slide"
                  className="ide-carousel-img"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={hifi3}
                  alt="Third slide"
                  className="ide-carousel-img"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={hifi4}
                  alt="Third slide"
                  className="ide-carousel-img"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={hifi5}
                  alt="Third slide"
                  className="ide-carousel-img"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={hifi6}
                  alt="Third slide"
                  className="ide-carousel-img"
                />
              </Carousel.Item>
            </Carousel>


            <div></div>

          <p>Our next step was to consolidate these sketches and create a hi-fi prototype for testing. Some images are shown below, but feel free to play around with it yourself at
             <a href="https://www.figma.com/file/Rw4QTnkbQAVuBprEA8lmil5g/Iterative-Design" target="_blank"> this link!</a>
          </p>

          <p>With regards to the home screen, we imagined users traveling in their spaceship to different "space stations" (communities), in order to find other "space travelers" (friends), mainly drawing inspiration from the isometric house and personal ship sketches. Because self-expression is a priority for us, we placed the spaceship with the avatar at the center, hinting at its clickability with a green halo. Listed below the ship are geographically close space stations. Additionally, to bolster both learnability and memorability, we use a combination of icons and text to provide visual recognition and ease of first use.
          </p>

          <p>One of the most important aspects of using #ME is actually exploring the world and interacting with other players. We decided to design the space station/house screen by combining what all of us felt was important in displaying a "virtual community". We did not want the actions to feel foreign to the user, so we kept some very standard features - for example, player avatars can be clicked to view a player profile through which messages/friend requests can be sent. Additionally, viewing a friend's profile shows relevant information about the relationship between you and your friend. Being able to display, physically, the friendship between you and another user was important to fostering a sense of community.</p>
        </div>

        <div className="proj-section">
          <h2 className="proj-title-2">Eye Tracking</h2>
          <p>One of the most fun parts of this project was working with eye trackers! For this project, we were able to hold a session with a user and an eye tracking device in order to further understand how users interact with our prototype.</p>
          <p>After gathering some participants, we used Tobii eyetrackers to capture gaze data while looking through our prototype. After obtaining the raw gaze data, using Python, we generated heatmaps to depict where the participant's gaze was fixed and animated replays of the participant's gaze motion on each screen. The screenshots with the red dots are the finished results of the replay animations, and the heat density screenshots are the heatmaps.</p>

        <Carousel className="ide-carousel hr-carousel" interval={null} >
          <Carousel.Item>
            <img
              src={heatmap1}
              alt="First slide"
              className="ide-carousel-img hr-carousel-img"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={heatmap2}
              alt="Second slide"
              className="ide-carousel-img hr-carousel-img"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={heatmap3}
              alt="Third slide"
              className="ide-carousel-img hr-carousel-img"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={heatmap4}
              alt="Third slide"
              className="ide-carousel-img hr-carousel-img"
            />
          </Carousel.Item>

        </Carousel>

        <Carousel className="ide-carousel hr-carousel" interval={null} >
          <Carousel.Item>
            <img
              src={replay1}
              alt="First slide"
              className="ide-carousel-img hr-carousel-img"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={replay2}
              alt="Second slide"
              className="ide-carousel-img hr-carousel-img"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={replay3}
              alt="Third slide"
              className="ide-carousel-img hr-carousel-img"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={replay4}
              alt="Third slide"
              className="ide-carousel-img hr-carousel-img"
            />
          </Carousel.Item>

        </Carousel>
        </div>

        <div className="proj-section">
          <h2 className="proj-title-2">Next Steps</h2>
          <p>The Iterative Design project was a great experience that allowed me to collaborate with others in the UI/UX field. I truly got a grasp on the full design process, from barebones sketching to high fidelity prototyping. As a designer, it was exciting to integrate many of the different design principles from class into a single product.</p>

          <p>In addition, I was thankful to get a chance to work with eye-tracking technology. Being able to combine aspects of design with data collection and visualization is an interesting combination of fields.</p>

          <p>My next step would be to code such an app using a language like React or Swift - I would love to learn how to create and deploy a full, usable product.
          </p>
        </div>

      </div>
    </div>);

  }

}

export default IterativeDesign;
