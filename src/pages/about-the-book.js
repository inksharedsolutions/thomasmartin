import React from 'react'
import Layout from "../components/layout"
import Banner from "../components/banner"
import Book from '../assets/img/books/book_main.png'
import { DiscussionEmbed } from "disqus-react"


const abouttheauthor= (props) =>{


	const slug =(props.location.href);

	const disqusConfig = {
	  shortname: 'thomas-e-martin',
	  config: { identifier:  12, slug}
	}

	const bannerText = (
		<>
			<span className="banr-tagline-fx">Thomas E. Martin</span>
			<h1 className="banr-header-fx">
				About the
				<span className="banr-spn-highlight">Book</span>
			</h1>
		</>
	)


	return(
		<Layout>
		
			<Banner bannerContext={bannerText} defProps={props} />

			<main className="wrapperMain">
				<div className='container'>
						<div className="columns">

							<div className="column">
								<div className="bookImgContainer">
									<img alt="main-book" src={Book} />
								</div>
							</div>

							<div className="column">
								<section className="contentBook">
									
									 <p>
									 Back Door to Mars is set in the mid-twenty-first century and begins in the Appalachian Mountains, progresses to Washington, DC, and concludes with some amazing adventures and discoveries on the planet Mars. 
									 </p>
									 <p>
									 John Cayman is a young college professor who teaches a graduate course in interplanetary archaeology while his wife, Winona, owns her own veterinarian clinic and, with a colleague, enjoys concocting their own brand of medications for their animals with uncanny success. John also has an additional specialty in forensic anthropology, and his lifelong dream has been and is practicing his science on the planet Mars. However, gaining support from the university where he works and the US government has been futile.
									 </p>
									 <p>
									 Finally, John finds a significant ally for his Martian quest in a high-ranking general in the US military. The general was a savvy politician, as well as a close friend of the president, and soon John and his entourage were soon allowed to accompany the government on their expedition to Mars, where they encountered more than they could ever have imagined in this sci-fi adventure of a lifetime.
									 </p>
									
										<nav className="booklinkBlocks">
										    <span>Ebooks :</span>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Back-Door-Mars-Scientist-Bargained-ebook/dp/B084CZCMF4/ref=sr_1_1?keywords=9781643458649&qid=1580496175&sr=8-1">Amazon</a></li>
											{/*<li><a rel="noopener noreferrer" target="_blank" href="https://www.stratton-press.com/books/back-door-to-mars-after-his-dream-to-go-to-mars-is-thwarted-a-young-scientist-gets-unusual-second-chance-but-finds-far-more-than-he-bargained-for/">Stratton Press</a></li>*/}
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/back-door-to-mars-thomas-e-martin/1136287280?ean=9781643458649">Barnes & Noble</a></li>
										</nav>

										<nav className="booklinkBlocks">
											<span>Purchase Paperback :</span>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/dp/1643457144/ref=sr_1_1?keywords=9781643457147&qid=1580496218&sr=8-1">Amazon</a></li>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/back-door-to-mars-thomas-e-martin/1136287280?ean=9781643457147">Barnes & Noble </a></li>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.booksamillion.com/p/Back-Door-Mars/Thomas-E-Martin/9781643457147?id=8009965417365&_ga=2.93999774.2077251330.1602668715-1770015116.1600996550">Books A Million</a></li>
										</nav>

								</section>
							</div>
							
						</div>
							
						<div className="commentSection" >
						  <DiscussionEmbed {...disqusConfig} />
						</div>

				</div>	
			</main>


	  	</Layout>
	)
}

export default abouttheauthor
