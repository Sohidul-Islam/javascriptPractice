const buttonAddon2 = document.getElementById('button-addon2');
const searchBar = document.getElementById('search-bar');
console.log(buttonAddon2);

buttonAddon2.addEventListener('click', () => {
    const mealDetailsBox = document.getElementById('meals-details');
    mealDetailsBox.innerHTML = "";
    const value = searchBar.value
    SearchFood(value);
    // console.log(searchBar.value);

})
const SearchFood = async (meal) => {
    const div = document.getElementById("meals-section");
    while (div.firstChild) {
        div.removeChild(div.firstChild)
    }
    let url = `https://themealdb.com/api/json/v1/1/search.php?s=${meal}`
    const res = await fetch(url)
    const data = await res.json()
    displayMeals(data.meals)
    // fetch(url)
    //     .then(response => response.json())
    //     .then(data => displayMeals(data.meals))
}

const displayMeals = (data) => {
    const mealsSection = document.getElementById('meals-section')
    console.log("meal data; ", data);

    let ingredients = '<ul>'
    // < ul >
    // <li></li>
    //     </ul >
    if (data !== null)
        for (const meal of data) {

            for (let i = 1; i <= 20; i++) {
                let ingred = 'strIngredient' + i

                ingredients += `<li>${meal.ingred}</li>`
                console.log(ingred);
            }
            ingredients += '</ul>'
            console.log(ingredients);
            const mealCard = document.createElement('div')
            mealCard.className = 'col'
            mealCard.style.cursor = "pointer"
            mealCard.innerHTML = `<div onclick="loadOneMeal(${meal.idMeal})" class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions}</p>
        </div>
    </div>`
            mealsSection.appendChild(mealCard);
        }
    else {
        // const mealCard = document.createElement('div')
        mealsSection.innerHTML = "<h3>Not found</h3>"
    }
}

const loadOneMeal = async (mealId) => {
    console.log(mealId);
    let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    const res = await fetch(url);
    const data = await res.json();
    displayOneMeals(data.meals[0])
    // fetch(url)
    //     .then(response => response.json())
    //     .then(data => displayOneMeals(data.meals[0]))
}

const displayOneMeals = (meal) => {
    console.log(meal);
    const mealDetailsBox = document.getElementById('meals-details');
    mealDetailsBox.innerHTML = `
    <div class="card" style="width: 18rem;">
  <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">${meal.strInstructions.slice(0, 150) + '...'}</p>
    <h4>Ingredients:</h4>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${meal.strIngredient1}</li>
    <li class="list-group-item">${meal.strIngredient2}</li>
    <li class="list-group-item">${meal.strIngredient3}</li>
    <li class="list-group-item">${meal.strIngredient4}</li>
    <li class="list-group-item">${meal.strIngredient5}</li>
    <li class="list-group-item">${meal.strIngredient6}</li>
    <li class="list-group-item">${meal.strIngredient7}</li>
    <li class="list-group-item">${meal.strIngredient8}</li>
    <li class="list-group-item">${meal.strIngredient9}</li>
    <li class="list-group-item">${meal.strIngredient10}</li>
  </ul>
  <h4>Measurement:</h4>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${meal.strMeasure1}</li>
    <li class="list-group-item">${meal.strMeasure2}</li>
    <li class="list-group-item">${meal.strMeasure3}</li>
    <li class="list-group-item">${meal.strMeasure4}</li>
    <li class="list-group-item">${meal.strMeasure5}</li>
    <li class="list-group-item">${meal.strMeasure6}</li>
    <li class="list-group-item">${meal.strMeasure7}</li>
    <li class="list-group-item">${meal.strMeasure8}</li>
    <li class="list-group-item">${meal.strMeasure9}</li>
    <li class="list-group-item">${meal.strMeasure10}</li>
  </ul>
  <div class="card-body">
    <a href="${meal.strYoutube}" class="card-link">YouTube</a>
    <strong class="text-danger">${meal.strTags}</strong>
  </div>
</div>`
}