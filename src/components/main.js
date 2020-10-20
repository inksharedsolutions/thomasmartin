 import React from 'react'
 import {Link} from 'gatsby'
 import icon from '../assets/icon/author_icon.jpg'


 const main = () =>{
 	return(
 		<section className="main-section container">
 			<div className="columns">

 				 <div className="column">
 				 	 <div className="wrapper-heading-content">
 				 	 	<h1>About Me</h1>
 				 	 </div>
 				 </div>

 				 <div className="column is-three-fifths section-main-contents">
 				  	<p>
 				  	   <span className="icon-auhtor">
 				  			<img alt="author_icon" src={icon} />
 				  			<span className="author-name-tagline">Thomas E. Martin
 				  				<span className="author-fx">/ author & writer</span>
 				  			</span>
 				  		</span>
 				  	</p>

 				  	<p>
 					  My name is Thomas, I grew up in the low laying areas of the Smoky Mountains in East Tennessee, as the son of a farmer and eventually the oldest of ten, five boys and five girls. We were very poor during those years. Milking cows, putting up hay, working in the tobacco field and going to school took up most of my time until joining the military at age seventeen.
					</p>

					<button className="btn-main-customize"><Link to="/about-the-author"> Read More</Link></button>

 				 </div>
 			</div>
 		</section>
 	)
 }

 export default main;