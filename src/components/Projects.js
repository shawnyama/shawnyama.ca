import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHammer, faBuilding, faCalendar, faLink, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import SvgIcon from './util/SvgIcon';
import face from '../images/face.svg';
import vialab from '../images/vialab.png';
import covidconnect from '../images/opengraph.png';
import card from '../images/card-it.png';
import '../styles/Projects.scss';

const Projects = () => {
    const data = useStaticQuery(graphql`
        query {
            allIconPathsJson {
                nodes {
                    flask
                    react
                    mysql
                    sass
                    d3js
                }
            }
            allProjectsJson {
                nodes {
                    description
                    brief
                    year
                    website
                    title
                    technologies
                    organization
                    source
                    color
                }
            }
        }
    `)

    const noProject = {
        title: "PROJECTS",
        brief: "",
        description: "",
        media: [],
        technologies: [],
        year: "",
        organization: "",
        website: "",
        source: "",
        color: ""
    };

    const iconpaths = data.allIconPathsJson.nodes[0];
    const projects = data.allProjectsJson.nodes;

    const [chosenProject, setChosenProject] = useState(noProject);

    // useEffect(() => {
    //     setExpandStatus(Array(projects.allProjectsJson.nodes.length).fill("project-closed"));
    // }, []);

    // Returns a lighter or darker version of an hsl color
    function lightnessAdjust(color, adjustment) {
        let newLightness = parseInt(color.substr(14, 15)) + adjustment;
        if (newLightness === 100) newLightness -= 5;
        // if (newLightness === 0) newLightness+=20;
        // console.log(newLightness)
        return color.substr(0, 13) + newLightness + "%)";
    }

    return (
        <div className="Projects">
            <div className={`view-project ${chosenProject.brief}`}>
                <h2><FontAwesomeIcon className="hammer" icon={faHammer}></FontAwesomeIcon>PROJECTS</h2>
                {/* <div className="media">
                    <img src={card}/>
                </div> */}
                <div className="project-selection">
                    {
                        projects.map((project, p) =>
                            <div className="project">
                                <div className="project-info" key={p}>
                                    <div
                                        className="disk-wrap"
                                        style={{ background: `${lightnessAdjust(project.color, -9)}` }}
                                    >
                                        {/* <div
                                    className="disk-back"
                                    style={{ background: project.color }}
                                    // style={{ backgroundImage: `linear-gradient(${project.color}e6, ${project.color}bf)` }}
                                    role="button"
                                        >
                                            
                                        </div> */}

                                        <div
                                            className="disk"
                                            // onClick={() => { console.log(project); setChosenProject(project); }}
                                            style={{ backgroundImage: `linear-gradient(30deg, ${lightnessAdjust(project.color, 0)}, ${lightnessAdjust(project.color, 8)})` }}
                                            role="button"
                                        >
                                            <div
                                                className="reader"
                                                style={{ background: project.color, border: `2px solid ${project.color}`, borderTop: 'none' }}

                                            >
                                                <div className="metal">
                                                    <div className="rectangle" style={{ background: project.color }}></div>
                                                </div>
                                            </div>
                                            <div
                                                className="sticker"
                                                style={{ border: `2px solid ${project.color}` }}
                                            >
                                                <div className="project-title">{project.title}</div>
                                                {project.organization.length > 0 &&
                                                    <div className="organization">
                                                        <img src={project.organization === "vialab" ? vialab : face} alt="ORG"></img>
                                                        <div>{project.organization}</div>
                                                    </div>
                                                }
                                                {project.year.length > 0 && <div className="year">{project.year}</div>}
                                            </div>
                                        </div>

                                    </div>
                                    <div className="technologies">
                                        {
                                            project.technologies.map((technology, t) =>
                                                <div key={t}>
                                                    <div className="technology">
                                                        <SvgIcon iconName={iconpaths[technology]} />
                                                        <div className="name">
                                                            {technology}
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                                <div className="project-image">
                                    <p className="description">
                                        {project.description}
                                    </p>
                                    <img src={covidconnect} />
                                    <div className="stats">
                                        <div className="stat-grid">
                                            {project.website.length > 0 &&
                                                <div>
                                                    <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
                                                    <a href={project.website} target="_blank" rel="noopener noreferrer">{project.website}</a>
                                                </div>
                                            }
                                            {project.source.length > 0 &&
                                                <div>
                                                    <FontAwesomeIcon icon={faFolderOpen}></FontAwesomeIcon>
                                                    <a href={project.source} target="_blank" rel="noopener noreferrer">Source Code</a>
                                                </div>
                                            }
                                        </div>

                                    </div>
                                </div>


                            </div>

                        )
                    }
                </div>


                {/* <div className="disk-slot">
                    <div className="label">INSERT DISK</div><div className="arrow1">&#x0007D;</div>
                    <div className="slot"></div>
                    <div className="arrow2">&#x0007B;</div><div className="label">INSERT DISK</div>
                </div> */}
            </div>
        </div>
    )
}

export default Projects