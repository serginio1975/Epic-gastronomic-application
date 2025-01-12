// Нужно создать гастрономическое приложение В этом приложение должно быть:
// Главное меню (навигация):
// Должно быть доступно на всех страницах и содержать ссылки:
// "Поиск" - ведет на страницу поиска рецептов.
// "Случайное блюдо" - ведет на страницу с генерацией случайного блюда.
// "Избранное" - ведет на страницу, где отображаются сохраненные блюда.

// 1. Страница "Поиск"
// Функциональность:
// Поле ввода для поиска рецептов:
// Пользователь вводит ключевое слово для поиска.
// По нажатию кнопки "Найти" отправляется запрос к API.
// После чего должен отображаться
// список блюд, соответствующих запросу(например ищете по названию блюда).
// Каждое блюдо представляется в виде карточки:
// Название блюда.
// Изображение блюда.
// Инстуркцию к приготовлению блюда
// Кнопка "Добавить в избранное".
// Если результат отсутствует:
// Показать сообщение: "Ничего не найдено по вашему запросу."

// Страница "Случайное блюдо" (/random)
// Функциональность:
// При загрузке страницы автоматически загружать данные случайного блюда из API.
// Отображение карточки блюда:
// Название блюда.
// Изображение блюда.
// Ингредиенты и меры.
// Инструкция приготовления.
// Кнопка "Добавить в избранное".
// Кнопка "Получить другое случайное блюдо":(По нажатию отправляет новый запрос и обновляет карточку.)

// Страница "Избранное" (/favorites)
// Функциональность:
// Получение сохраненных рецептов из localStorage.
// Отображение списка избранных рецептов в виде карточек.
// Карточка блюда:
// Название блюда.
// Изображение блюда.
// Кнопка "Удалить из избранного".
// Если избранные рецепты отсутствуют:
// Показать сообщение: "У вас пока нет избранных блюд."

// API: https://www.themealdb.com/api/json/v1/1/random.php и search.php?s=

