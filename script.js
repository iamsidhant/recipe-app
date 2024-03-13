const API_KEY = "a5d51c85admshb5dbb56d31ef4a6p1fa730jsn3f49a4d870d0";
const recipeListEl = document.getElementById("recipe-list");

function displayRecipes(recipes) {
    recipeListEl.innerHTML = "";
    recipes.forEach((recipe) => {
        const recipeItemEl = document.createElement("li");
        recipeItemEl.classList.add("recipe-item");
        recipeImageEl = document.createElement("img");
        recipeImageEl.src = recipe.image;
        recipeImageEl.alt = "recipe image";

        recipeTitleEl = document.createElement("h2");
        recipeTitleEl.innerText = recipe.title;

        recipeIngredientsEl = document.createElement("p");
        recipeIngredientsEl.innerHTML = `
        <strong>Ingredients: </strong> ${recipe.extendedIngredients
                .map((ingredient) => ingredient.original)
                .join(", ")}
        `;

        const recipeLinkEl = document.createElement("a");
        recipeLinkEl.href = recipe.sourceUrl;
        recipeLinkEl.innerText = "View Recipe";

        recipeItemEl.appendChild(recipeImageEl);
        recipeItemEl.appendChild(recipeTitleEl);
        recipeItemEl.appendChild(recipeIngredientsEl);
        recipeItemEl.appendChild(recipeLinkEl);
        recipeListEl.appendChild(recipeItemEl);
    });
}

async function getRecipes(){
    try {
        const response = await fetch(
            `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=vegetarian%2Cdessert&number=10&apiKey=${API_KEY}`
        );
    
        const data = await response.json();
    
        return data.recipes;
        
    } catch (error) {
        throw error;
    }
}

async function init(){
    const recipes = await getRecipes();

    displayRecipes(recipes);
}

init();