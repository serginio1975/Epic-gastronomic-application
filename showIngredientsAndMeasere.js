const showIngredientsAndMeasere = (
  object,
  arrayRandomFood,
  setArrayRandomFood,
  setArrayIngredientsAndMeasureRandomFood,
  setFlagShowRandomFood
) => {
  // console.log(setFlagShowRandomFood);
  // console.log('setArrayRandomFood = ', setArrayRandomFood);

  console.log(arrayRandomFood);
  // console.log(arrayIngredientsAndMeasureRandomFood);

  // Проверяем, что обьект загрузился:
  if (arrayRandomFood) {
    console.log('if');

    // Создаём массив ингредиентов:
    let ingredientsFood;
    let measureIngredient;
    const arrayIngredientsAndMeasure = [];
    console.log(arrayIngredientsAndMeasure);

    for (let i = 1; i < 20; i++) {
      // Проверяем, что ингредиент в данной позиции существует:

      if (object[`strIngredient${i}`]) {
        ingredientsFood = object[`strIngredient${i}`];
      }
      // Проверяем, что единица измерения в данной позиции существует:
      if (object[`strMeasure${i}`] && object[`strMeasure${i}`] !== ' ') {
        measureIngredient = object[`strMeasure${i}`];
      } else {
        ingredientsFood = '';
        measureIngredient = '';
      }
      // Проверка
      if (ingredientsFood && measureIngredient) {
        console.log('ifif');

        arrayIngredientsAndMeasure.push({
          ingredientsFood, // Ожидал получить только значение, а не свойство: ingredientsFood: ???
          measureIngredient,
        });
      }
    }
    // Обновляем состояние arrayIngredientsAndMeasureRandomFood и состояние flagShowRandomFood (для отображения в браузере ингридиентов рандомного блюда и их необходимого колличества):
    // console.log(arrayIngredientsAndMeasure);
    setArrayIngredientsAndMeasureRandomFood(arrayIngredientsAndMeasure);
    setFlagShowRandomFood(false);
  }

  setArrayRandomFood([object]);
};
export default showIngredientsAndMeasere;
