import html from './html5.png'
import css from './css3.png'
import js from './js logo.png'
import react from './react logo.jpg'

const Skills = () => 
    <div className="skills">
        <h1 id="skillsHeader">Skills and Experience</h1>
            <div>
                <h2>Education:</h2>

                <h3>Communication and Multimedia Design (2019 - 2023)</h3>  
                    <p>During my Communication and Multimedia Design study, I have so far worked on the following projects:</p>
              
                 <ul>
                     <li><strong>Samen dementievriendelijk:</strong> An project about creating awareness for dementia.</li>
                     <li><strong>Grendel Games:</strong> Creating a unique dystopian sports game from scratch.<br/> I composed and produced the soundtrack as well as the sound effects for the game.</li>
                     <li><strong>Veilig Verkeer Nederland:</strong> Creating an awareness campaign for the danger of the traffic situation around elementary schools.</li>
                     <li><strong>Rijksuniversiteit Groningen:</strong> Designing a mobile app to connect employers and potential new employees.</li>
                     <li><strong>Minor Art and sound - promo-video for Henk Dillerop:</strong> Producing a promo-video to promote a theater show of ex-prison warden Henk Dillerop. <br/>I composed and produced the soundtrack for the video as well as the sound effects.</li>
                     <li><strong>Minor Concepting:</strong> Working on your own dream project. I composed and produced a metal song about mental health problems <br/> and I designed my own car compony and several electric car models, including a pitch-document and a website.</li>
                </ul>
               <h3>Financial Administration (2015-2018)</h3>
               <p>During my financial administration study, I worked as an intern at metal factory Oreel Hallum and music school Opus 3.</p>
        </div>

        <h3>Skills</h3>
    <div className="skillPics">
        <img src={html} alt="HTML5" />
        <img src={css} alt="CSS3"/>
        <img src={js} alt="JavaScript" id="jsImg"/>
        <img src={react} alt="React" id="reactImg"/>
    </div>

    </div>

export default Skills