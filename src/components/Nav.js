import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons'
import '../styles/Nav.scss'

const Nav = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const [width, setWidth] = useState(window.innerWidth);

	const handleResize = () => setWidth(window.innerWidth);

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [])

	return (
		<div className="Nav">
			<h1>Shawn Yama</h1>
			<nav>
				<div className="nav-items">
					{ (width >= 800 || openMenu) &&
						<>
							<div className="left-items">
								<div className="nav-item">ABOUT</div>
								<span>~</span>
								<div className="nav-item">PROJECTS</div>
							</div>
							<div className="right-items">
								<div className="nav-item connect">github</div>
								<div className="nav-item connect">linkedin</div>
								<div className="nav-item connect">email</div>
								<div className="nav-item">resume</div>
								
							</div>
						</>
					}
					<div className="openclose">
						<span onClick={() => setOpenMenu(!openMenu)}>
							{!openMenu ? 'menu' : 'X'}
						</span>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default Nav