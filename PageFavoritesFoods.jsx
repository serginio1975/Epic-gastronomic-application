import React, { useState, useEffect } from 'react';
import CardFoodTwoSides from './CardFoodTwoSides';
import ShowIngredientsAndMeasureFood from './ShowIngredientsAndMeasureFood';
import GetInstructionsRandomFood from './ShowInstructionToCookieFood';
import ButtonReturnShowFood from './ButtonReturnShowFood';
import ButtonShowInstructionsFood from './ButtonShowInstructionsFood';
import './CSS/PageFavoritesPage.css';

const PageFavoritesFoods = ({
  arrayAllFoods,
  arrayRandomFood,
  setArrayRandomFood,
  setArrayIngredientsAndMeasureRandomFood,
  arrayFavoriteFoods,
  flagAddToFavorites,
  setFlagAddToFavorites,
  flagChoiceArrayRandomFavorite,
  setflagChoiceArrayRandomFavorite,
  setArrayFavoriteFoods,
  //
  flagShowRandomFood,
  setFlagShowRandomFood,
  flagShowInstructionRandomFood,
  setFlagShowInstructionRandomFood,
  //
  flagChoiceButton,
  setFlagChoiceButton,
  //
  arrayIngredientsAndMeasureRandomFood,
  // flagShowPageSearch,
  setFlagShowPageSearch,
  //
  setArrayAllFoods,
}) => {
  //
  // render pageFavoritesFoods !!! render pageFavoritesFoods !!! render pageFavoritesFoods !!!
  return flagShowRandomFood && !flagShowInstructionRandomFood ? (
    <main>
      <div className='container'>
        <div className='wrapper-favorites-cards'>

          {arrayFavoriteFoods.map((object) => (
            <div key={object.idMeal} className='wrapper-favorite-card-global'>
              <CardFoodTwoSides
                object={object}
                arrayAllFoods={arrayAllFoods}
                arrayRandomFood={arrayRandomFood}
                setArrayRandomFood={setArrayRandomFood}
                arrayFavoriteFoods={arrayFavoriteFoods}
                // addToFavorites={addToFavorites}
                flagAddToFavorites={flagAddToFavorites}
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
                //
                setArrayAllFoods={setArrayAllFoods}
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
export default PageFavoritesFoods;
