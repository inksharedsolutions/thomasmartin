import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"
import Main from '../components/main'
import MainBottom  from '../components/main-bottom'
import Newsletter  from '../components/newsletter'
import Banner from "../components/banner"

const IndexPage = (props) => {
	

	const bannerText = (
		<>
			<span className="banr-tagline-fx">Tagline</span>

			<h1 className="front-banr-header-fx">
			I knew it … it is possible to travel between dimensions.
				<span className="banr-spn-highlight">This is the best day of my life.</span>

				<p className="paragraph-content">
				As the megalosaur swallowed her husband then turned toward Winona, she screamed “no way you’re having me for dessert you monster, as she fired the laser rifle.
				</p>

				<Link
					key="banr-btn"
					className="btn-link-banr button is-link" 
					to="/about-the-book">Read More
				</Link>
			</h1>
		</>
	)

	return (
	  	<Layout>
	  		 <Banner bannerContext={bannerText}  defProps={props} />
			 <Main/>
			 <MainBottom />
			 <Newsletter />
	  	</Layout>
  	)

}

export default IndexPage
