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
  if (!cart) {
    return "Your shopping cart is empty."
  } else {
    var tempArray = []
    for (let cartIndex = 0; cartIndex < cart.length; cartIndex++){
      tempArray[cartIndex] = cart[cartIndex].itemName 
      tempArray[cartIndex + 1] = cart[cartIndex].itemPrice
    }
    return `In your cart, you have ${tempArray.join(' at')}`
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
