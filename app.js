
const searchMeal = () => {
  const searchText = document.getElementById('search-box').value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  console.log(url);
  fetch(url)
    .then(res => res.json())
    .then(data => displayMeal(data.meals));


}

const displayMeal = meals => {

  const mealItem = document.getElementById('food-item');
  meals.forEach(meal => {
    const mealDiv = document.createElement('div');
    mealDiv.className = 'col-md-3 food-meal p-2 mt-5';
    mealDiv.innerHTML = `
          <div class="card" onclick="getMealIngredients(${meal.idMeal})">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
            </div>
          </div>
        `;
    mealItem.appendChild(mealDiv);

  });
}

const getMealIngredients = name => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${name}`;
  console.log(url);
  fetch(url)
    .then(res => res.json())
    .then(data => displayMealIngredients(data.meals[0]));
}


const displayMealIngredients = meals => {
console.log(meals);
  const ingredientsDiv = document.getElementById('meal-ingredients');
  ingredientsDiv.className = 'col-md-3 food-meal p-2 mt-5';
  ingredientsDiv.innerHTML = `
  <div class="card">
  
  <img src="${meals.strMealThumb}" class="card-img-top" alt="...">
  <h1>${meals.strMeal}</h1>
  
      <ul>
               <li>${meals.strIngredient1}</li>
               <li>${meals.strIngredient2}</li>
               <li>${meals.strIngredient3}</li>
               <li>${meals.strIngredient4}</li>
               <li>${meals.strIngredient5}</li>
               <li>${meals.strIngredient6}</li>
               <li>${meals.strIngredient7}</li>
               <li>${meals.strIngredient8}</li>
               <li>${meals.strIngredient9}</li>
               <li>${meals.strIngredient10}</li>
      </ul>
     </div>
     </div>
      
      
      
      
      `


}
