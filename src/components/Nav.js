import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import '../styles/Nav.scss'

const Nav = () => {
	const links = useStaticQuery(graphql`
        query {
            allConnectJson {
                nodes {
                    platform
					address
					target
                }
            }
        }
    `).allConnectJson.nodes;

	const aboutAnchor = document.querySelector("#About");
	const projectsAnchor = document.querySelector("#Projects");

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
					{(width >= 800 || openMenu) &&
						<>
							<div className="left-items">
								<div
									className="nav-item"
									role="menuitem"
									tabIndex={-1}
									onClick={() => aboutAnchor.scrollIntoView({ behavior: 'smooth' })}
								>
									ABOUT
								</div>
								<span>~</span>
								<div
									className="nav-item"
									role="menuitem"
									tabIndex={-1}
									onClick={() => projectsAnchor.scrollIntoView({ behavior: 'smooth' })}
								>
									PROJECTS
								</div>
							</div>
							<div className="right-items">
								{
									links.map((link, l) =>
										<div key={l} className="nav-item connect">
											<a
												href={link.address}
												target={link.target}
												rel="noopener noreferrer"
											>
												{link.platform.toLowerCase()}
											</a>
										</div>
									)
								}
								<div 
									className="nav-item"
									role="menuitem"
									tabIndex={-1}
								>
									resume
								</div>
							</div>
						</>
					}
					<div className="openclose">
						<span
							className={openMenu ? "close" : "open"}
							role="menuitem"
							tabIndex={-1}
							onClick={() => setOpenMenu(!openMenu)}
						>
							{openMenu ? "X" : "menu"}
						</span>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default Nav