import React, { Component } from 'react';
import Navigation from './Navigation.jsx';
import calPage from './media/flexibly/calendar-page.png';
import './Article.css';
import './Flexibly.css';


class Flexibly extends Component {

    render() {
        return(
            <div>
                <Navigation></Navigation>
                <div className="proj-text">
                    <h1 className="proj-title">Flexibly</h1>
                    <h3>Managing your time so you don't have to.</h3>

                    <div id="problem-space" className="proj-section">
                        <h2 className="proj-title-2">Problem Space</h2>
                        <p>Whether you're a busy college student, a parent balancing work and home life, or a big shot executive, we all have the same problem of getting stuff done. And when we've got a lot on our plate, it can often feel like
                            24 hours simply isn't enough to get everything done. Not only is the work itself stressful, but now we start stressing about how we're even going to find time to fit in all of our work. This is where Flexibly comes in.
                        </p>
                    </div>

                    <div className="proj-section">
                        <h2 className="proj-title-2">How does Flexibly help?</h2>
                        <p>
                             Built as a final project for CSCI0320: Intro to Software Engineering at Brown University, Flexibly acts as your new personal assistant.
                             Our main goal when building was to create a smart digital calendar capable of dynamically optimizing your schedule for you. Flexibly, first off, can simply act as a regular calendar a la GCal - you can put in concrete events like 
                             "Meet with Julie" on your calendar for fixed durations. However, where Flexibly truly shines is its capability to pick times for you to accomplish your tasks. For example, if you need to walk the dog and go grocery shopping today, Flexibly 
                             can tell you how long those tasks should take, and when to do them during the day.

                        </p>

                        <img src={calPage} alt="" className="proj-img" id="calendar-page"/>
                    </div>

                    <div className="proj-section">
                        <h2 className="proj-title-2">How can Flexibly know when to schedule tasks?</h2>
                        <a href="https://en.wikipedia.org/wiki/Constraint_satisfaction_problem">The scheduling problem</a> is a famous example of a constrait satisfaction question that is "NP-complete" - we know that there is an optimal solution, but we can't quickly determine what it is.
                        There has been much discussion on how to solve such a problem, and to preface things, we didn't come up with anything new (or else we'd have a couple prizes in hand by now). We decided to implement a genetic algorithm. Without delving too much into details,
                        let's imagine that a single solution to the problem as a chromosome (hence the "genetic algorithm" name). We can score each chromosome based on a set of heuristics that we define - for example, how late in the day is it? Has the user completed a lot of strenuous tasks already?
                        How well is the user suited to complete the todo tasks? Once scored, the algorithm randomly selects pairs of chromosomes from the current chromosome population and produces a new set of chromosomes by "crossing over" between chromosomes. 
                        
                        <br></br><br></br>
                        When the algorithm crosses over, 
                        we essentially take portions of the scheduling represented by each chromosome and take chunks from each one to create a new solution. For example, let's say we have schedule 1 and schedule 2. The new child chromosome, after crossing over,
                        might consist of the 12AM-6AM portion of schedule 1, the 6AM-8:45AM portion of schedule 2, the 8:45AM-3:30PM portion of schedule 1, and so on. This results in a new schedule that is non-identical to the parents. Once we have created our children chromosomes,
                        we replace a random number of chromosomes in the parent generation that have poor score with some of the newly generated children, and then repeat the algorithm. We continue to run these steps until the highest scoring chromosome has the maximum score. This maximum
                        scoring chromosome (solution) represents the best organization of tasks in the schedule!

                        As for estimating task duration, whenever a task is completed, we prompt the user for feedback, namely how long the task actually took compared to the previous estimated duration. In addition to that, we take into account factors such as how often the user performs the task,
                        and how frequently they are over/under the estimated time. Over time, Flexibly will then get closer and closer to how long things actually take you to do, thus hopefully freeing up more time in your day!
                    </div>

                    <div className="proj-section">
                        <h2 className="proj-title-2">Personal Responsibilities</h2>
                        <p>
                            I collaborated with three other Brown students - Levon Brunson, Pete Harinsuit, and Theo Guerin - from initial brainstorming to final implementation. We started the project in January and completed it in early May, going through a very rigorous
                            design and coding process. I was personally responsible for the database structures of Flexibly, as well as setting up a REST API that allowed for the frontend and backend to talk to each other. I constructed the database architecture in SQL, and used
                            Java (our backend language) for the API handlers. It was definitely a challenge to figure out how to design the database and what information to store. In addition, I was also concerned about privacy - since we are not only keeping calendar data, but also
                            user to-do lists and feedback on how well they complete each task, it is important that all of these items stay secure as possible. Furthermore, I learned a lot about code modularity, extensibility, and readiness for change when creating the API handlers. 
                            I realized that we needed the API endpoints to be not only as smooth as possible, but also be intuitive for the frontend to call. Especially when coding in an industry environment, the API really becomes the glue that holds two apps together. Even though it may
                            not seem flashy, I learned that coding a REST API that talks from system to system needs to be efficient and intuitive for both processes to run smoothly. 
                        </p>
                    </div>

                    <div className="proj-section">
                        <h2 className="proj-title-2">Next Steps</h2>
                        <p>
                            Although the app is not deployed publicly, we've still been in the works on touching it up for a final release. Flexibly is still in its early stages, but I really believe that it has the potential to grow into something that can
                            improve so many people's daily lives. Stay tuned for more updates!
                        </p>
                    </div>

                </div>
            </div>
        )
    }

}

export default Flexibly;