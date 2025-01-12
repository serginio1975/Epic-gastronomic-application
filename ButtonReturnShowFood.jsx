import React from 'react';
import './CSS/ButtonsReturnShowFood&ShowInstructionsFood.css';

const ButtonReturnShowFood = ({
  setFlagShowRandomFood,
  setFlagShowInstructionRandomFood,
}) => {
  return (
    <button
      onClick={() => {
        setFlagShowRandomFood(true);
        setFlagShowInstructionRandomFood(false);
      }}
      className='button-return-random-food'
    >
      Click for show a randome food !!!
    </button>
  );
};

export default ButtonReturnShowFood;
