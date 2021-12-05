import React from 'react';
import NavigationBar from './NavigationBar';
import './style.css'

const NodeInstallTutorial = () => {
  return (
    <div>
      <NavigationBar />
      <br />
      <div className='row'>
        <div className='col'>
          <h1 className='text-center'> <code className='h4'> How to install NodeJS</code> </h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-3'></div>
        <div className='col-6'>
          <hr />
          <h4><code className='h4'>Software Requirements</code></h4>
          <p>
             <br />
            This tutorial is for windows so a Windows 10 opperating system or VM that can simulate windows is required.
          </p>
         
          <h3><code className='h4'>How to Install Node.js and NPM on Windows</code></h3>
          
          <p>
           
           
              
              <p>
                <ol>
                <li>
                All you have to do is install node.js <a href="https://nodejs.org/en/">Here</a> This install will include npm which is all thats required to start using node and react.
               
                </li>
                  <li>
                   Also if you wish to check the version of your node.js simply type <code className='example'>node -v</code> Same thing goes for npm only with <code className='example'>npm -v</code>
                  </li>
                  <li>
                   To get the latest version of node.js just follow the link in the first step.
                  </li>
                </ol>
              
            </p>
            <p className='text-center'>
            <br />
           <h4> <code className='h4'>Nice Job! you now have node.js!!!!!!! here is a dog.</code></h4>
              
              <br />
              <br />
            <img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/funny-dog-captions-1563456605.jpg' alt="Pet image" className='img-fluid img-thumbnail' width='500rem' />
              
            </p>
          </p>
        </div>
        <div className='col-3'></div>
      </div>
    </div>
  );
}

export default NodeInstallTutorial;
