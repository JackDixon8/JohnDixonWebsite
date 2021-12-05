import React from 'react';
import './bootstrap.css'
import NavigationBar from './NavigationBar';


document.body.style = 'background: lightblue;';

const HomePage = () => {
  return (
    <div>
      <NavigationBar />
      <br />
			<div className='row'>
				<div className='col'>
					<h1 className='text-center'>Welcome to John's end of year website!!</h1>
          <h2 className='text-center'>There might be dogs on this website</h2>
				</div>
			</div>
			<div className='row'>
				<div className='col-3'></div>
        <div className='col-6'>
          <hr />
          <p className='text-center'>
            Here is the Home Page. The link to the Demonstration page is located between the dog photos!
             <br />
            <br />
            <div className='row'>
            <div className='col'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/1/18/2008-07-28_Dog_at_Frolick_Field.jpg' alt="Pet image" className='img-fluid img-thumbnail' width='500rem' /> 
            </div>
            <div className='col'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/1/18/2008-07-28_Dog_at_Frolick_Field.jpg' alt="Pet image" className='img-fluid img-thumbnail' width='500rem' /> 
            </div>
            </div>
            <br />
            <br />
            The demonstration page is located <a href='#/demo-page'>here</a>.
            <br />
            <br />
            <div className='row'>
            <div className='col'>
            <img src='https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/18/1462454304-gettyimages-485952777.jpg' alt="Pet image" className='img-fluid img-thumbnail' width='500rem' /> 
            </div>
            <div className='col'>
            <img src='https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/18/1462454304-gettyimages-485952777.jpg' alt="Pet image" className='img-fluid img-thumbnail' width='500rem' /> 
            </div>
            </div>

          
          </p>
        </div>
        <div className='col-3'></div>
			</div>
    </div>
  );
}

export default HomePage;