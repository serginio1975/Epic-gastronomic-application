import React, { useEffect } from 'react';
import CardFrontSide from './CardFrontSide';
import CardBackSide from './CardBackSide';
import iconInFavorites from './IMG/icon-in-favorites.png';

const CardFoodTwoSides = ({
  arrayRandomFood,
  setArrayRandomFood,
  arrayAllFoods,
  setArrayAllFoods,
  setArrayIngredientsAndMeasureRandomFood,
  setFlagShowRandomFood,
  //
  arrayFavoriteFoods,
  setArrayFavoriteFoods,
  setFlagShowInstructionRandomFood,
  setFlagChoiceButton,
  //
  setFlagAddToFavorites,
  object,
}) => {
  //
  return (
    <>
      <div className='wrapper-card-inner'>
        <CardFrontSide object={object} />
        <CardBackSide
          object={object}
          arrayRandomFood={arrayRandomFood}
          setArrayRandomFood={setArrayRandomFood}
          setArrayIngredientsAndMeasureRandomFood={
            setArrayIngredientsAndMeasureRandomFood
          }
          setFlagShowInstructionRandomFood={setFlagShowInstructionRandomFood}
          setFlagChoiceButton={setFlagChoiceButton}
          arrayFavoriteFoods={arrayFavoriteFoods}
          setArrayFavoriteFoods={setArrayFavoriteFoods}
          setFlagShowRandomFood={setFlagShowRandomFood}
          setFlagAddToFavorites={setFlagAddToFavorites}
          //
          arrayAllFoods={arrayAllFoods}
          setArrayAllFoods={setArrayAllFoods}
          //
        />
      </div>
    </>
  );
};
export default CardFoodTwoSides;
// !!!!!!!
