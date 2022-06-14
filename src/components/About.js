import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import face from '../images/face.svg'
import '../styles/About.scss'

const About = () => {

    const aboutData = useStaticQuery(graphql`
        query {
            allAboutJson {
                nodes {
                    greeting
                    introduction
                    skills
                }
            }
        }
    `).allAboutJson.nodes[0];

    return (
        <div id="About">
            <h2>
                <img src={face} alt="About"></img>
                {`${aboutData.greeting[Math.floor(Math.random() * aboutData.greeting.length)]}`}
            </h2>
            <div className="about">
                <div className="bio">
                    <p>
                        {aboutData.introduction.join("")}
                    </p>
                    <div className="technologies-wrapper">
                        <h3>Technical Skills</h3>
                        <div className="technologies">
                            {
                                aboutData.skills.map((technology, t) =>
                                    <div className="technology" key={t}>
                                        <div className="name">{technology}</div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <StaticImage className="shawn" src="../images/shawn.jpg" alt="Shawn Yama"/>
            </div>
        </div>
    )
}

export default About