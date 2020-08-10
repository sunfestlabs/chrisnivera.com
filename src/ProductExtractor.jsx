import React from 'react';
import './ProductExtractor.css';
import './Article.css';
import Navigation from './Navigation';
import initExtr from './media/medinas/spec-extraction-page.PNG';
import midExtr from './media/medinas/mid-spec-extraction.PNG';

class ProductExtractor extends React.Component {

    render() {
        return(
            <div>
                <Navigation></Navigation>
                <div className="proj-text">
                    <h1 className ="proj-title">Medinas Health</h1>
                    <h3>Software Engineering Internship</h3>

                    <div className="proj-section">
                        <h2 className="proj-title-2">Overview</h2>
                        <p>Summer 2020, as you definitely know, has been a very tough time to say the absolute least. However, it's also been great in finding new hobbies, discovering new opportunities, and starting new work-from-home habits,. Although my original internship was
                            cancelled, I was very fortunate to be able to intern at <a href="https://www.medinas.com/" target="_blank" rel="noopener noreferrer">Medinas Health</a>, a Y-Combinator backed startup. Medinas is a marketplace for pre-owned medical equipment - think eBay for
                            CT scanners, ventilators, and whatnot. As part of the engineering team, I was tasked with creating some new internal tooling for the logistics and fulfillment teams. As for my project, I built a platform that is able to recognize and extract key product details from photos using
                            the Google Vision API.  </p>
                    </div>

                    <div className="proj-section">
                        <h2 className="proj-title-2">What does the platform do?</h2>
                        <p>The platform is specifically designed for Medinas researchers that are working hands-on with the assets themselves. In the old system, the researchers would have to first find the images in an Airtable spreadsheet. To extract specs, they would meticulously open each image
                            and try to find fields such as the manufacturer, serial number, year of manufacturing, etc. from those photos manually, and proceed to fill out those columns on the spreadsheet. With my platform, images are automatically piped into my system, and researchers can simply open up a link to be presented 
                            with a slideshow of all of the asset's images. Most importantly, each piece of text is outlined by its own bounding box, and users are simply able to click on each bounding box to fill in the fields as you see on the right - no more having to type
                            each piece out manually! Once finished, the data is sent off to Airtable, where other processes such as price estimation can be kicked off.

                            <img src={initExtr} alt="" className="proj-img" id="init-extraction" />
                            <img src={midExtr} alt="" className="proj-img" id="mid-extraction" />
                        </p>

                    </div>

                    <div className="proj-section">
                        <h2 className="proj-title-2">Takeaways</h2>
                        I had a phenomenal experience interning at Medinas. I worked closely with Jesse (CEO), Tim (CTO), Matteo (a fellow intern from Brown), and all of the 10 Pines engineers making up the engineering team. Since this was my first experience
                        working in industry, I feel like I learned so much - whether it was meeting every day for standup to discuss our workdays, talking over design principles with Jesse, learning about testing frameworks from Tim, or just wrangling with my code's bugs,
                        I really felt part of the Medinas organization. I especially remember waiting to test my platform with live data for the first time - seeing the researchers extracting actual product information using my platform was one of the most gratifying
                        moments in my computer science career. Here are some of the most important things I learned from the internship:

                        <br></br><br></br>
                        <div>
                            <h4>Things take time.</h4>
                            <p>In school, I was used to being able to finish up a project within a few days and be done with it. But in the real world, you're never really <i>done</i> with a project - there's always something to improve on. And within that project,
                            some features might take weeks, or even months to get to a functional state. I learned that I won't necessarily find a bug and fix it within a few hours, and being able to sit on a problem and think (but not stress) about it was something I definitely had to grapple with and learn. At the beginning of the internship, I was really nervous on whether I was ready to complete a project of such scale. And especially early on, it was pretty daunting
                            to think big picture. However, I forced myself to think in terms of sub-tasks, which made the project much more manageable. And as an added bonus, it was always gratifying to complete each small bit of functionality. By the end of the internship, I had gained a lot of experience
                            in managing a product, balancing implementations with deadlines, and setting realistic expectations for features. </p>
                        </div>

                        <br></br><br></br>
                        <div>
                            <h4>It's okay to not know things, as long as you try to learn.</h4>
                            <p>Especially in an industry like software engineering, impostor syndrome is pretty rampant. And as someone without much professional experience, my first foray into the industry was pretty nerve-wracking. I remember being embarassed not knowing how to use Git properly,
                                or not understanding the Agile terminology that the engineers were using during standup meetings. I definitely felt out of the loop and really daunted seeing all of these new practices. However, I slowly came to terms with the fact that everyone starts <i>somewhere</i> -
                                I'm pretty sure that no one comes out of the womb knowing how to merge a pull request. Using Google as my guide, I did a lot of self-teaching to fill in the gaps in my technical knowledge, getting myself up to speed. This allowed me to thoroughly learn and practice good version
                                control and software development planning, which are essential skills that I see myself using throughout my career. At the end of the day, everyone is on their own path at their own pace, and the only person you should be trying to beat is yesterday's you. 
                            </p>
                        </div>

                        <br></br><br></br>
                        <div>
                            <h4>Keep asking questions.</h4>
                            <p> I really wanted to make this internship a good learning experience, and at the forefront of that mission was the drive to keep asking questions. That's not to say that you should pester your coworkers with mundane questions 24/7, but moreso that it's okay to ask
                                when you're not 100% clear on something. I learned not just to ask how things were done, but also <i>why</i> they were done a certain way. I reached out to Jesse and Tim a lot for design and technical help, and through their tutelage I learned so much about
                                topics such as user retention, testing ideologies, and maintaining a good development environment.
                            </p>
                        </div>
                    </div>



                </div>


            </div>


        );
    }

}

export default ProductExtractor;