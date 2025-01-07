import React, { useState, useEffect } from 'react';
//
import './CSS/PageRandomFood.css';
//
import CardRandomFoodApplication from './CardRandomFoodApplication';
import ShowIngredientsAndMeasureFood from './ShowIngredientsAndMeasureFood';
import ShowInstructionToCookieFood from './ShowInstructionToCookieFood';

const PageRandomFood = ({
  arrayRandomFood,
  setArrayRandomFood,
  arrayIngredientsAndMeasureRandomFood,
  setArrayIngredientsAndMeasureRandomFood,

  arrayFavoriteFoods,
  setArrayFavoriteFoods,
  // Flags !!! Flags !!! Flags !!!
  flagShowRandomFood,
  setFlagShowRandomFood,

  flagAddToFavorites,
  setFlagAddToFavorites,

  flagShowInstructionRandomFood,
  setFlagShowInstructionRandomFood,

  flagChoiceButton,
  setFlagChoiceButton,
  //
  setFlagRandomFood,
  //
}) => {
  //
  //
  // Create array ingredients and measure !!! Create array ingredients and measure !!!
  // const showIngredientsAndMeasere = () => {
  //   console.log('CREATE ARRAY: INGREDIENTS-MEASURE');

  //   // Проверяем, что обьект загрузился:
  //   if (arrayRandomFood) {
  //     // Создаём массив ингредиентов:
  //     let ingredientsFood;
  //     let measureIngredient;
  //     const arrayIngredientsAndMeasure = [];
  //     for (let i = 1; i < 20; i++) {
  //       // Проверяем, что ингредиент в данной позиции существует:
  //       if (arrayRandomFood[0][`strIngredient${i}`]) {
  //         ingredientsFood = arrayRandomFood[0][`strIngredient${i}`];
  //       }
  //       // Проверяем, что единица измерения в данной позиции существует:
  //       if (
  //         arrayRandomFood[0][`strMeasure${i}`] &&
  //         arrayRandomFood[0][`strMeasure${i}`] !== ' '
  //       ) {
  //         measureIngredient = arrayRandomFood[0][`strMeasure${i}`];
  //       } else {
  //         ingredientsFood = '';
  //         measureIngredient = '';
  //       }
  //       // Проверка
  //       if (ingredientsFood && measureIngredient) {
  //         arrayIngredientsAndMeasure.push({
  //           ingredientsFood, // Ожидал получить только значение, а не свойство: ingredientsFood: '...'
  //           measureIngredient,
  //         });
  //       }
  //     }
  //     // Обновляем состояние arrayIngredientsAndMeasureRandomFood и состояние flagShowRandomFood (для отображения в браузере ингридиентов рандомного блюда и их необходимого колличества):
  //     console.log('arrayIngredientsAndMeasure = ', arrayIngredientsAndMeasure);
  //     setArrayIngredientsAndMeasureRandomFood(arrayIngredientsAndMeasure);
  //     setFlagShowRandomFood(false);
  //   }
  // };

  // Render !!! Render !!! Render !!! Render !!! Render !!! Render !!! Render !!! Render !!!
  // Условный рендер + использован тернарный оператор !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // console.log('arrayRandomFood =', arrayRandomFood);
  console.log('flagShowRandomFood= ', flagShowRandomFood);
  console.log('flagShowInstructionRandomFood', flagShowInstructionRandomFood);

  return flagShowRandomFood && !flagShowInstructionRandomFood ? (
    <main>
      <div className='container'>
        <button
          onClick={() => {
            setFlagRandomFood([]);
          }}
          className='button-show-random-food'
        >
          <span className='title-button-show'>Click for show random food.</span>
        </button>
        <CardRandomFoodApplication
          // showIngredientsAndMeasere={showIngredientsAndMeasere}
          //
          arrayRandomFood={arrayRandomFood}
          setArrayRandomFood={setArrayRandomFood}
          arrayFavoriteFoods={arrayFavoriteFoods}
          setArrayIngredientsAndMeasureRandomFood={
            setArrayIngredientsAndMeasureRandomFood
          }
          setFlagShowRandomFood={setFlagShowRandomFood}
          //
          setArrayFavoriteFoods={setArrayFavoriteFoods}
          flagAddToFavorites={flagAddToFavorites}
          setFlagAddToFavorites={setFlagAddToFavorites}
          //
          setFlagShowInstructionRandomFood={setFlagShowInstructionRandomFood}
          //
          setFlagChoiceButton={setFlagChoiceButton}
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

/*
  <main>
      <div className='container'>
        <div className='wrapper-list-ingredients-measure'>
          <h1 className='title-list-ingredients-measures'>
            List ingredients and measures:
          </h1>
          <div className='wrapper-ingredients-measures'>
            <div className='wrapper-titles-ingredients-measures'>
              <h2 className='title-ingredients-food'>List ingredients:</h2>
              <h2 className='title-measures-food'>List measures:</h2>
            </div>
            <ul className='wrapper-list-ingredients-measures-food'>
              {arrayIngredientsAndMeasureRandomFood.map((object, index) => (
                <li key={index} className='wrapper-item-ingredient-measure'>
                  <span className='content-ingredient-food'>
                    {object.ingredientsFood}
                  </span>
                  <span className='separator-content-ingredient-measure'>
                    ..............................................
                  </span>
                  <span className='content-measure-food'>
                    {object.measureIngredient}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className='wrapper-buttons-show-random-food-show-instruction'>
            <ButtonReturnShowFood
              setFlagShowRandomFood={setFlagShowRandomFood}
              setFlagShowInstructionRandomFood={
                setFlagShowInstructionRandomFood
              }
            />
            <ButtonShowInstructionsFood
              setFlagShowInstructionRandomFood={
                setFlagShowInstructionRandomFood
              }
              flagChoiceButton={flagChoiceButton}
              setFlagChoiceButton={setFlagChoiceButton}
              setFlagShowRandomFood={setFlagShowRandomFood}
            />
          </div>
        </div>
      </div>
</main>
    */
