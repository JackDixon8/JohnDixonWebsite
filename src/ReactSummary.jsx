import React from 'react';
import NavigationBar from './NavigationBar';

const ReactSummary = () => {
	return (
		<div>
			<NavigationBar />
			<br />
			<div className='row'>
				<div className='col'>
					<h1 className='text-center'>Snapshot of React</h1>
				</div>
			</div>

			<div className='row'>
				
				<div className='col-6'></div>
				</div>
			<div className='row'>
				<div className='col-3'></div>
				<div className='col-6'>
					<hr />
					
					
					<h4>React summery</h4>
					
					
					
					<p>
					
					
						React is a JS framework or an open scorce library that was developed by Facebook or more weirld known as Meta.
						<br />
						<br />
						<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' alt='React logo' height='60rem' />
						<br />
						<br />
						React is made for building user interfaces that are favoured to be one page
						
						<br />
						<br />
						
					</p>
				</div>
				<div className='col-3'></div>
			</div>

			<div className='row'>
				<div className='col-3'></div>
				<div className='col-6'>
					
					<h4>Great things about react</h4>
					<p>
						
						<ul>
							<li>
								 JSX files are able to use html tags inside of them which makes for great front-end programming 
							</li>
							<li>
								Popularity of a language makes sure that it likely something good to invest your time into learning as many companies will be seeking react devs.
							</li>
							<li>
								React is a very simple and easy to learn framework that does not suffer on preformance.
							</li>
						</ul>

					
					</p>
				</div>
				<div className='col-3'></div>
			</div>

			<div className='row'>
				<div className='col-3'></div>
				<div className='col-6'>
					
					<h4>Problems with React</h4>
					<p>
						
						<ul>
							<li>
								JSX syntax is not the easiest to understand as its a mix of HTML and Javascript. This can create a stronger barrier of entry.
							</li>
							<li>
								The rapid developement of React makes it difficult to stay relevent with React as it is constantly changing and the most optomized and best functions are constantly changing.
							</li>
							
						</ul>

					
					</p>
				</div>
				<div className='col-3'></div>
			</div>

			<div className='row'>
				<div className='col-3'></div>
				<div className='col-6'>
					<hr />
					<h4>Who uses React?</h4>
					<p>
						Here is a list of popular companies who use react:
						<br />
						<code> Bloomberg, Facebook, Uber Eats, Discord, Instagram, Pinterest, Walmart, Wix </code>
						<br />
						<br />
					
						
					
					</p>
				</div>
				<div className='col-3'></div>
			</div>

			<div className='row'>
				<div className='col-3'></div>
				<div className='col-6'>
					<hr />
					<h4>Why I care</h4>
					<p>
						A lot of buisnessess are choosing to use react so picking react for this project will hopefully build my portfolio
						<br />
						<br />
						React is a great rising framework that most new buisnessess are opting for over other frameworks
						<br />
						<br />
						<img src='https://www.statista.com/graphic/1/1124699/worldwide-developer-survey-most-used-frameworks-web.jpg' alt='React popularity' width='800rem' />
						<br />
						<br />
						
					</p>
				</div>
				<div className='col-3'></div>
			</div>
		</div>
	);
}

export default ReactSummary;