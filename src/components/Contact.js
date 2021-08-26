import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import '../styles/Contact.scss'

const Contact = () => {
	return (
		<div className="Contact">
			<div className="contact-title">
				connect
			</div>
			<div className="links">
				<a href="https://github.com/shawnyama" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faGithub}/>
					<span className="tooltip">
						<span className="description">GitHub</span>&#x0007B;
					</span>
				</a>
				<br/>
				<a href="https://www.linkedin.com/in/shawn-yama" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faLinkedin}/>
					<span className="tooltip">
						<span className="description">LinkedIn</span>&#x0007B;
					</span>
				</a>
				<br/>
				<a href="mailto:shawn.yama@ontariotechu.net" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faEnvelope}/>
					<span className="tooltip">
						<span className="description">Email</span>&#x0007B;
					</span>
				</a>
			</div>
		</div>
	)
}

export default Contact