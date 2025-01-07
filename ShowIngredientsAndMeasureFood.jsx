import React from 'react';
import ButtonReturnShowFood from './ButtonReturnShowFood';
import ButtonShowInstructionsFood from './ButtonShowInstructionsFood';

const ShowIngredientsAndMeasureFood = ({
  arrayIngredientsAndMeasureRandomFood,
  setFlagShowRandomFood,
  setFlagShowInstructionRandomFood,
  flagChoiceButton,
  setFlagChoiceButton,
}) => {
  return (
    <>
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
    </>
  );
};
export default ShowIngredientsAndMeasureFood;
