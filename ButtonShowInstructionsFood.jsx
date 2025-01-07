import React, { useState } from 'react';
import './CSS/ButtonsReturnShowFood&ShowInstructionsFood.css';

const ButtonShowInstructionsFood = ({
  setFlagShowInstructionRandomFood,
  // flagShowInstructionRandomFood,
  setFlagShowRandomFood,
  flagChoiceButton,
  setFlagChoiceButton,
}) => {
  // console.log('setFlagShowRandomFood = ', setFlagShowRandomFood);

  return flagChoiceButton ? (
    <button
      onClick={() => {
        setFlagShowInstructionRandomFood(true);
        setFlagChoiceButton(false);
        console.log(flagChoiceButton);
      }}
      className='button-show-instrucion-random-food'
    >
      Click for show instruction to cock !!!
    </button>
  ) : (
    <button
      onClick={() => {
        setFlagChoiceButton(true);
        setFlagShowInstructionRandomFood(false);
        setFlagShowRandomFood(false);

        console.log('Button-2');
      }}
      className='button-show-instrucion-random-food'
    >
      Click for show ingredients and measure!!!
    </button>
  );
};

export default ButtonShowInstructionsFood;
