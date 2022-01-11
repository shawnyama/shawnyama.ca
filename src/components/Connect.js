import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import '../styles/Connect.scss'

const Connect = () => {
	const links = useStaticQuery(graphql`
        query {
            allConnectJson {
                nodes {
                    platform
					address
					target
					icon
                }
            }
        }
    `).allConnectJson.nodes;

	const icons = [faGithub, faLinkedin, faEnvelope];

	return (
		<div className="Connect">
			<div className="connect-title">
				connect
			</div>
			<div className="links">
			{
               links.map((link, l) => 
			   <div key={l}>
                    <a 
                        href={link.address}
						target={link.target}
						rel="noopener noreferrer"
                    >
                       	<FontAwesomeIcon icon={icons[l]}/>
					   	<div className="tooltip">
							<div className="platform">{link.platform}</div>
							<span className="arrow">&#x0007B;</span>
						</div>
                    </a>
				</div>
                )
            }
			</div>
		</div>
	)
}

export default Connect