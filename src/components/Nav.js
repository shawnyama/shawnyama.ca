import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import resume from '../docs/ShawnYama_Resume.pdf';
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

	const [openMenu, setOpenMenu] = useState(false);
	const [width, setWidth] = useState();

	const handleResize = () => setWidth(window.innerWidth);

	useEffect(() => {
		handleResize();
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
									onClick={() => document.querySelector("#About").scrollIntoView({ behavior: 'smooth' })}
								>
									ABOUT
								</div>
								<span>~</span>
								<div
									className="nav-item"
									role="menuitem"
									tabIndex={-1}
									onClick={() => document.querySelector("#Projects").scrollIntoView({ behavior: 'smooth' })}
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
									<a rel="noopener noreferrer" href={resume} target="_blank">
										resume
									</a>
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