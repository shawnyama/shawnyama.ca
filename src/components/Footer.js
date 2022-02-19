import * as React from 'react'
import Connect from './Connect'
import '../styles/Footer.scss'

const Footer = () => {
	return (
		<div className="Footer">
			<span className="wave">~</span>
			&#x000A9; 2022 Shawn Yama
			<span className="wave">~</span>
			<Connect></Connect>
		</div>
	)
}

export default Footer