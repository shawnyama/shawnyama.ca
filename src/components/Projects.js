import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHammer, faHardHat, faLink, faFolderOpen } from '@fortawesome/free-solid-svg-icons'
// import face from '../images/face.svg'
import '../styles/Projects.scss'

const Projects = () => {
    const data = useStaticQuery(graphql`
        query {
            allProjectsJson {
                nodes {
                    description
                    image
                    brief
                    year
                    website
                    title
                    technologies
                    role
                    organization
                    source
                    color
                    credits {
                        name
                        link
                    }
                }
            }
            allFile(filter: {sourceInstanceName: {eq: "images"}, extension: {eq: "png"}}) {
                edges {
                    node {
                        id
                        relativePath
                        childImageSharp {
                            gatsbyImageData(blurredOptions: {width: 100})
                        }
                    }
                }
            }
        }
    `)

    const projects = data.allProjectsJson.nodes;
    const images = data.allFile.edges;

    // Returns a lighter or darker version of an hsl color
    function lightnessAdjust(color, adjustment) {
        let newLightness = parseInt(color.substr(14, 15)) + adjustment;
        if (newLightness === 100) newLightness -= 5;
        // if (newLightness === 0) newLightness+=20;
        // console.log(newLightness)
        return color.substr(0, 13) + newLightness + "%)";
    }

    return (
        <div id="Projects">
            <h2><FontAwesomeIcon className="hammer" icon={faHammer}></FontAwesomeIcon>PROJECTS</h2>
            {
                projects.map((project, p) =>
                    <div className="project" key={p}>
                        <div className="project-stats">
                            <div
                                className="disk-wrap"
                                style={{ background: `${lightnessAdjust(project.color, -9)}` }}
                            >
                                <div
                                    className="disk"
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
                                                <GatsbyImage
                                                    image={images.find((n) => n.node.relativePath === `${project.organization}.png`).node.childImageSharp.gatsbyImageData}
                                                    alt={"org"}
                                                />
                                                <div>{project.organization}</div>
                                            </div>
                                        }
                                        {project.year.length > 0 && <div className="year">{project.year}</div>}
                                    </div>
                                </div>
                            </div>
                            <div className="links">
                                <div className="link">
                                    <FontAwesomeIcon icon={faHardHat}></FontAwesomeIcon>
                                    <span> {project.role}</span>
                                </div>
                                {project.website.length > 0 &&
                                    <div className="link">
                                        <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
                                        <a href={project.website} target="_blank" rel="noopener noreferrer">{project.website}</a>
                                    </div>
                                }
                                {project.source.length > 0 &&
                                    <div className="link">
                                        <FontAwesomeIcon icon={faFolderOpen}></FontAwesomeIcon>
                                        <a href={project.source} target="_blank" rel="noopener noreferrer">Source Code</a>
                                    </div>
                                }
                            </div>
                            <div className="technologies-wrapper">
                                <h3>Technologies</h3>
                                <div className="technologies">
                                    {project.technologies.map((technology, t) =>
                                        <div className="technology" key={t}>
                                            <div className="icon">
                                                <i className={`devicon-${technology}-plain`}></i>
                                            </div>
                                            <div className="name">{technology}</div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="project-description">
                            <p className="description">
                                {project.brief}
                            </p>
                            <GatsbyImage
                                image={images.find((n) => n.node.relativePath === project.image).node.childImageSharp.gatsbyImageData}
                                alt={project.title}
                            />
                            <p className="credits">
                                <b>Team</b>
                                {project.credits.map((credit, c) =>
                                    <> ~<a href={credit.link}>{credit.name}</a></>
                                )}
                            </p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Projects