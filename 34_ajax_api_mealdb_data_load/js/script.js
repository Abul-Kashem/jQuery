$(document).ready(function () {



  const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    $.ajax({
      url: url,
      method: 'GET',
      dataType: 'json',
      success: function (data) {
        displayMeals(data.meals);
      }
    });
  };


  const displayMeals = (meals) => {
    const mealsContainer = $('#meal-container');
    mealsContainer.empty();

    const detailContainer = $('#detail-container');
    detailContainer.empty();

    // $.each(meals, function (index, meal) {
    //   const mealDiv = $('<div>').addClass('col');
    //   mealDiv.html(`
    //   <div class="card">
    //     <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    //     <div class="card-body">
    //       <h5 class="card-title">${meal.strMeal}</h5>
    //       <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
    //       <a href="#" onclick="loadMealDetail(${meal.idMeal})" class="btn btn-primary">More Details</a>
    //     </div>
    //   </div>
    // `);

    //   mealsContainer.append(mealDiv);
    // });

    $.each(meals, function (index, meal) {
      const card = $('<div>').addClass('card');
      const image = $('<img>').attr('src', meal.strMealThumb).addClass('card-img-top').attr('alt', '...');
      const cardBody = $('<div>').addClass('card-body');
      const cardTitle = $('<h5>').addClass('card-title').text(meal.strMeal);
      const cardText = $('<p>').addClass('card-text').text(meal.strInstructions.slice(0, 200));
      const moreDetailsLink = $('<a>').attr('href', '#').addClass('btn btn-primary').text('More Details').click(function () {
        loadMealDetail(meal.idMeal);
      });

      cardBody.append(cardTitle, cardText, moreDetailsLink);
      card.append(image, cardBody);
      mealsContainer.append(card);
    });
  };

  function loadMealDetail(idMeal) {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    $.ajax({
      url: url,
      method: 'GET',
      dataType: 'json',
      success: function (data) {
        displayMealDetails(data.meals[0]);
      }
    });
  }


  // const loadMealDetail = (idMeal) => {
  //   const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  //   $.ajax({
  //     url: url,
  //     method: 'GET',
  //     dataType: 'json',
  //     success: function (data) {
  //       displayMealDetails(data.meals[0]);
  //     }
  //   });
  // };

  const displayMealDetails = (meal) => {
    const detailContainer = $('#detail-container');
    detailContainer.empty();
    const mealDiv = $('<div>').addClass('card');
    mealDiv.html(`
    <img src="${meal.strMealThumb}" class="card-img-top img-fluid" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions}</p>
    </div>
  `);
    detailContainer.append(mealDiv);
  };

  const searchFood = () => {
    const searchFood = $('#search-food');
    const searchText = searchFood.val();
    loadMeals(searchText);
    searchFood.val('');
  };
  $('#search-food-btn').click(function () {
    searchFood();
  });


  loadMeals('meat');
});




