import React, { useState, useEffect } from 'react';
import CardFoodTwoSides from './CardFoodTwoSides';
import GetInstructionsRandomFood from './ShowInstructionToCookieFood';
import ShowIngredientsAndMeasureFood from './ShowIngredientsAndMeasureFood';

const PageSearchFoods = ({
  // arrayRandomFood,
  setArrayRandomFood,
  arrayFavoriteFoods,
  // setArrayFavoriteFoods,
  arrayAllFoods,
  setArrayAllFoods,
  // flagAddToFavorites,
  setFlagAddToFavorites,
  //
  flagShowRandomFood,
  setFlagShowRandomFood,
  flagShowInstructionRandomFood,
  setFlagShowInstructionRandomFood,
  //
  flagChoiceButton,
  setFlagChoiceButton,
  //
  setArrayIngredientsAndMeasureRandomFood,
  //
  arrayIngredientsAndMeasureRandomFood,
  //
  setFlagShowPageSearch,
  //
  flagChoiceArrayRandomFavorite,
  // setFlagChoiceArrayRandomFavorite,
  setArrayFavoriteFoods,
  arrayRandomFood,
  //
  setflagChoiceArrayRandomFavorite,
}) => {
  //
  // Render PageSearcFoods !!! Render PageSearcFoods !!! Render PageSearcFoods !!!
  return flagShowRandomFood && !flagShowInstructionRandomFood ? (
    <main>
      <div className='container'>
        <div className='wrapper-favorites-cards'>
          {/*  */}

          {/* Render CardFoodTwoSides !!!  Render CardFoodTwoSides !!!  Render CardFoodTwoSides !!!*/}
          {arrayAllFoods.map((object, index) => (
            <div key={index} className='wrapper-favorite-card-global'>
              <CardFoodTwoSides
                object={object}
                arrayAllFoods={arrayAllFoods}
                setArrayAllFoods={setArrayAllFoods}
                arrayRandomFood={arrayRandomFood}
                setArrayRandomFood={setArrayRandomFood}
                arrayFavoriteFoods={arrayFavoriteFoods}
                //
                setFlagChoiceButton={setFlagChoiceButton}
                setFlagShowInstructionRandomFood={
                  setFlagShowInstructionRandomFood
                }
                setFlagAddToFavorites={setFlagAddToFavorites}
                flagChoiceArrayRandomFavorite={flagChoiceArrayRandomFavorite}
                setflagChoiceArrayRandomFavorite={
                  setflagChoiceArrayRandomFavorite
                }
                setArrayFavoriteFoods={setArrayFavoriteFoods}
                style={{ opacity: 0.5 }}
                //
                setArrayIngredientsAndMeasureRandomFood={
                  setArrayIngredientsAndMeasureRandomFood
                }
                setFlagShowRandomFood={setFlagShowRandomFood}
                //
                // flagShowPageSearch={flagShowPageSearch}
                setFlagShowPageSearch={setFlagShowPageSearch}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  ) : // Render list ingredients and measures !!! Render list ingredients and measures !!!
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
    <GetInstructionsRandomFood
      arrayRandomFood={arrayRandomFood}
      setFlagShowRandomFood={setFlagShowRandomFood}
      flagChoiceButton={flagChoiceButton}
      setFlagChoiceButton={setFlagChoiceButton}
      setFlagShowInstructionRandomFood={setFlagShowInstructionRandomFood}
    />
  );
};
export default PageSearchFoods;
