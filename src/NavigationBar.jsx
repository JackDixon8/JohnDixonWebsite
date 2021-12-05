import React from 'react';
import './bootstrap.css';
import './style.css'



const NavigationBar = () => {
  return (
    <div className="NavigationBarBoarder">
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <a class='navbar-brand' href='#/'>Homepage</a>
          <button class='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarColor03' aria-controls='navbarColor03' aria-expanded='false' aria-label='Toggle navigation'>
            <span class='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav me-auto'>
              <li class='nav-item dropdown'>
                <a class='nav-link dropdown-toggle' data-bs-toggle='dropdown' href='#' role='button' aria-haspopup='true' aria-expanded='false'>Summary</a>
                <div class='dropdown-menu'>
                  <a class='dropdown-item' href='#/react-summary'>React</a>
                  <a class='dropdown-item' href='#/node-summary'>Node</a>
                </div>
              </li>

              <li class='nav-item dropdown'>
                <a class='nav-link dropdown-toggle' data-bs-toggle='dropdown' href='#' role='button' aria-haspopup='true' aria-expanded='false'>How to install</a>
                <div class='dropdown-menu'>
                  <a class='dropdown-item' href='#/react-install-tutorial'>React</a>
                  <a class='dropdown-item' href='#/node-install-tutorial'>Node</a>
                </div>
              </li>

              <li class='nav-item'>
                <a class='nav-link' href='#/Guide'>Guide</a>
              </li>

              <li class='nav-item'>
                <a class='nav-link' href='#/demo-page'>Demonstration!</a>
              </li>

              <li class='nav-item'>
                <a class='nav-link' href='#/conclusion'>The Conclusion</a>
              </li>

              <li class='nav-item'>
                <a class='nav-link' href='#/credits'>Credits</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar;