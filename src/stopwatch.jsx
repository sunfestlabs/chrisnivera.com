import React, { Component } from 'react';
import Navigation from './navigation.jsx'
import './article.css';
import './stopwatch.css';
import disc_screenshot from './media/stopwatch/discord_screenshot.png';
import lol_map from './media/stopwatch/lol_map.jpg';

class Stopwatch extends Component {

  render() {

    return(
      <div>
        <Navigation></Navigation>
        <div className="proj-text">
          <h1 className="proj-title">Stopwatch</h1>
          <h3>A voice activated Discord bot to assist you in the game League of Legends.</h3>

          <div className="proj-section">
            <h2 className="proj-title-2">Context</h2>
            <p>With over <a href="https://www.eurogamer.net/articles/2019-09-18-league-of-legends-hits-8m-concurrent-players-every-day" target="_blank">8 million concurrent players</a> daily, League of Legends presents itself as one of the most popular games on the planet.
            League, for short, is an action/strategy game that pits teams of 5 players against one another. Each player controls a single character called a "Champion", and each team's players work together to invade the enemy base and destroy the "Nexus", the core of the enemy's base. To do so, each Champion has their own spells
            and attacks to fight the other enemy Champions. The picture below is of the Summoner's Rift - the map that matches are played on. The team bases are the grey areas in the top-right and bottom-left corners, and the Nexuses are the largest glowing structures in each base.</p>

          <img src={lol_map} className="proj-img" id="lol_map" alt=""/>

          <p>Perhaps the most important spells in League are called Summoner Spells. Such spells are not specific to a single champion, but are independently equipped by the players before choosing which Champion they want to play. These spells can do things such as teleport the player around the map, remove ailments affecting the player, or enable them to do some extra damage in order to finish off an enemy.
          As such, such spells have pretty long cooldowns - summoner spells can typically only be used around once every five minutes, whereas ordinary spells can be used every 15 seconds. Because summoner spells have the potential to determine the tide of a fight, a lot of the strategy of League is tracking which summoner spells the enemy has available, and choosing to pick fights when the enemy has used up most of their summoner spells.
          However, tracking summoner spell usage (and relaying that information to your team) is a difficult task considering all of the other things going on during the game at a given time. </p>
          </div>

          <div className="proj-section">
            <h2 className="proj-title-2">What is Stopwatch?</h2>
            <p>Stopwatch is a bot for the voice-chat program Discord. If you're not familiar with Discord, you can essentially imagine it as Slack, but for gamers. Discord is an extremely popular platform for communities to come together and chat over different text channels or hang out in a voice channel. Stopwatch is designed to be used when groups of friends are together in a voice channel, playing a game of League together. </p>
            <img src={disc_screenshot} className="proj-img" id="disc_screenshot" alt=""/>

            <p>Because League is a team game, communication is key to success. What Stopwatch does is essentially act as a voice assistant - the bot sits in the voice channel as you and your friends are playing the game, and recognizes when key phrases are uttered. For example, there's a champion in League named Caitlyn. Imagine that one of the enemy players is playing Caitlyn, and that Caitlyn uses the summoner spell that teleports them across the map (aptly named Teleport). A common call-out that you might make to your team over voice chat would be, "Caitlyn used Teleport." Stopwatch would notice that you said that phrase, and would immediately start a timer that tracks the cooldown of Caitlyn's Teleport so you don't have to! Additionally, if you're not sure if an enemy champion can use a certain summoner spell, you can even ask the bot. If you say something like "Does Caitlyn have Teleport?", the bot will respond with the remaining cooldown of the spell, or alert you if Caitlyn is able to use Teleport again. All in all, the purpose of Stopwatch is to take advantage of the natural communication that you would do with your team over voice, and start timers for you so that you (nor your teammates) don't have to track these cooldowns mentally. </p>
          </div>

          <div className="proj-section">
            <h2 className="proj-title-2">How does it work?</h2>
            <p>The bot is built using a mixture of Java and Javascript. The backend in Java is mainly responsible for gathering data about the match using the League of Legends API, whereas the Javascript portion is responsible for interacting with the Discord API and performing voice data parsing. All of the voice transcription is done using Google's Dialogflow API. Dialogflow is largely used by companies to create chatbots, and I figured that the product I wanted to build was similar enough in nature that I could use Dialogflow. Dialogflow was insanely fitting for this project because it can categorize similar phrases to the same intent. Because I wanted Stopwatch to pick up on natural communication, I ran into the problem that many players might have different ways to say the same thing. In the above example, the bot is able to recognize "Caitlyn used Teleport", but with Dialogflow
            I could make the bot also pick up on similar phrases such as "Caitlyn has no Teleport" or "Caitlyn just used Teleport." Additionally, Dialogflow has the ability to pick out key information from a recognized phrase. By feeding the Dialogflow agent enough training data, I configured the agent to be able to pick out and return the champion name and spell from a recognized phrase.</p>

          <p>First, the user sends a message via Discord to the bot, telling it the user's in-game username. Once Stopwatch verifies that the user is in a valid match, it grabs the enemy champions as well as which summoner spells the enemies chose using the League API. From here, the bot joins the user's voice channel and actively listens for the key phrases. Any audio that is picked up by the bot is streamed to Dialogflow, and if it recognizes the phrase, returns the detected champion, spell, and whether the user wanted to start a timer or was inquiring about an existing one. In the Javascript code, I use a hashmap that stores the timers and which champion and spell they correspond to. If the user wants to start a new timer, a new countdown is started and added to the hashmap, updating the cooldown value every second. The bot then speaks in the channel, saying that a new timer has started. If the user is inquiring about whether a summoner spell is available, then the bot says the remaining cooldown of the champion's summoner spell. This structure allows the user to track spell cooldowns without having to type a single word or use any key shortcuts - you don't have to play any differently to use Stopwatch.</p>
          </div>

          <div className="proj-section">
            <h2 className="proj-title-2">Takeaways / Next Steps </h2>

          <p>Stopwatch is my first individual, large-scale project. I'm  really happy that I've been able to identify a problem and build a solution to it from the ground up. I have had the opportunity to use a lot of the software engineering skills from my CS courses as well as learn brand new techniques such as using Dialogflow and all of the voice streaming/recognition technology necessary to make the bot work.</p>

        <p>In terms of next steps, I would like to scale the bot to be usable by many people at the same time. Right now, I'm limited by the costs necessary to use Dialogflow - on my current free account plan, after a certain number of voice transcriptions, I need to start paying to transcribe audio. Additionally, I don't yet have the infrastructure necessary to support many servers and users simultaneously. It&#39;s been really great working on Stopwatch so far, and I really think it can be a great tool to especially help newer players or players looking to improve their gameplay. I&#39;m excited to keep working on it and see what the future holds!</p>

        <p>If you'd like to keep up with this project or see the source code, you can find it on my Github <a href="https://github.com/sunfestlabs/stopwatch">here</a>!</p>
          </div>

        </div>
      </div>

    );
  }
}

export default Stopwatch;
