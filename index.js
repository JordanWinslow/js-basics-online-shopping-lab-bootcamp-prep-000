var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var randomPrice = Math.floor(Math.random() * 100 + 1)
  var shoppingList = {itemName: item, itemPrice: randomPrice}
  cart.push(shoppingList)
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else {
    var complicatedMessage = "In your cart, you have "
    if (cart.length === 1){
      complicatedMessage += `${cart[0].itemName} at $${cart[0].itemPrice}.`
    } else {
    for (let cartIndex = 0; cartIndex < cart.length - 1; cartIndex++){
      // stop the loop right before the last element so we can type "and" and finish with a period.
      complicatedMessage += `${cart[cartIndex].itemName} at $${cart[cartIndex].itemPrice}, `
    }
    complicatedMessage += `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
    // look at the last element and add the word "and" plus a period at the end.
    return complicatedMessage
    }
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