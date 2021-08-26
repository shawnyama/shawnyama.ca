import * as React from 'react'
import face from '../../public/static/face.svg'
import '../styles/About.scss'

const About = () => {
	return (
		<div className="About">
			<h2><img src={face} alt="About"></img>ABOUT</h2>
            <div className="bio">
                <p>
                    Hi, welcome to my portfolio. I am a Computer Science student at Ontario Tech University. 
                    I have chosen this profession due to its creative abundance. Designing an interactive 
                    digital experience stimulates my logical and creative drives. Whether it's building 
                    a seamless user interface or an immersive video game, I am enticed. My strong background
                    in visual arts gives me the artistic-edge needed for a charming and memorable design.
                    <br/><br/>
                    Throughout my program I have worked on various software development and data analysis projects collaboratively and individually. This has allowed me to explore many aspects of this field. I want to continue exploring it as much as I can in order to see how I truly want to apply my programming skills. Fortunately, I am in the co-op program which gives me the opportunity to get a good taste of the variety of jobs available for me. Currently I am searching for co-ops for the Fall.
                </p>
            </div>
			
		</div>
	)
}

export default About