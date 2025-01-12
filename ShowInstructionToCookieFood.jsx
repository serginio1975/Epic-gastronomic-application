import React from 'react';
import './CSS/GetInstructionsRandomFood.css';
import ButtonReturnShowFood from './ButtonReturnShowFood';
import ButtonShowInstructionsFood from './ButtonShowInstructionsFood';

const ShowInstructionToCookieFood = ({
  arrayRandomFood,
  setFlagShowRandomFood,
  setFlagShowInstructionRandomFood,
  flagChoiceButton,
  setFlagChoiceButton,
}) => {
  console.log('instructions to coockie !!!');

  return (
    <main>
      <div className='container'>
        <div className='wrapper-instructions'>
          <div className='wrapper-instructions-randome-food'>
            <h1 className='title-instructions-random-food'>
              Instructions for to coockie the random food:
            </h1>
            {arrayRandomFood.map((object, index) => (
              <p className='content-instructions-random-food' key={index}>
                {object.strInstructions}
              </p>
            ))}
            <div className='wrapper-buttons-show-random-food-show-instruction'>
              <ButtonReturnShowFood
                setFlagShowRandomFood={setFlagShowRandomFood}
                setFlagShowInstructionRandomFood={
                  setFlagShowInstructionRandomFood
                }
                setFlagChoiceButton={setFlagChoiceButton}
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
      </div>
    </main>
  );
};

export default ShowInstructionToCookieFood;
