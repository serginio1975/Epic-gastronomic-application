import React from 'react';
import iconInFavorites from './IMG/icon-in-favorites.png';
import showIngredientsAndMeasere from './showIngredientsAndMeasere';

const CardBackSide = ({
  object,
  arrayRandomFood,
  setArrayRandomFood,
  setArrayIngredientsAndMeasureRandomFood,
  setFlagShowRandomFood,
  //
  flagAddToFavorites,
  setFlagShowInstructionRandomFood,
  setFlagChoiceButton,
  //
  arrayFavoriteFoods,
  setArrayFavoriteFoods,
}) => {
  // console.log(setArrayRandomFood);s

  return (
    <>
      <div className='wrapper-favorite-card wrapper-favorite-card-back  wrapper-card-back'>
        <div className='wrapper-title-name-favorite-fod'>
          <h2 className='title-name-favorite-food'>Name food:</h2>
          <span className='name-favorite-food'>{object.strMeal}</span>
        </div>
        <img
          className='foto-card-favorite-food'
          src={object.strMealThumb}
          alt='Foto random food.'
        />
        <div className='wrapper-title-origin-favorite-food'>
          <p className='title-origin-favorite-food'>
            Country origin of the food:
          </p>
          <span className='title-name-favorite-country'>{object.strArea}</span>
        </div>
        {/* Button show ingredients and measures: !!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
        <button
          onClick={() => {
            showIngredientsAndMeasere(
              object,
              arrayRandomFood,
              setArrayRandomFood,
              setArrayIngredientsAndMeasureRandomFood,
              setFlagShowRandomFood
            );
            console.log('object = ', object);
          }}
          className='button-show-ingredients-measure-favorites'
        >
          <span className='content-button-show-ingredients-measure'>
            Click for show ingredients and measure.
          </span>
        </button>
        {/* Button show instructions to coockie: !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
        <button
          onClick={() => {
            setFlagShowInstructionRandomFood(true);
            setFlagChoiceButton(false);
            // showIngredientsAndMeasere(
            //   object,
            //   arrayRandomFood,
            //   setArrayRandomFood,
            //   setArrayIngredientsAndMeasureRandomFood,
            //   setFlagShowRandomFood
            // );
          }}
          className='button-show-instructions-favorites'
        >
          <span className='content-button-show-ingredients-measure'>
            Click for show instruction to cook.
          </span>
        </button>
        <div className='wrapper-favorites-choice'>
          {/* Button add to add favorites: !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
          <button
            onClick={() => {
              console.log('!!!!!!!!!!!!!!!!!!!!');
              // setFlagAddToFavorites(false);
            }}
            className='button-in-favorites'
          >
            <img
              // event.stopPropagation(); // Остановить всплытие события при клике на img !!!!!
              className='icon-in-favorites'
              src={iconInFavorites}
              alt='icon in favorites.'
            />
          </button>
          {flagAddToFavorites && (
            <span
              onClick={() => {
                console.log(object);
                console.log(arrayFavoriteFoods);
                const arrayFiltered = arrayFavoriteFoods.filter(
                  (el) => el.idMeal !== object.idMeal
                );
                console.log('arrayFiltered = ', arrayFiltered);
                setArrayFavoriteFoods(arrayFiltered);
              }}
              className='icon-add-in-favorites'
            >
              ✓
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default CardBackSide;
