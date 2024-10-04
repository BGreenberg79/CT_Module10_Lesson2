// Task 1 Implement conditional statement to check if user is logged in prior to adding items to cart

let isLoggedIn = true;
const availableProducts = {"Cat Scratcher":50, "Cat Food":25, "Catnip":10, "Cat Toy":5};

if (isLoggedIn) {
    console.log("Item Successfully added");
} else {
    console.log("Please be sure to log in before adding any items to cart");
};

// Task 2 Use a loop to display the list of available products to the user and add funcationality for users to add products to cart

for (const item in availableProducts) {console.log(`Item ${item} for $${availableProducts[item]}`)};
// Loops through every key and value in availableProducts object

function addToCart (cart, item_added, price) {
     cart[item_added] = price;
    return cart
};
// fucntion to add to cart object using bracket notation

const itemsInCart = {};
addToCart(itemsInCart, "Cat Toy", 5);
console.log(itemsInCart);
// called earlier function console log to demonstrate result

// Task 3 Calculate Total cost and display to the user
function calculateTotalCost (cart) {
    let cartTotal = 0;
    for (const item in cart) {
        cartTotal += cart[item] 
    };
    return cartTotal
};
// function loops through cart object fed into function and uses addition assignment operator and for in loop to tp get total cost
console.log(calculateTotalCost (itemsInCart));
// calls calculateTotalCost function using itemsInCart object inside console log statement