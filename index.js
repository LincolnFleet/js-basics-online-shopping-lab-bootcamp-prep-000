var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = {itemName: `${item}`, itemPrice: Math.floor(Math.random()*100)+1};
  cart.push(newItem);
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length == 0) {
    return "Your shopping cart is empty."
  } elseif (cart.length == 1) {
    return `In your cart, you have ${cart.itemName[0]} at $\${cart.itemPrice[0]}.`
  } else {
    var currentCart = "In your cart, you have ";
    for (i=0; i<cart.length-1; i++); {
      currentCart += `${cart.itemName[i]} at $\${cart.itemPrice[i]},`
    }
    currentCart += `and ${cart.itemName[i+1]} at $\${cart.itemPrice[i+1]}.`
    return currentCart
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
