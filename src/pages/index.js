import * as React from 'react'
import { Helmet } from 'react-helmet'
import Nav from '../components/Nav.js'
import About from '../components/About.js'
import Projects from '../components/Projects.js'
import Footer from '../components/Footer.js'
import favicon from '../images/favicon.ico'
import '../styles/index.css'

const IndexPage = () => {
	return (
		<main>
			<Helmet>
				<meta name="description" content="Shawn Yama's portfolio" />
				<link rel="icon" href={favicon} />
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"></link>
				<title>Shawn Yama</title>
			</Helmet>
			<Nav></Nav>
			<About></About>
			<Projects></Projects>
			<Footer></Footer>
			<title>Shawn Yama</title>
		</main>
	)
}

export default IndexPage
