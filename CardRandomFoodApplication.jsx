import React, { useState } from 'react';
import showIngredientsAndMeasere from './showIngredientsAndMeasere';
import iconInFavorites from './IMG/icon-in-favorites.png';
import './CSS/CardFoodApplication.css';

const CardRandomFoodApplication = ({
  arrayAllFoods,
  setArrayAllFoods,
  arrayRandomFood,
  setArrayRandomFood,
  arrayFavoriteFoods,
  setArrayFavoriteFoods,
  setArrayIngredientsAndMeasureRandomFood,
  setFlagChoiceButton,
  setFlagShowInstructionRandomFood,
  setFlagShowRandomFood,
  //
  flagShowIconAddToFavorites,
  setFlagShowIconAddToFavorites,
}) => {
  //
  console.log('Render card random food !!!', arrayFavoriteFoods);

  const [updatedObject, setUpdatedObject] = useState({});

  // Render card random food !!!  Render card random food !!!  Render card random food !!!
  return (
    <>
      {arrayRandomFood.map((object, index) => (
        <div key={index} className='wrapper-random-card'>
          <div className='wrapper-title-name-random-fod'>
            <h2 className='title-name-random-food'>Name food</h2>
            <span className='name-random-food'>{object.strMeal}</span>
          </div>
          <img
            className='foto-card-random-food'
            src={object.strMealThumb}
            alt='Foto random food.'
          />
          <div className='wrapper-title-origin-random-food'>
            <p className='title-origin-random-food'>
              Country origin of the food:
            </p>
            <span className='title-name-country'>{object.strArea}</span>
          </div>

          {/* Button show ingredients and measures: */}
          <button
            onClick={() => {
              showIngredientsAndMeasere(
                object,
                setArrayRandomFood,
                // arrayRandomFood,
                setArrayIngredientsAndMeasureRandomFood
              );
              setFlagShowInstructionRandomFood(false);
              setFlagShowRandomFood(false);
            }}
            className='button-show-ingredients-measure'
          >
            <span className='content-button-show-ingredients-measure'>
              Click for show ingredients and measure.
            </span>
          </button>

          {/* Button show instructions to coockie: */}
          <button
            onClick={() => {
              setFlagShowInstructionRandomFood(true);
              setFlagChoiceButton(false);
              showIngredientsAndMeasere();
            }}
            className='button-show-ingredients-measure'
          >
            <span className='content-button-show-ingredients-measure'>
              Click for show instruction to cook.
            </span>
          </button>
          <div className='wrapper-favorites-choice'>

            {/* Button add to favorites:*/}
            <button
              onClick={() => {
                const newObject = { ...object, isTrue: true };
                setUpdatedObject(newObject);

                const inArrayFavorite = arrayFavoriteFoods.some(
                  (obj) => obj.idMeal === object.idMeal
                );

                if (!inArrayFavorite) {
                  setArrayFavoriteFoods([...arrayFavoriteFoods, newObject]);
                  setFlagShowIconAddToFavorites(true);
                  if (
                    !arrayAllFoods.some((food) => food.idMeal === object.idMeal)
                  ) {
                    setArrayAllFoods([...arrayAllFoods, newObject]);
                  }
                } else {
                  setFlagShowIconAddToFavorites(false)
                  const arrayFiltered = arrayFavoriteFoods.filter(obj => obj.idMeal !== object.idMeal);
                  setArrayFavoriteFoods(arrayFiltered);
                  const arrayModificated = arrayAllFoods.map((obj) => 
                    (obj.idMeal === object.idMeal ? { ...obj, isTrue: false } : obj)
                  )
                  setArrayAllFoods(arrayModificated)
                }
              }}
              className='button-in-favorites'
            >
              <img
                className='icon-in-favorites'
                src={iconInFavorites}
                alt='icon in favorites.'
              />
            </button>
            {flagShowIconAddToFavorites && (
              <span className='icon-add-in-favorites'>✓</span>
            )}
          </div>
        </div>
      ))}
    </>
  );
};
export default CardRandomFoodApplication;
