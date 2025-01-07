import React, { useEffect } from 'react';
import CardFrontSide from './CardFrontSide';
import CardBackSide from './CardBackSide';
import iconInFavorites from './IMG/icon-in-favorites.png';

const CardFoodTwoSides = ({
  arrayRandomFood,
  setArrayRandomFood,
  arrayAllFoods,
  setArrayIngredientsAndMeasureRandomFood,
  setFlagShowRandomFood,
  //
  arrayFavoriteFoods,
  setArrayFavoriteFoods,
  flagAddToFavorites,
  setFlagShowInstructionRandomFood,
  setFlagChoiceButton,
  //

  flagShowPageSearch,
}) => {
  return (
    <>
      {!flagShowPageSearch
        ? arrayFavoriteFoods.map((object, index) => (
            <div key={index} className='wrapper-favorite-card-global'>
              <div className='wrapper-card-inner'>
                <CardFrontSide object={object} />
                <CardBackSide
                  object={object}
                  arrayRandomFood={arrayRandomFood}
                  setArrayRandomFood={setArrayRandomFood}
                  setArrayIngredientsAndMeasureRandomFood={
                    setArrayIngredientsAndMeasureRandomFood
                  }
                  flagAddToFavorites={flagAddToFavorites}
                  setFlagShowInstructionRandomFood={
                    setFlagShowInstructionRandomFood
                  }
                  setFlagChoiceButton={setFlagChoiceButton}
                  arrayFavoriteFoods={arrayFavoriteFoods}
                  setArrayFavoriteFoods={setArrayFavoriteFoods}
                  setFlagShowRandomFood={setFlagShowRandomFood}
                />
              </div>
            </div>
          ))
        : arrayAllFoods.map((object, index) => (
            <div key={index} className='wrapper-favorite-card-global'>
              <div className='wrapper-card-inner'>
                <CardFrontSide object={object} />
                <CardBackSide
                  object={object}
                  arrayRandomFood={arrayRandomFood}
                  setArrayRandomFood={setArrayRandomFood}
                  setArrayIngredientsAndMeasureRandomFood={
                    setArrayIngredientsAndMeasureRandomFood
                  }
                  flagAddToFavorites={flagAddToFavorites}
                  setFlagShowInstructionRandomFood={
                    setFlagShowInstructionRandomFood
                  }
                  setFlagChoiceButton={setFlagChoiceButton}
                  arrayFavoriteFoods={arrayFavoriteFoods}
                  setArrayFavoriteFoods={setArrayFavoriteFoods}
                  setFlagShowRandomFood={setFlagShowRandomFood}
                />
              </div>
            </div>
          ))}
    </>
  );
};

export default CardFoodTwoSides;
