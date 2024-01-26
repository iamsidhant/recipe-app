const API_KEY = "";
const recipeListEl = document.getElementById("recipe-list");

function displayRecipes(recipes){
    recipeListEl.innerHTML = "";
    recipes.forEach((recipe) => {
        const recipeItemEl = document.createElement("li");
        recipeItemEl.classList.add("recipe-item");
        const recipeImageEl = document.createElement("img");
        recipeImageEl.src = recipe.image;
        recipeImageEl.alt = "recipe image";

        const recipeTitleEl = document.getElementById("h2");
        recipeTitleEl.innerText = recipe.title;

        recipeIngredientsEl = document.createElement("p");

        const recipeLinkEl = document.createElement("a");
    });
}