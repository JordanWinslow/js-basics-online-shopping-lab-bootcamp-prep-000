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
    var allCartNames = []
    var allCartPrices = []
    for (let cartIndex = 0; cartIndex < cart.length; cartIndex++){
      allCartNames[cartIndex] = cart[cartIndex].itemName
      allCartPrices[cartIndex] = cart[cartIndex].itemPrice
    }
    return `In your cart, you have ${allCartNames.join
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
