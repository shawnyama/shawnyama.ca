import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import '../styles/Connect.scss'

const links = [
	{
		platform: "GitHub",
		address: "https://github.com/shawnyama",
		target: "_blank",
		icon: faGithub
	},
	{
		platform: "LinkedIn",
		address: "https://www.linkedin.com/in/shawn-yama",
		target: "_blank",
		icon: faLinkedin
	},
	{
		platform: "yama.shawn@outlook.com",
		address: "mailto:yama.shawn@outlook.com",
		target: "",
		icon: faEnvelope
	}
];

const Connect = () => {
	return (
		<div className="Connect">
			<div className="connect-title">
				connect
			</div>
			<div className="links">
			{
               links.map((link, l) => 
			   <div>
                    <a 
                        key={l}
                        href={link.address}
						target={link.target}
						rel="noopener noreferrer"
                    >
                       	<FontAwesomeIcon icon={link.icon}/>
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