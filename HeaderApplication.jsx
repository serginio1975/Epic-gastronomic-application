import React from 'react';
//
import NavigationApplication from './NavigationApplication';
//
import logoRestaurant from './IMG/logo-restaurant.jpeg';
//
import './CSS/HeaderApplication.css';

const HeaderApplication = () => {
  return (
    <header>
      <div className='container'>
        <div className='wrapper-header'>
          <img className='logo-application' src={logoRestaurant} alt='' />
          <NavigationApplication />
        </div>
      </div>
    </header>
  );
};

export default HeaderApplication;
