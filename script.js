const recipes = [
    {
        name: "Spaghetti Carbonara",
        image: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
        ingredients: ["Spaghetti", "Eggs", "Parmesan", "Bacon"]
    },
    {
        name: "Pancakes",
        image: "https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg",
        ingredients: ["Flour", "Milk", "Eggs", "Sugar", "Baking Powder"]
    },
    {
        name: "Chicken Curry",
        image: "https://www.themealdb.com/images/media/meals/1520084413.jpg",
        ingredients: ["Chicken", "Onion", "Tomato", "Spices"]
    }
];

const container = document.getElementById("recipe-container");
const searchInput = document.getElementById("search");

// Function to display recipes
function displayRecipes(recipesToDisplay) {
    container.innerHTML = "";
    recipesToDisplay.forEach(recipe => {
        const card = document.createElement("div");
        card.classList.add("recipe-card");
        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}">
            <h3>${recipe.name}</h3>
            <p>Ingredients: ${recipe.ingredients.join(", ")}</p>
        `;
        container.appendChild(card);
    });
}

// Filter recipes based on search
searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filtered = recipes.filter(r => r.name.toLowerCase().includes(query));
    displayRecipes(filtered);
});

// Initial display
displayRecipes(recipes);
