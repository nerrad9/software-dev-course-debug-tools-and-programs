/*Some one pre-debugged the program? Idk what to do*/


const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];

function calculateTotal(cartItems) {
  let total = 0;
  //correct, found bug using console
  for (let i = 0; i < cartItems.length; i++) { // Bug: <= should be <
      total += cartItems[i].price; // Bug: cartItems[i] is undefined on the last iteration
  }
  return total;
}

function applyDiscount(total, discountRate) {
  //I mean technically a bug, id argue that if someone gets a negative discount they deserve the markup
  if (discountRate>1 || discountRate<0){
    console.error(`Invalid discount: ${discountRate}`)
    return total
  }
  return total - total * discountRate; // Bug: Missing validation for discountRate
}

function generateReceipt(cartItems, total) {
  let receipt = "Items:\n";
  cartItems.forEach(item => {
      receipt += `${item.name}: $${item.price}\n`;
  });
  //If total was not a number this wouldve crashed long ago. Jest Test unit test ensures it is though
  receipt += `Total: $${total.toFixed(2)}`; // Bug: total may not be a number
  return receipt;
}

// Debugging entry point
// console.log("Starting shopping cart calculation...");
// const total = calculateTotal(cart);
// const discountedTotal = applyDiscount(total, 0.2); // 20% discount
// const receipt = generateReceipt(cart, discountedTotal);

// document.getElementById("total").textContent = `Total: $${discountedTotal}`;
// document.getElementById("receipt").textContent = receipt;


module.exports = {calculateTotal, applyDiscount, generateReceipt}