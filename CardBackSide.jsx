import React, { useState } from 'react';
import iconInFavorites from './IMG/icon-in-favorites.png'; // Путь к изображению иконки для добавления в избранное
import showIngredientsAndMeasere from './showIngredientsAndMeasere'; // Импорт функции для отображения ингредиентов и мер

const CardBackSide = ({
  object,
  arrayRandomFood,
  setArrayRandomFood,
  setArrayIngredientsAndMeasureRandomFood,
  setFlagShowRandomFood,
  //
  setFlagShowInstructionRandomFood,
  setFlagChoiceButton,
  //
  arrayFavoriteFoods,
  setArrayFavoriteFoods,
  //
  arrayAllFoods,
  setArrayAllFoods,
  //
}) => {
  // Инициализация состояния updatedObject. В объекте всегда будет свойство isTrue, которое будет по умолчанию false или задано из объекта.
  const [updatedObject, setUpdatedObject] = useState({
    ...object, // Копирование всех свойств объекта
    isTrue: object.isTrue || false, // Если объект уже имеет свойство isTrue, оставляем его, иначе устанавливаем в false ????????????????????????????????????????????????????????????????????????\
  });

  // Функция для переключения состояния isTrue и обновления данных
  const getToggleIsTrue = () => {
    console.log('object', object);
    //
    // ???????????...!!!!
    //
    // Создаем новый объект с измененным состоянием isTrue ?????????????????????????????????????????
    const newObject = { ...updatedObject, isTrue: !updatedObject.isTrue };
    setUpdatedObject(newObject); // Обновляем состояние updatedObject

    // Если объект помечен как избранный (isTrue === true)
    if (newObject.isTrue) {
      // Добавляем объект в массив избранных блюд
      setArrayFavoriteFoods([...arrayFavoriteFoods, newObject]);

      // Обновляем массив всех блюд, меняем isTrue на true для соответствующего объекта
      const arrayTransformed = arrayAllFoods.map(
        (obj) => (obj.idMeal === object.idMeal ? { ...obj, isTrue: true } : obj) // Изменяем только тот объект, который был обновлен
      );
      setArrayAllFoods(arrayTransformed); // Обновляем список всех блюд
    } else {
      // Иначе удаляем из массива избранных блюд:
      const filteredFavorites = arrayFavoriteFoods.filter(
        (obj) => obj.idMeal !== object.idMeal // Убираем объект из массива избранных
      );
      console.log(filteredFavorites);

      setArrayFavoriteFoods(filteredFavorites); // Обновляем список избранных блюд

      // Обновляем массив всех блюд, меняем isTrue на false для соответствующего объекта
      // console.log(indexArrayFavoriteFoods, indexArrayAllFoods); // ?????????????????????????????? 

      const arrayTransformed = arrayAllFoods.map(
        (obj) =>
          obj.idMeal === object.idMeal ? { ...obj, isTrue: false } : obj // Изменяем только тот объект, который был обновлен
      );
      setArrayAllFoods(arrayTransformed); // Обновляем список всех продуктов
    }
  };

  // Render !!! Render !!! Render !!! Render !!! Render !!! Render !!! Render !!! Render !!!
  return (
    <div className='wrapper-favorite-card wrapper-favorite-card-back wrapper-card-back'>
      {/* Отображение названия блюда */}
      <div className='wrapper-title-name-favorite-fod'>
        <h2 className='title-name-favorite-food'>Name food:</h2>
        <span className='name-favorite-food'>{updatedObject.strMeal}</span>
      </div>

      {/* Изображение блюда */}
      <img
        className='foto-card-favorite-food'
        src={updatedObject.strMealThumb}
        alt='Foto random food.'
      />

      {/* Отображение страны происхождения */}
      <div className='wrapper-title-origin-favorite-food'>
        <p className='title-origin-favorite-food'>
          Country origin of the food:
        </p>
        <span className='title-name-favorite-country'>
          {updatedObject.strArea}
        </span>
      </div>

      {/* Кнопка для отображения ингредиентов и их измерений */}
      <button
        onClick={() => {
          showIngredientsAndMeasere(
            updatedObject,
            arrayRandomFood,
            setArrayRandomFood,
            setArrayIngredientsAndMeasureRandomFood,
            setFlagShowRandomFood
          );
          setFlagShowRandomFood(false);
          setFlagShowInstructionRandomFood(false);
        }}
        className='button-show-ingredients-measure-favorites'
      >
        <span className='content-button-show-ingredients-measure'>
          Click for show ingredients and measure.
        </span>
      </button>

      {/* Кнопка для отображения инструкции по приготовлению */}
      <button
        onClick={() => {
          setFlagShowInstructionRandomFood(true);
          setFlagChoiceButton(false);
        }}
        className='button-show-instructions-favorites'
      >
        <span className='content-button-show-ingredients-measure'>
          Click for show instruction to cook.
        </span>
      </button>

      {/* Блок для добавления/удаления из избранного */}
      <div className='wrapper-favorites-choice'>
        {/* Кнопка для переключения состояния избранного */}
        <button onClick={getToggleIsTrue} className='button-in-favorites'>
          <img
            className='icon-in-favorites'
            src={iconInFavorites}
            alt='icon in favorites.'
          />
        </button>

        {/* Отображение галочки, если блюдо добавлено в избранное */}
        {updatedObject.isTrue ? (
          <span className='icon-add-in-favorites'>✓</span>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default CardBackSide;
