const recipes = [
    { name: "Spaghetti Carbonara", image: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg", ingredients: ["Spaghetti", "Eggs", "Parmesan", "Bacon"] },
    { name: "Pancakes", image: "https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg", ingredients: ["Flour", "Milk", "Eggs", "Sugar", "Baking Powder"] },
    { name: "Chicken Curry", image: "https://www.themealdb.com/images/media/meals/1520084413.jpg", ingredients: ["Chicken", "Onion", "Tomato", "Spices"] },
    { name: "Beef Tacos", image: "https://www.themealdb.com/images/media/meals/qtuwxu1468233098.jpg", ingredients: ["Beef", "Taco Shells", "Lettuce", "Cheese", "Tomato"] },
    { name: "Margherita Pizza", image: "https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg", ingredients: ["Pizza Dough", "Tomato Sauce", "Mozzarella", "Basil"] },
    { name: "Caesar Salad", image: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg", ingredients: ["Lettuce", "Croutons", "Parmesan", "Caesar Dressing"] },
    { name: "Fried Rice", image: "https://www.themealdb.com/images/media/meals/1529444830.jpg", ingredients: ["Rice", "Eggs", "Vegetables", "Soy Sauce"] },
    { name: "Lasagna", image: "https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg", ingredients: ["Lasagna Noodles", "Tomato Sauce", "Cheese", "Ground Beef"] },
    { name: "Grilled Cheese Sandwich", image: "https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg", ingredients: ["Bread", "Cheese", "Butter"] },
    { name: "Chocolate Cake", image: "https://www.themealdb.com/images/media/meals/tqtywx1468317395.jpg", ingredients: ["Flour", "Cocoa Powder", "Sugar", "Eggs", "Butter"] },
    { name: "Chicken Alfredo", image: "https://www.themealdb.com/images/media/meals/syqypv1486981727.jpg", ingredients: ["Fettuccine", "Chicken", "Cream", "Parmesan"] },
    { name: "Vegetable Soup", image: "https://www.themealdb.com/images/media/meals/uttupv1511855737.jpg", ingredients: ["Carrot", "Potato", "Celery", "Onion", "Broth"] },
    { name: "Shrimp Scampi", image: "https://www.themealdb.com/images/media/meals/vptxvt1487325699.jpg", ingredients: ["Shrimp", "Garlic", "Butter", "Lemon", "Pasta"] },
    { name: "Egg Fried Noodles", image: "https://www.themealdb.com/images/media/meals/1529444830.jpg", ingredients: ["Noodles", "Eggs", "Soy Sauce", "Vegetables"] },
    { name: "Greek Salad", image: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg", ingredients: ["Tomatoes", "Cucumber", "Feta", "Olives"] },
    { name: "BBQ Chicken", image: "https://www.themealdb.com/images/media/meals/1520084413.jpg", ingredients: ["Chicken", "BBQ Sauce", "Spices"] },
    { name: "Banana Bread", image: "https://www.themealdb.com/images/media/meals/1548944117.jpg", ingredients: ["Bananas", "Flour", "Sugar", "Eggs", "Butter"] },
    { name: "French Toast", image: "https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg", ingredients: ["Bread", "Eggs", "Milk", "Cinnamon"] },
    { name: "Veggie Burger", image: "https://www.themealdb.com/images/media/meals/yrqqrs1511791277.jpg", ingredients: ["Burger Bun", "Veggie Patty", "Lettuce", "Tomato", "Cheese"] },
    { name: "Tuna Salad", image: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg", ingredients: ["Tuna", "Lettuce", "Tomato", "Mayonnaise"] },
    { name: "Mac and Cheese", image: "https://www.themealdb.com/images/media/meals/1529444830.jpg", ingredients: ["Macaroni", "Cheese", "Milk", "Butter"] },
    { name: "Stuffed Peppers", image: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg", ingredients: ["Bell Peppers", "Rice", "Ground Beef", "Tomato Sauce"] },
    { name: "Pasta Primavera", image: "https://www.themealdb.com/images/media/meals/syqypv1486981727.jpg", ingredients: ["Pasta", "Vegetables", "Olive Oil", "Parmesan"] },
    { name: "Chicken Stir Fry", image: "https://www.themealdb.com/images/media/meals/1520084413.jpg", ingredients: ["Chicken", "Vegetables", "Soy Sauce", "Garlic"] },
    { name: "Omelette", image: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg", ingredients: ["Eggs", "Cheese", "Vegetables"] },
    { name: "Grilled Salmon", image: "https://www.themealdb.com/images/media/meals/1529444830.jpg", ingredients: ["Salmon", "Lemon", "Herbs"] },
    { name: "Shepherd's Pie", image: "https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg", ingredients: ["Potatoes", "Ground Beef", "Carrots", "Peas"] },
    { name: "Caprese Salad", image: "https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg", ingredients: ["Tomatoes", "Mozzarella", "Basil", "Olive Oil"] },
    { name: "Chocolate Chip Cookies", image: "https://www.themealdb.com/images/media/meals/tqtywx1468317395.jpg", ingredients: ["Flour", "Sugar", "Butter", "Chocolate Chips", "Eggs"] },
    { name: "Garlic Bread", image: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg", ingredients: ["Bread", "Garlic", "Butter", "Parsley"] }
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
;
