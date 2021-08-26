import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../styles/Nav.scss'

const Nav = () => {

	const [verticalNavbar, setVerticalNavbar] = useState(false);
	const [isShrunk, setShrunk] = useState(false);

	useEffect(() => {
		const handler = () => {
			setShrunk((isShrunk) => {
				if (
					!isShrunk &&
					(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
				) {
					return true;
				}

				if (
					isShrunk &&
					document.body.scrollTop < 4 &&
					document.documentElement.scrollTop < 4
				) {
					return false;
				}

				return isShrunk;
			});
		}
	}, []);

	return (
		<div className="Nav">
			<h1 isShrunk={isShrunk}>Shawn Yama</h1>
			<nav>
				<div 
					className="nav-items"
					style={{ flexDirection: verticalNavbar && "column" }}
				>
					<div className="left-items">
						<div className="nav-item">ABOUT</div>
						<span>~</span>
						<div className="nav-item">PROJECTS</div>
						<span>~</span>
						<div className="nav-item">CONNECT</div>
					</div>
					<div className="right-items">
						<div className="divider">|</div>
						<div className="nav-item">resume</div>
						<FontAwesomeIcon 
							icon={faBars}
							className="icon" 
							onClick={() => setVerticalNavbar(!verticalNavbar)}
						/>
					</div>
					
				</div>
			</nav>
		</div>
	)
}

export default Nav