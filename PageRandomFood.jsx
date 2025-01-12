import React, { useState, useEffect } from 'react';
//
import './CSS/PageRandomFood.css';
//
import CardRandomFoodApplication from './CardRandomFoodApplication';
import ShowIngredientsAndMeasureFood from './ShowIngredientsAndMeasureFood';
import ShowInstructionToCookieFood from './ShowInstructionToCookieFood';

const PageRandomFood = ({
  arrayAllFoods,
  setArrayAllFoods,
  arrayRandomFood,
  setArrayRandomFood,
  arrayIngredientsAndMeasureRandomFood,
  setArrayIngredientsAndMeasureRandomFood,

  arrayFavoriteFoods,
  setArrayFavoriteFoods,
  // Flags !!! Flags !!! Flags !!!
  flagShowRandomFood,
  setFlagShowRandomFood,

  // setFlagAddToFavorites,

  flagShowInstructionRandomFood,
  setFlagShowInstructionRandomFood,

  flagChoiceButton,
  setFlagChoiceButton,
  //
  setFlagRandomFood,
  //
  flagShowIconAddToFavorites,
  setFlagShowIconAddToFavorites,
  //
}) => {
  //
  // Render pageRandomFood !!! Render pageRandomFood !!! Render pageRandomFood !!!
  // Условный рендер + использован тернарный оператор !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  return flagShowRandomFood && !flagShowInstructionRandomFood ? (
    <main>
      <div className='container'>
        <button
          onClick={() => {
            setFlagRandomFood((prev) => !prev);
            setFlagShowIconAddToFavorites(false);
          }}
          className='button-show-random-food'
        >
          <span className='title-button-show'>Click for show random food.</span>
        </button>
        <CardRandomFoodApplication
          arrayAllFoods={arrayAllFoods}
          setArrayAllFoods={setArrayAllFoods}
          arrayRandomFood={arrayRandomFood}
          setArrayRandomFood={setArrayRandomFood}
          arrayFavoriteFoods={arrayFavoriteFoods}
          setArrayIngredientsAndMeasureRandomFood={
            setArrayIngredientsAndMeasureRandomFood
          }
          setFlagShowRandomFood={setFlagShowRandomFood}
          //
          setArrayFavoriteFoods={setArrayFavoriteFoods}
          setFlagShowInstructionRandomFood={setFlagShowInstructionRandomFood}
          //
          setFlagChoiceButton={setFlagChoiceButton}
          //
          flagShowIconAddToFavorites={flagShowIconAddToFavorites}
          setFlagShowIconAddToFavorites={setFlagShowIconAddToFavorites}
        />
      </div>
    </main>
  ) : // Render list ingredients and measures !!! Render list ingredients and measures !!!
  //
  !flagShowInstructionRandomFood ? (
    <ShowIngredientsAndMeasureFood
      arrayIngredientsAndMeasureRandomFood={
        arrayIngredientsAndMeasureRandomFood
      }
      setFlagShowRandomFood={setFlagShowRandomFood}
      setFlagShowInstructionRandomFood={setFlagShowInstructionRandomFood}
      flagChoiceButton={flagChoiceButton}
      setFlagChoiceButton={setFlagChoiceButton}
    />
  ) : (
    // Render instructions to cookie !!!  Render instructions to cookie !!!
    <ShowInstructionToCookieFood
      arrayRandomFood={arrayRandomFood}
      setFlagShowRandomFood={setFlagShowRandomFood}
      flagChoiceButton={flagChoiceButton}
      setFlagChoiceButton={setFlagChoiceButton}
      setFlagShowInstructionRandomFood={setFlagShowInstructionRandomFood}
    />
  );
};
export default PageRandomFood;
