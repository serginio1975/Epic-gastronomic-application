import React from 'react';

const CardFrontSide = ({ object }) => {
  // console.log(object);

  return (
    <>
      <div className='wrapper-card-front'>
        <div className='wrapper-favorite-card'>
          <div className='wrapper-title-name-favorite-fod'>
            <h2 className='title-name-favorite-food'>Name food:</h2>
            <span className='name-favorite-food'>{object.strMeal}</span>
          </div>
          <img
            className='foto-card-favorite-food foto-card-favorite-food-front-side'
            src={object.strMealThumb}
            alt='Foto random food.'
          />
          <div
            className='wrapper-title-origin-favorite-food
                     wrapper-title-origin-favorite-food-front-side'
          >
            <p className='title-origin-favorite-food'>
              Country origin of the food:
            </p>
            <span className='title-name-favorite-country'>
              {object.strArea}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardFrontSide;
