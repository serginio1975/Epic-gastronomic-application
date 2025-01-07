import React, { useState, useEffect } from 'react';
// import CardRandomFoodApplication from './CardRandomFoodApplication';
import CardFoodTwoSides from './CardFoodTwoSides';
import ShowIngredientsAndMeasureFood from './ShowIngredientsAndMeasureFood';
import GetInstructionsRandomFood from './ShowInstructionToCookieFood';
//
// import showIngredientsAndMeasere from './showIngredientsAndMeasere';
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

  //
  arrayIngredientsAndMeasureRandomFood,
  //
  flagShowPageSearch,
  setFlagShowPageSearch,
}) => {
  useEffect(() => {
    console.log(44444);
    setFlagShowPageSearch(false);
    // setFlagChoiceArrayRandomFavorite(true);
  }, []);

  return flagShowRandomFood && !flagShowInstructionRandomFood ? (
    <main>
      <div className='container'>
        <div className='wrapper-favorites-cards'>
          {/* Render CardFoodTwoSides !!!  Render CardFoodTwoSides !!!  Render CardFoodTwoSides !!!*/}
          <CardFoodTwoSides
            arrayAllFoods={arrayAllFoods}
            arrayRandomFood={arrayRandomFood}
            setArrayRandomFood={setArrayRandomFood}
            arrayFavoriteFoods={arrayFavoriteFoods}
            // addToFavorites={addToFavorites}
            flagAddToFavorites={flagAddToFavorites}
            setFlagChoiceButton={setFlagChoiceButton}
            setFlagShowInstructionRandomFood={setFlagShowInstructionRandomFood}
            setFlagAddToFavorites={setFlagAddToFavorites}
            flagChoiceArrayRandomFavorite={flagChoiceArrayRandomFavorite}
            setflagChoiceArrayRandomFavorite={setflagChoiceArrayRandomFavorite}
            setArrayFavoriteFoods={setArrayFavoriteFoods}
            style={{ opacity: 0.5 }}
            //
            setArrayIngredientsAndMeasureRandomFood={
              setArrayIngredientsAndMeasureRandomFood
            }
            setFlagShowRandomFood={setFlagShowRandomFood}
            //
            flagShowPageSearch={flagShowPageSearch}
            setFlagShowPageSearch={setFlagShowPageSearch}
          />
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

//
// const showIngredientsAndMeasere = (object) => {
//   console.log(object);

//   console.log(arrayRandomFood);
//   // console.log(arrayIngredientsAndMeasureRandomFood);

//   // Проверяем, что обьект загрузился:
//   if (arrayRandomFood) {
//     console.log('if');

//     // Создаём массив ингредиентов:
//     let ingredientsFood;
//     let measureIngredient;
//     const arrayIngredientsAndMeasure = [];
//     console.log(arrayIngredientsAndMeasure);

//     for (let i = 1; i < 20; i++) {
//       // Проверяем, что ингредиент в данной позиции существует:

//       if (object[`strIngredient${i}`]) {
//         ingredientsFood = object[`strIngredient${i}`];
//       }
//       // Проверяем, что единица измерения в данной позиции существует:
//       if (object[`strMeasure${i}`] && object[`strMeasure${i}`] !== ' ') {
//         measureIngredient = object[`strMeasure${i}`];
//       } else {
//         ingredientsFood = '';
//         measureIngredient = '';
//       }
//       // Проверка
//       if (ingredientsFood && measureIngredient) {
//         console.log('ifif');

//         arrayIngredientsAndMeasure.push({
//           ingredientsFood, // Ожидал получить только значение, а не свойство: ingredientsFood: ???
//           measureIngredient,
//         });
//       }
//     }
//     // Обновляем состояние arrayIngredientsAndMeasureRandomFood и состояние flagShowRandomFood (для отображения в браузере ингридиентов рандомного блюда и их необходимого колличества):
//     // console.log(arrayIngredientsAndMeasure);
//     setArrayIngredientsAndMeasureRandomFood(arrayIngredientsAndMeasure);
//     setFlagShowRandomFood(false);
//   }

//   setArrayRandomFood([object]);
// };
