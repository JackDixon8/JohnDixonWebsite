import react from 'react';
import NavigationBar from './NavigationBar';

const NodeSummary = () => {
  return (
    <div>
			<NavigationBar />
			<br />
			<div className='row'>
				<div className='col'>
					<h1 className='text-center'>Snapshot of Node</h1>
				</div>
			</div>

			<div className='row'>
				
				<div className='col-6'></div>
				</div>
			<div className='row'>
				<div className='col-3'></div>
				<div className='col-6'>
					<hr />
					
					
					<h4>node summery</h4>
					
					
					
					<p>
					
					
						Node is designed for network applications. It is event driven programming for web servers that helps fast development of webservers that use Javascript. For example the npm command used in the react tutorial in this website.
						<br />
						<br />
						<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png' alt='node logo' height='60rem' />
						<br />
						<br />
						node.js was designed by the OpenJS foundation. Microsoft is acquiring node after its great success.
						
						<br />
						<br />
						
					</p>
				</div>
				<div className='col-3'></div>
			</div>

			<div className='row'>
				<div className='col-3'></div>
				<div className='col-6'>
					
					<h4>Great things about node</h4>
					<p>
						
						<ul>
							<li>
								 Node is very easy to learn. The learning curve is known to be not very steep as it has basic level easy to understand object oriented programming.
							</li>
							<li>
								Node has great scalabiltiy. Due to node.js load balancing which is great at handling high amount of website trafic.
							</li>
							<li>
								Like react, node has a great community of programmers who are willing to help new comers understand. That also means its worth learning.
							</li>
						</ul>

					
					</p>
				</div>
				<div className='col-3'></div>
			</div>

			<div className='row'>
				<div className='col-3'></div>
				<div className='col-6'>
					
					<h4>Problems with node</h4>
					<p>
						
						<ul>
							<li>
								Node does not have a good library support system. People who use node are forced to join different communities about troubleshooting node rather than node itself maintainings its libraries.
							</li>
							<li>
								Node apparently has an unstable UI that is constantly changing. A theme that react had as well since its so popular constant change can make it unstable.
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
					<h4>Who uses node?</h4>
					<p>
						Here is a list of popular companies who use node:
						<br />
						<code> LinkedIn, Netflix, Uber, Paypal, Nasa, eBay, Walmart </code>
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
						Node.js is a super helpful when using react. Since react is such a good framework its very natrual to use node.
						<br />
						<br />
						
						
						<img src='https://1qkeyv41u1op36vgbm47q0i6-wpengine.netdna-ssl.com/wp-content/uploads/2018/12/most-utilized-frameworks-among-developers-worldwide-2017.png' alt='node popularity' width='800rem' />
						<br />
						<br />
						
					</p>
				</div>
				<div className='col-3'></div>
			</div>
		</div>
  );
}

export default NodeSummary;