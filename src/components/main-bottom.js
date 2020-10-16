import React from 'react'
import {Link} from 'gatsby'
import MainBook from '../assets/img/books/book_main.png'
import FrontBook from '../assets/img/books/front_book.png'
import BackBook from '../assets/img/books/back_book.png'
import TwoBooks from '../assets/img/books/two_book_perspective.png'
import icon from '../assets/icon/author_icon.jpg'


/*icons*/

import amazon from '../assets/img/icon-logo/amazon.png'
import barnes from '../assets/img/icon-logo/Barnes-and-noble-booksellers-logo.png'
import stratton from '../assets/img/icon-logo/stratton-logo.png'
import bam from '../assets/img/icon-logo/bam.png'



const mainbottom = () =>{
	return(
		<>
		<section className="main-bottom-section">
			 <div className="container">
			 	<div className="main-bottom-wrapper">
			 		<h1>Latest Book</h1>

			 		<p className="main-subcontent-fx"></p>

			 		<div className="columns">
			 			<div className="column is-two-fifths">
			 				<div className="card">
							  
							  <div className="card-image">
							    <figure className="image is-4by3">
							      <img alt="main_book" src={MainBook} alt="Placeholder image" />
							    </figure>
							  </div>

							  <div className="card-content">
							    <div className="media">

							      <div className="media-left">
							        <figure className="image is-48x48">
							          <img alt="icon" src={icon} alt="Placeholder image" />
							        </figure>
							      </div>

							      <div className="media-content">
							        <p className="title is-4">Valentine Cardinale</p>
							        <p className="subtitle is-6">@thewestside</p>
							      </div>
							    </div>

							    <div className="content">
							      	<p>
									  My name is Thomas, I grew up in the low laying areas of the Smoky Mountains in East Tennessee, as the son of a farmer and eventually the oldest of ten, five boys and five girls. We were very poor during those years. Milking cows, putting up hay, working in the tobacco field and going to school took up most of my time until joining the military at age seventeen.
							      		<span className="btn-redirect"> <Link to="/about-the-book">Read More</Link></span>
							      	</p>
							    </div>
							  </div>

							</div>
			 			</div>

			 			<div className="column">
			 				<div className="columns">
			 					<div className="column">
			 						<img src={FrontBook} />
			 					</div>
			 					<div className="column">
			 						<img src={BackBook} />
			 					</div>
			 				</div>

			 				<div className="columns is-full full-layout-boxstyle">
			 					<img src={TwoBooks} />
			 				</div>
			 			</div>
			 		</div>
			 	</div>
			 </div>
		</section>

		<div class="feautured-links-logo">

			<p>Thomas E. Martin has been featured numerous time on...</p>
			
 			<ul>
 				<li><img alt="" src={amazon} /></li>
 				<li><img alt="" src={barnes} /></li>
 				<li><img alt="" src={stratton} /></li>
 				<li><img alt="" src={bam} /></li>
 			</ul>

 		</div>

 	</>
	)
}

export default mainbottom