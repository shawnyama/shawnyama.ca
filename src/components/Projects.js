import React, { useEffect, useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpand, faHammer } from '@fortawesome/free-solid-svg-icons'
import DevIcon from "devicon-react-svg";
import '../styles/Projects.scss'

const Projects = () => {
    const projects = useStaticQuery(graphql`
        query {
            allProjectsJson {
                nodes {
                    description
                    year
                    website
                    title
                    technologies
                    organization
                    github
                    color
                }
            }
        }
    `)

    const [expandStatus, setExpandStatus] = useState([]);

    useEffect(() => {
        setExpandStatus(Array(projects.allProjectsJson.nodes.length).fill("project-closed"));
    }, []);

    function expandProject(key) {
        let expandStatusClone = Array(projects.allProjectsJson.nodes.length).fill("project-closed"); // Close all projects
        expandStatusClone[key] = "project-opened"; // Only open the chosen project
        setExpandStatus(expandStatusClone);

        console.log(expandStatusClone, expandStatus)
    }

	return (
		<div className="Projects">
            <h2><FontAwesomeIcon icon={faHammer}></FontAwesomeIcon>PROJECTS</h2>
            <div className="project-selection">
                
            {/* {
                projects.allProjectsJson.nodes.map((project, p) => 
                    <div 
                        key={p}
                        className={expandStatus[p]}
                        onClick={() => expandProject(p)}
                        style={{
                            //backgroundImage: `linear-gradient(180deg, ${project.color}33 50%, ${project.color}66 50%)` // 0.2, 0.4
                        }}
                    >
                        <div className="project-header">
                            <div className="title">
                                {project.title.toUpperCase()}
                            </div>
                            <div className="technologies">
                            {
                                project.technologies.map((technology, t) => 
                                <span key={t}>
                                    <div className="technology">
                                        <DevIcon 
                                            style={{ 
                                                display: (expandStatus[p] === "project-closed") && "none",
                                                fill: project.color, 
                                                width: "3.5rem"
                                            }} 
                                            className="icon"
                                            icon={"css3"}
                                        />
                                        <div className="name">
                                            {technology.toUpperCase()}
                                        </div>
                                    </div>    
                                    { ((t !== project.technologies.length-1) && (expandStatus[p] === "project-closed")) &&
                                        <span className="dash">~</span>
                                    }
                                </span>
                                )
                            }
                            </div>
                        </div>
                        <div className="details">
                            <p className="description">
                                {project.description}
                            </p>
                            <div className="info">
                                2020
                            </div>
                        </div>
                    </div>
                )
            } */}
            </div>
		</div>
	)
}

export default Projects