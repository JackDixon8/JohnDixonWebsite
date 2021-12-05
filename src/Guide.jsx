import React from 'react';
import NavigationBar from './NavigationBar';
import DateTime from './DateTime'



const Guide = () => {
  return (
    <div>
      <NavigationBar />
      <br />
      <div className='row'>
        <div className='col-3'></div>
        <div className='col-6'>
          <h1 className='text-center'> <code className='h1'> Alright I am going to show you how to make a cool looking page like mine in record time </code></h1>
        </div>
        <div className='col-3'></div>
      </div>
      <div className='row'>
        <div className='col-3'></div>
        <div className='col-6'>
          <hr />
          <p>
            If you have not already looked at how to install react and node js plus kickstart your website then    <a href='#/react-install-tutorial'>start at this page</a>.
            <br />
            <br />

            

            <h3>CSS Styling</h3>
            <p>
              In your react pages you are going to want to consolidate your styling to one page so create a file called style.cc in the src folder of your main app folder. Any time you wish to change the format of a class you make you can simply refer to the style sheet.

              <br />
              <br />
              For a basic look into intro cs follow the W3 schools guides for css <a href='https://www.w3schools.com/css/'> Check this guide out </a>
              <br />
              <br />
              <code className='h4'>  I recommend using lighter tones for a background. Here is an example of a background color I use and the syntax with it: </code>
              <br />
              <br />
              <code className='example'> .className(Currly Bracket)background-color: rgb(102, 222, 238);(Currly Bracket)</code>

          
              
              
            </p>

            <h3>React double coloums </h3>
            <p>
              Make sure to start by creating a .jsx file in the src folder and at the top of the file include: <br /> <code>import React from 'react';<br />import NavigationBar from './NavigationBar';</code>

              <br />
              
              <br />
              Then Const demo and all of that.  <a href='https://www.w3schools.com/css/'> See react syntax here </a>
              <br />
              <br />
              <br />
              add images to your webpage in a 2 coloum format because it looks alot nicer that way.
              You can use more or less html from jsx pages using: <code>Return(HTML CODE INSIDE);</code> which means you can use div classNames from react for example row and coloum. For every row create two coloums.
              <br />
              <br />
              Then you can just use <code> img src='image url here' in each of the coloums</code>

              Look at my example syntax:
              <br />
              <br />
              <img src={process.env.PUBLIC_URL + '/images/DemoImage.jpg'} alt='Node install' />
            </p>

          
            <h3>Adding the date and time!</h3>  
                   
            <br />
            <br />
            You can use the date and time functions built into the Javascript libraries to get the date and time of anyone who logs onto the website. Once you properly format the front end of these functions you can then import the date and time into any page that you want using:
            <br />
            <br />
            Both words get a greator than and less than sign on either side.
            <code>  DateTime DateTime/ </code>
            <br />
            <br />
            <code className='example'>
            <DateTime></DateTime>
            </code>
            
          </p>
         
        </div>
        <div className='col-3'></div>
        
      </div>
      
    </div>
    
  );
}

export default Guide;