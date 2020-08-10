import React, {Component} from 'react';
import Navigation from './Navigation.jsx';
import './Navigation.css';
import './Article.css';
import './Friendecks.css'
import fd_icon from './media/friendecks/fd-icon.png';
import fd_lofi from './media/friendecks/fd-lofi.png';
import fd_chip1 from './media/friendecks/fd-chip-front.png';
import fd_chip2 from './media/friendecks/fd-chip-back.png';
import fd_hifi1 from './media/friendecks/fd-hifi-1.png';
import fd_hifi2 from './media/friendecks/fd-hifi-2.png';
import group_pic from './media/friendecks/fd-group-photo.jpg';


class Friendecks extends Component {

  render() {
    return (<div>
      <Navigation></Navigation>
      <div className="proj-text">
        <h1 className="proj-title">Friendecks</h1>
        <h3>Enabling the development of meaningful relationships.</h3>

        <div id="problem-space" className="proj-section">
          <h2 className="proj-title-2">Problem Space</h2>
          <p>In an era where social media allows us to stay connected with someone through a few clicks, we can easily forget what it really means to be friends with someone. Although things like Snapchat stories give us a glimpse into our friends&#39; lives, little of our online interaction is real face-to-face activity. Social media becomes a platform through which we can put on a mask, and we start to lose the authenticity of getting to know another person.</p>

        </div>

        <div id="the-solution" className="proj-section">
          <h2 className="proj-title-2">The Solution</h2>
          <p>Friendecks is an app that combines contact management, messaging platforms, and calendar events to form a networking app designed for real personal interaction. I&#39;m currently working on Friendecks with a team of students at Brown University, and my personal role is to design the user interface; namely prototyping, usability testing, and UX research. Friendecks&#39; goal is to provide a platform that facilitates the process of getting, and staying, connected with friends.
          </p>

          <img className="proj-img" src={fd_icon} alt=""/>
        </div>

        <div id="the-card" className="proj-section">
          <h2 className="proj-title-2">Understanding &#34;The Card&#34;</h2>
          <p>Cards are the key component of Friendecks. For starters, each user would have their own card, which they customize upon account creation. On the front side, they'd be able to add a biography, photos, or any other additional info that portrays who they are. When cards are being shared, this side is what's shown to friends.
          </p>

          <p>Since Friendecks&#39; goal is to foster face-to-face interaction, users would only be able to trade cards if they&#39;re geographically close to one another. Whether it be chatting at a house party or meeting someone in lecture for the first time, Friendecks wants that interaction to happen first, before the cards are swapped. In addition, it'd be a bit tricky if you were in an area with a ton of people who had Friendecks - you don't wanna send your card to people you don't know. Thus, Friendecks integrates an NFC system similar to Bump, which requires physical contact between phones.</p>

          <p>Once the cards have been shared, the back of the card you receive now contains information about your new friendship. You'd be able to write down notes here about who you just met (&#34;Oh, he really likes basketball&#34;) and also contains details about any Friendecks-related interactions you'll have with your new friend. Over time, the back of the card will become populated as you meet up with said person.
          </p>

          <p>Finally, once you've received enough cards, you can make a Deck, which is essentially a collection of cards. Through this deck, you can group different Cards based on how you see fit - I might have &#34;Work Friends&#34;, &#34;Suitemates&#34;, and &#34;Cousins&#34; decks, for example. Through Decks, you'll be able to ask your friends to meet up or do an activity using a system called Chips.</p>

        <img src={fd_chip1} className="proj-img" alt=""/> <img className="proj-img" src={fd_chip2} alt=""/>


  </div>

        <div id="the-chip" className="proj-section">
          <h2 id="proj-title-2">Understanding &#34;The Chip&#34;</h2>
          <p>
            After developing the card/deck system, we took a look at other social media apps and tried to figure out how they facilitated real user interaction. Facebook Events were the first thing that came to mind. Among college-aged students, hosting events on Facebook is perhaps the most popular way to get the word out about your event. However, that style doesn't really work when you're just looking to grab a cup of coffee or a quick lunch with a friend.
          </p>

          <p>Enter chips.</p>

          <p>
            Chips allow users to plan events and interactions with one another. These invites could be as small as a quick cup of coffee with a certain friend's Card, or a large-scale gathering that you'd send to a whole Deck. The Chip itself contains all information pertaining a certain event - in the screenshot shown above, the workout chip shows the location, date, and a quick message from your friend. Chips are completely customizable - you're not locked in by any default options. We don't want users to think that Chips could only be used for certain events, as they're meant to be as casual or as official as you want. Below are a couple screens showing how a user would view Chips they've received, as well as a calendar showing what events are coming up from those Chips.
          </p>

          <img src={fd_hifi1} className="proj-img" alt=""/> <img className="proj-img" src={fd_hifi2} alt=""/>
        </div>

        <div id="takeaways" className="proj-section">
          <h2 id="proj-title-2">Takeaways / Next Steps</h2>
          <p>Friendecks has been my first experience building a product completely from the ground up. Through both research and design, Friendecks has challenged by concept of what it really means to interact with my friends. </p>

          <p>Additionally, working with such a diverse and talented group of people has been extremely rewarding, and I'm excited to further build my visual design and prototyping abilities.</p>

          <p>We hope that Friendecks can help people foster both old and new meaningful relationships. To take Friendecks to the next level, work must be done across all aspects of the product. As most of the work I performed was iterative design, my next steps would be to perform more user testing/research and receive feedback from a larger community of users.</p>

          <img src={group_pic} className="proj-img" alt="" id="group_pic"/>
        </div>

      </div>
    </div>);

  }

}

export default Friendecks;
