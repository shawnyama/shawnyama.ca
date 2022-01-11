import * as React from 'react'
//import { Link } from 'gatsby'
import Nav from '../components/Nav.js'
import About from '../components/About.js'
import Projects from '../components/Projects.js'
import Footer from '../components/Footer.js'
import '../styles/index.css'

const IndexPage = () => {
	return (
		<main>
			<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"></link>
			<Nav></Nav>
			<About></About>
			<Projects></Projects>
			<Footer></Footer>
			<title>Shawn Yama</title>
		</main>
	)
}

export default IndexPage
