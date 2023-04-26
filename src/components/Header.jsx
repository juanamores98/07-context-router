import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-warning'>
        <div className='container'>
          <a className='navbar-brand mb-1 h1' href='#'>
            Context App
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav'>
              <Link className='nav-link active' aria-current='page' to='/'>
                Home
              </Link>
              <Link className='nav-link' to='/about'>
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
