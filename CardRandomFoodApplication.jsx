import React from 'react';
import showIngredientsAndMeasere from './showIngredientsAndMeasere';
import iconInFavorites from './IMG/icon-in-favorites.png';
import './CSS/CardFoodApplication.css';

const CardRandomFoodApplication = ({
  arrayRandomFood,
  setArrayRandomFood,
  arrayFavoriteFoods,
  setArrayFavoriteFoods,
  setArrayIngredientsAndMeasureRandomFood,
  setFlagShowRandomFood,
  flagAddToFavorites,
  setFlagChoiceButton,
  setFlagShowInstructionRandomFood,
  setFlagAddToFavorites,
}) => {
  //
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
                arrayRandomFood,
                setArrayRandomFood,
                setArrayIngredientsAndMeasureRandomFood,
                setFlagShowRandomFood
              );
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
            {/* Button add to favorites: */}
            <button
              onClick={() => {
                console.log(arrayFavoriteFoods);
                if (!arrayFavoriteFoods.includes(object)) {
                  setArrayFavoriteFoods([
                    ...arrayFavoriteFoods,
                    arrayRandomFood[0],
                  ]);
                  setFlagAddToFavorites(true); // Появляется галочка !!!
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
            {flagAddToFavorites && (
              <span className='icon-add-in-favorites'>✓</span>
            )}
          </div>
        </div>
      ))}
    </>
  );
};
export default CardRandomFoodApplication;

/*
<>
   Cначала идёт проверка на рендер рандомного блюда: !!!!!!!!!!!!!!!!!!!!!!!!!
      {flagChoiceArrayRandomFavorite && flagShowPageSearch
        ? arrayRandomFood.map((object, index) => (
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
               Button show ingredients and measures: !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
              <button
                onClick={showIngredientsAndMeasere}
                className='button-show-ingredients-measure'
              >
                <span className='content-button-show-ingredients-measure'>
                  Click for show ingredients and measure.
                </span>
              </button>

             Button show instructions to coockie: !!!!!!!!!!!!!!!!!!!!!!!!
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
                 Button add to add favorites: !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                <button
                  onClick={() => {
                    console.log(arrayFavoriteFoods);
                    if (!arrayFavoriteFoods.includes(object)) {
                      setArrayFavoriteFoods([
                        ...arrayFavoriteFoods,
                        arrayRandomFood[0],
                      ]);
                      setFlagAddToFavorites(true); // Появляется галочка !!!
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
                {flagAddToFavorites && (
                  <span className='icon-add-in-favorites'>✓</span>
                )}
              </div>
            </div>
          ))
        : !flagShowPageSearch
        ? arrayFavoriteFoods.map((object, index) => (
            <div key={index} className='wrapper-favorite-card-global'>
              <div className='wrapper-card-inner'>
                 Card front !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                <div className='wrapper-card-front'>
                  <div className='wrapper-favorite-card'>
                    <div className='wrapper-title-name-favorite-fod'>
                      <h2 className='title-name-favorite-food'>Name food:</h2>
                      <span className='name-favorite-food'>
                        {object.strMeal}
                      </span>
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
                Card front !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 

                card Back !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
                <div
                  key={index}
                  className='wrapper-favorite-card wrapper-favorite-card-back  wrapper-card-back'
                >
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
                    <span className='title-name-favorite-country'>
                      {object.strArea}
                    </span>
                  </div>
                  Button show ingredients and measures: !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                  <button
                    onClick={() => {
                      showIngredientsAndMeasere(object);
                      console.log('object = ', object);
                    }}
                    className='button-show-ingredients-measure-favorites'
                  >
                    <span className='content-button-show-ingredients-measure'>
                      Click for show ingredients and measure.
                    </span>
                  </button>
                   Button show instructions to coockie: !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                  <button
                    onClick={() => {
                      setFlagShowInstructionRandomFood(true);
                      setFlagChoiceButton(false);
                      showIngredientsAndMeasere(object);
                    }}
                    className='button-show-instructions-favorites'
                  >
                    <span className='content-button-show-ingredients-measure'>
                      Click for show instruction to cook.
                    </span>
                  </button>
                  <div className='wrapper-favorites-choice'>
                    Button add to add favorites: !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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
                        onClick={(event) => {
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
                card back !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
              </div>
            </div>
          ))
        : flagShowPageSearch &&
          arrayAllFoods.map((object, index) => (
            <div key={index} className='wrapper-favorite-card-global'>
              <div className='wrapper-card-inner'>
                 Card front !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
                <div className='wrapper-card-front'>
                  <div className='wrapper-favorite-card'>
                    <div className='wrapper-title-name-favorite-fod'>
                      <h2 className='title-name-favorite-food'>Name food:</h2>
                      <span className='name-favorite-food'>
                        {object.strMeal}
                      </span>
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
                Card front !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 

                Card back !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
                <div
                  key={index}
                  className='wrapper-favorite-card wrapper-favorite-card-back  wrapper-card-back'
                >
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
                    <span className='title-name-favorite-country'>
                      {object.strArea}
                    </span>
                  </div>
                  Button show ingredients and measures: !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                  <button
                    onClick={() => {
                      showIngredientsAndMeasere(object);
                      console.log('object = ', object);
                    }}
                    className='button-show-ingredients-measure-favorites'
                  >
                    <span className='content-button-show-ingredients-measure'>
                      Click for show ingredients and measure.
                    </span>
                  </button>
                  Button show instructions to coockie: !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                  <button
                    onClick={() => {
                      setFlagShowInstructionRandomFood(true);
                      setFlagChoiceButton(false);
                      showIngredientsAndMeasere(object);
                    }}
                    className='button-show-instructions-favorites'
                  >
                    <span className='content-button-show-ingredients-measure'>
                      Click for show instruction to cook.
                    </span>
                  </button>
                  <div className='wrapper-favorites-choice'>
                    Button add to add favorites: !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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
                        onClick={(event) => {
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
                Card back !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
              </div>
            </div>
          ))}
    </>*/
