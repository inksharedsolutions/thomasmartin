import React from 'react'
import Layout from "../components/layout"
import Banner from "../components/banner"
import icon from '../assets/icon/author_icon.jpg'


const abouttheauthor= (props) =>{


	const bannerText = (
		<>
			<span className="banr-tagline-fx">Thomas E. Martin</span>
			<h1 className="banr-header-fx">
				About the
				<span className="banr-spn-highlight">Author</span>
			</h1>
		</>
	)

	return(
		<Layout>

			<Banner bannerContext={bannerText} defProps={props} />

			<div className="container">
				<section className="body-author-contents columns">
					 	<div className="column">
					 		<div className="heading-quote">

					 			<div className="author-image-container">
					 				<img src={icon} />
					 				<span className="author-name">
					 					<span className="author-span-ft">Author |  Writer </span>
					 					Thomas E. Martin
					 				</span>
					 			</div>

					 			<h4>
								 “I knew it … it is possible to travel between dimensions. This is the best day of my life”.
					 			</h4>

					 			<span className="ata-span-fx">author quote</span>
					 		</div>
					 	</div>

					 	 <div className="column">
					 	 	<article className="article-section">

					 	 		<p>
						 	 		My name is Thomas, I grew up in the low laying areas of the Smoky Mountains in East Tennessee, as the son of a farmer and eventually the oldest of ten, five boys and five girls. 
								</p>
								<p>
									We were very poor during those years. Milking cows, putting up hay, working in the tobacco field and going to school took up most of my time until joining the military at age seventeen. 
								</p>
								<p>
									It was the first time that I had ever been away from home. But for the harassments of the instructors, I actually enjoyed the twelve weeks of basic training at a military in Texas, where for the first time ever, I became friends with a small group of black men who could make up a song about anything, a bar of soap or a pair of shoes or a bad situation etc. 
								</p>
								<p>	
									And they would sing it as though it was a quality song but always made it come across as funny. Meanwhile, while completing my initial training in Illinois to be an aircraft engine mechanic and during a mandatory visit to the base education office, the Lady in charge of that office indicated that I should take a GED test. She obviously had seen from my records that I had quit school in the tenth grade; so, I took the test. 
								</p>
								<p>	
									The education officer graded the test and to my surprise, she smiled and said, you just made the highest score that anyone has ever made on this test. She then put a copy of the GED certificate in my records and gave me a copy with the suggestion, that since my grades were better than average when I had quit, that it might be a good idea to send it back to the high school and ask if they would consider the certificate, along with my military experience, sufficient evidence to exchange it for a high school diploma. 
								</p>
								<p>	
									I wasn’t very expectant of that ever happening; however, she must have perceived that I most likely wouldn’t follow through and evidently did it for me. A few weeks later, I received a call from the education officer who asked me to come and see her that afternoon. When I arrived at her office, she handed me a dully signed, official high school diploma. She then encouraged me to use it as a key in opening doors to further education. I was thrilled and thanked her and fully intended to eventually follow through with that idea. However at the moment finishing my training there in Illinois was paramount. 
								</p>
								<p>	
									Upon graduation I was assigned to a base in Texas as an engine mechanic on the B-36 Bombers which had three large reciprocating engines mounted on the rear of each wing to push the plane forward as opposed to pulling it. The B-36’s six engines were quite powerful but the Air Force wanted more power and speed; so, the huge bomber was redesigned to include two powerful jet engines mounted on the end of each wing in addition to the six reciprocating engines. After working in the position as a reciprocating engine mechanic for a year or so, I decided to take advantage of an unexpected opportunity to cross train as a jet engine mechanic. The jet engine training class took about two weeks and I finished my first four years in the Air Force as a jet engine mechanic. 
								</p>
								<p>	
									Around this time in my life, I met a young Spanish girl at the place where I worked, whose name was Maria. We started dating and bam, I was in love and we planned to get married but one day out of the blue, without any warning, she broke up with me. At that time I was having difficulty finding a decent job and eventually decided to reenlist in the Air Force, only this time since my aptitude test was high enough to allow me a wider choice of careers. I choose the one that provided the longest schooling, which turned out to be Radar Electronics (basic and advanced) at 52 weeks. I figured that this would at least help me to be better prepared in case I ever found myself a civilian in need of a job again. My first assignment was to a base somewhere on the southern coast, as a Radar Electronics Technician. This assignment was an unexpected combat training excurse.
								</p>
								<p>	
									Although, I didn’t realize it at the time but the government was preparing a group of us for a tour in Viet Nam. There was quite a bit of classified information associated with that situation, so I won’t get into that, but while there, in that combat zone, writing letters back home, became a welcome stress relieve. I actually became interested in writing at that time and eventually became aware that I had a strong imagination and after completing my tour in Nam, I returned to the US and skipping a lot of other details started experimenting with a small recording device in my shirt pocket, so that whenever, an imaginary scenario would pop into my mind, I could just speak it in to the recorder. Then as time permitted the ideas would go onto paper. At the time my job was in electronics; therefore, most of the ideas would fit into the sci-fi genre and since I had my own ideas as to what science fiction would be like, there was a few weird ones. A year or two had passed when I decided see if some of the ideas could be tied together. After some rewriting and crossing the boundaries of another genre or two, I finally came up with my first novel ‘Back Door To Mars’.
								</p>

					 	 	</article>
					 	</div>
				</section>
			</div>
	  	</Layout>
	)
}

export default abouttheauthor