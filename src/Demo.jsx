import React from 'react';
import NavigationBar from './NavigationBar';
import 'semantic-ui-css/semantic.min.css'
import DateTime from './DateTime'

const Demo = () => {
  return (
    <div>
      <NavigationBar />
      <br />
			<div className='row'>
				<div className='col'>
					<h1 className='text-center'>Demo Page</h1>
          <h4 className='text-center'>The Theme of this page was chosen by the music I was listening to while coding this project. Synthhhhhhwave</h4>
				</div>
			</div>
			<div className='row'>
				<div className='col-3'></div>
        <div className='col-6'>
          <hr />
          <p className='text-center'>
          
             <br />
            <br />
            <div className='row'>
            <div className='col'>
            <img src='https://i.redd.it/cj3jf0ypj1721.jpg' alt="Pet image" className='img-fluid img-thumbnail' width='500rem' /> 
            </div>
            <div className='col'>
            <img src='https://i.redd.it/cj3jf0ypj1721.jpg' alt="Pet image" className='img-fluid img-thumbnail' width='500rem' /> 
            </div>
            </div>
            <br />
            <br />
            <p>
            <code className='h4'>
              I Created a clock here to make sure you dont waste too much time on this page.
              </code>
             </p> 
             <code className='example'>
            <DateTime></DateTime>
            </code>
            <br />
            <br />
            <div className='row'>
            <div className='col'>
            <img src='https://listverse.com/wp-content/uploads/2020/02/maxresdefault-3-1200x720.jpg' alt="Pet image" className='img-fluid img-thumbnail' width='500rem' /> 
            </div>
            <div className='col'>
            <img src='https://listverse.com/wp-content/uploads/2020/02/maxresdefault-3-1200x720.jpg' alt="Pet image" className='img-fluid img-thumbnail' width='500rem' /> 
            </div>
            </div>
            <br />
            <br />
            <div className='row'>
            <div className='col'>
            <img src='https://coolwallpapers.me/picsup/5851399-retrowave-synthwave-artist-artwork-digital-art-hd-4k-artstation.jpg' alt="Pet image" className='img-fluid img-thumbnail' width='500rem' /> 
            </div>
            <div className='col'>
            <img src='https://coolwallpapers.me/picsup/5851399-retrowave-synthwave-artist-artwork-digital-art-hd-4k-artstation.jpg' alt="Pet image" className='img-fluid img-thumbnail' width='500rem' /> 
            </div>
            </div>
          
          </p>
        </div>
        <div className='col-3'></div>
			</div>
    </div>
  );
}

export default Demo;