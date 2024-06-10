/**
 * Create a shopping cart that allows the user to add items to the cart and remove items from the cart. An item is a javascript object with the following properties:
 * - name: the name of the item
 * - price: the price of the item
 *
 * The shopping cart should be able to store up to 10 items.
 * The shopping cart should be able to display the total price of the items in the cart.
 * The shopping cart should be able to display the total number of items in the cart.
 *
 * Example:
 * - add item "apple" to cart
 * - remove item "apple" from cart
 * - display total price of items in cart
 * - display total number of items in cart
 *
 * @param {string[]} items
 * @returns {string}
 */

function shoppingCart(items: any[]): string {
  let totalPrice = 0;
  let totalItems = 0;
  for (let i = 0; i < items.length; i++) {
    totalPrice += items[i].price;
    totalItems++;
  }
  return `Total price of items in cart: ${totalPrice}. Total number of items in cart: ${totalItems}.`;
}

console.log(
  shoppingCart([
    { name: "apple", price: 0.5 },
    { name: "banana", price: 0.75 },
  ])
);

console.log(
  shoppingCart([
    { name: "apple", price: 0.5 },
    { name: "banana", price: 0.75 },
    { name: "orange", price: 0.25 },
    { name: "grape", price: 0.5 },
    { name: "kiwi", price: 0.75 },
  ])
);
