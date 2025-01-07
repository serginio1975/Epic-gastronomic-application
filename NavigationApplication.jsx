import React from 'react';
import { Link } from 'react-router-dom';
//
import './CSS/NavigationApplication.css';

const NavigationApplication = () => {
  return (
    <>
      <nav className='wrapper-navigation-application'>
        <Link className='navigation-link' to='/'>
          Home
        </Link>
        <Link className='navigation-link' to='search'>
          Searh foods
        </Link>
        <Link className='navigation-link' to='random'>
          Random foods
        </Link>
        <Link className='navigation-link' to='favorites'>
          Favorites foods
        </Link>
      </nav>
    </>
  );
};

export default NavigationApplication;
