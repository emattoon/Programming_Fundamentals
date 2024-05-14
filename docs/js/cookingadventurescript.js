//Function to randomly select ingredient
function getRandomIngredient() {
    let ingredients = ["Tomato", "Onion", "Chicken", "Rice"];
    let randomIndex = Math.floor(Math.random() * ingredients.length);
    return ingredients[randomIndex];
}

//Function to explore/collect ingredients
function exploreAndCollect() {
    inventory[inventory.length] = getRandomIngredient();
    alert("You found " + inventory[inventory.length - 1] + "!");
}

//Function to display items in inventory
function viewInventory() {
    let inventoryText;
    if (inventory.length === 0) {
        inventoryText = "Your inventory is empty! Explore to collect ingredients.";
    } else {
        inventoryText = "Inventory:\n";
        for (let i = 0; i < inventory.length; i++) {
          inventoryText += "- " + inventory[i] + "\n";
        }
    }
    alert(inventoryText);
}

// Function to 'cook' a dish
function cookDish() {
    if (inventory.length === 0) {
      alert("Your inventory is empty! Explore to collect ingredients.");
      return;
    }
    
    let ingredientIndex = Math.floor(Math.random() * inventory.length);
    let ingredient = inventory[ingredientIndex];
    
    let dish;
    switch (ingredient) {
        case "Tomato":
            dish = "Tomato Soup";
            break;
        case "Onion":
            dish = "Onion Rings";
            break;
        case "Chicken":
            dish = "Grilled Chicken";
            break;
        case "Rice":
            dish = "Rice Bowl";
            break;
        default:
            dish = "Unknown Dish";
    }
    
    alert("You cooked " + dish + " using " + ingredient + "!");
    
    alert("You used " + ingredient + " for cooking!");
    
    // Remove the ingredient from inventory
    inventory.splice(ingredientIndex, 1);
    //Let user review inventory
    viewInventory();
}

//Initialize an empty inventory
let inventory = [];

// Main game loop, convert to lowercase for player assurance
while (true) {
    let action = prompt("What would you like to do? (explore / cook / view / exit)").toLowerCase();
  
    if (action === "explore") {
        exploreAndCollect();
    } else if (action === "cook") {
        cookDish();
    } else if (action === "view") {
        viewInventory();
    } else if (action === "exit") {
        alert("Thanks for playing!");
        break;
    } else {
        alert("Invalid action! Please choose to explore, cook, view, or exit.");
    }
}