import React, { useState, useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import NavigationApplication from './NavigationApplication';
import PageHome from './PageHome';
import PageSearchFoods from './PageSearchFoods';
import PageRandomFood from './PageRandomFood';
import PageFavoritesFoods from './PageFavoritesFoods';
import PageError from './PageError';
import HeaderApplication from './HeaderApplication';
//
import './CSS/EpicGastronomicApplication.css';
//
import fotoRestaurant from './IMG/foto-restaurant.jpeg';
import FooterApplication from './FooterApplication';

const EpicGastronomicApplication = () => {
  // console.log('Render global !!!');
  // URLS:
  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s';
  const urlRandom = 'https://www.themealdb.com/api/json/v1/1/random.php';

  // ARRAYS:
  const [arrayRandomFood, setArrayRandomFood] = useState([]);
  const [arrayAllFoods, setArrayAllFoods] = useState([]);
  const [arrayFavoriteFoods, setArrayFavoriteFoods] = useState([]);
  const [
    arrayIngredientsAndMeasureRandomFood,
    setArrayIngredientsAndMeasureRandomFood,
  ] = useState([]);

  // FLAGS:
  const [flagRandomFood, setFlagRandomFood] = useState(false);
  const [flagShowRandomFood, setFlagShowRandomFood] = useState(true);
  const [flagShowInstructionRandomFood, setFlagShowInstructionRandomFood] =
    useState(false);
  const [flagAddToFavorites, setFlagAddToFavorites] = useState(false);
  const [flagChoiceArrayRandomFavorite, setFlagChoiceArrayRandomFavorite] =
    useState(false); // ##################################??????????????????????????????????????????
  const [flagChoiceButton, setFlagChoiceButton] = useState(true);
  const [flagShowIconAddToFavorites, setFlagShowIconAddToFavorites] =
    useState(false);

  // Get arrayRandomFood
  // Получаем данные при первом рендере, и затем при каждом изменении flagRandomFood !!!!!!!!!!!!!!!
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(urlRandom);
        const objectData = await response.json();
        const { meals: arrayData } = objectData;
        setArrayRandomFood(arrayData);
      } catch {
        console.error('Error !!!'); //
      }
    };
    getData();
  }, [flagRandomFood]);

  // Get arrayAllFoods:
  useEffect(() => {
    const getData = async () => {
      try {
        const responce = await fetch(url);
        const objectData = await responce.json();
        const { meals: arrayData } = objectData;
        setArrayAllFoods(arrayData);
      } catch {
        console.error('Error !!!');
      }
    };
    getData();
  }, []);

  return (
    <div
      className='wrapper-epic-gastronomic-application'
      //   style={{ backgroundImage: `url(${fotoRestaurant})` }}
    >
      <Router>
        <HeaderApplication />
        {/* <NavigationApplication /> */}
        <Routes>
          <Route path='/' element={<PageHome />} />
          <Route
            path='search'
            element={
              <PageSearchFoods
                arrayFavoriteFoods={arrayFavoriteFoods}
                setArrayFavoriteFoods={setArrayFavoriteFoods}
                arrayRandomFood={arrayRandomFood}
                setArrayRandomFood={setArrayRandomFood}
                arrayAllFoods={arrayAllFoods}
                setArrayAllFoods={setArrayAllFoods}
                flagAddToFavorites={flagAddToFavorites}
                setFlagAddToFavorites={setFlagAddToFavorites}
                //
                flagChoiceArrayRandomFavorite={flagChoiceArrayRandomFavorite}
                setFlagChoiceArrayRandomFavorite={
                  setFlagChoiceArrayRandomFavorite
                }
                //
                flagShowInstructionRandomFood={flagShowInstructionRandomFood}
                setFlagShowInstructionRandomFood={
                  setFlagShowInstructionRandomFood
                }
                flagShowRandomFood={flagShowRandomFood}
                setFlagShowRandomFood={setFlagShowRandomFood}
                //
                flagChoiceButton={flagChoiceButton}
                setFlagChoiceButton={setFlagChoiceButton}
                //
                arrayIngredientsAndMeasureRandomFood={
                  arrayIngredientsAndMeasureRandomFood
                }
                setArrayIngredientsAndMeasureRandomFood={
                  setArrayIngredientsAndMeasureRandomFood
                }
              />
            }
          />
          <Route
            path='random'
            element={
              <PageRandomFood
                arrayAllFoods={arrayAllFoods}
                setArrayAllFoods={setArrayAllFoods}
                arrayRandomFood={arrayRandomFood}
                setArrayRandomFood={setArrayRandomFood}
                arrayIngredientsAndMeasureRandomFood={
                  arrayIngredientsAndMeasureRandomFood
                }
                setArrayIngredientsAndMeasureRandomFood={
                  setArrayIngredientsAndMeasureRandomFood
                }
                flagShowRandomFood={flagShowRandomFood}
                flagShowInstructionRandomFood={flagShowInstructionRandomFood}
                setFlagShowInstructionRandomFood={
                  setFlagShowInstructionRandomFood
                }
                flagAddToFavorites={flagAddToFavorites}
                setFlagRandomFood={setFlagRandomFood}
                setFlagShowRandomFood={setFlagShowRandomFood}
                setFlagAddToFavorites={setFlagAddToFavorites}
                arrayFavoriteFoods={arrayFavoriteFoods}
                setArrayFavoriteFoods={setArrayFavoriteFoods}
                flagChoiceArrayRandomFavorite={flagChoiceArrayRandomFavorite}
                setFlagChoiceArrayRandomFavorite={
                  setFlagChoiceArrayRandomFavorite
                }
                flagChoiceButton={flagChoiceButton}
                setFlagChoiceButton={setFlagChoiceButton}
                //
                flagShowIconAddToFavorites={flagShowIconAddToFavorites}
                setFlagShowIconAddToFavorites={setFlagShowIconAddToFavorites}
              />
            }
          />
          <Route
            path='favorites'
            element={
              <PageFavoritesFoods
                arrayAllFoods={arrayAllFoods}
                arrayFavoriteFoods={arrayFavoriteFoods}
                arrayRandomFood={arrayRandomFood}
                setArrayRandomFood={setArrayRandomFood}
                flagAddToFavorites={flagAddToFavorites}
                setFlagAddToFavorites={setFlagAddToFavorites}
                flagChoiceArrayRandomFavorite={flagChoiceArrayRandomFavorite}
                setFlagChoiceArrayRandomFavorite={
                  setFlagChoiceArrayRandomFavorite
                }
                setArrayFavoriteFoods={setArrayFavoriteFoods}
                flagShowInstructionRandomFood={flagShowInstructionRandomFood}
                setFlagShowInstructionRandomFood={
                  setFlagShowInstructionRandomFood
                }
                flagShowRandomFood={flagShowRandomFood}
                setFlagShowRandomFood={setFlagShowRandomFood}
                //
                flagChoiceButton={flagChoiceButton}
                setFlagChoiceButton={setFlagChoiceButton}
                //
                arrayIngredientsAndMeasureRandomFood={
                  arrayIngredientsAndMeasureRandomFood
                }
                setArrayIngredientsAndMeasureRandomFood={
                  setArrayIngredientsAndMeasureRandomFood
                }
                setArrayAllFoods={setArrayAllFoods}
              />
            }
          />
          <Route path='*' element={<PageError />} />
        </Routes>
        <FooterApplication />
      </Router>
    </div>
  );
};
export default EpicGastronomicApplication;
