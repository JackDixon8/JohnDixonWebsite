import React from 'react';
import NavigationBar from './NavigationBar';
import './style.css'

const ReactInstallTutorial = () => {
  return (
    <div>
      <NavigationBar />
      <br />
      <div className='row'>
        <div className='col'>
          <h1 className='text-center'>A Great Way to Quick Start a Page using React!</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-3'></div>
        <div className='col-6'>
          <hr />
          <h4> <code className='h4'> Software requirements </code></h4>
          <p>
            <ul>
              <li>This guide will only be for windows 10 so if you do not have windows 10 this will not be helpeful. You can install VM's to simulate a windows 10 Computers.</li>
              <br />
              <li>The Second piece of software you will need is Node.js <a href="https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl"> Which can be installed right here </a> This guide will be following the official react quick start guide. <a href="https://reactjs.org/docs/getting-started.html">
                  Which is on this website.</a> </li>
                  <br />
                  <li> Make sure the npm is installed in Node.js as we will use npm to quick start the framework. Also make sure that windows has the correct path. If you are having trouble with that go into your control pannel in advance setting go to enviornement variables and add the path of node to the list of public path names.</li>
                  <br />
                  <li> Lastly I recommend using VS Code as it comes with its own terminal and is a great IDE. <a href="https://code.visualstudio.com/"> Download here! </a> </li>
              
            </ul>
          </p>
        
           
          <h4><code className='h4'>The Guide </code></h4> 
          <p>
            Quick install using vs terminal!:
            <ol>
              <li>
                Create a folder using the vs code terminal. The terminal can be accessed as one of the toolbar options of VS Code use the command <code className='example'>mkdir FolderName </code>
              </li>
              <br />
              <li>
                Use the command : <code className='example'>npx create-react-app my-app</code> To create all the proper react dependancies and proper formatting
              </li>
              <br />
              <li>
                Now change directories into your newly created react app: <code className='example'>cd my-app</code>
              </li>
              <br />
              <li>
                Test your code locally with the command: <code className='example'>npm start</code>. To close it simply use  <code className='example'> Ctrl^C</code> in the terminal to stop the local host.
              </li>
              <br />
              <li>
                To deploy your code you can just run the command <code className='example'>npm run build</code> which will create a build folder in the chosen app directory.
              </li>
            </ol>
          
          </p>
          
        </div>
        <div className='col-3'></div>
      </div>
    </div>
  );
}

export default ReactInstallTutorial;
