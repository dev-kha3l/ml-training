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
const shoppingCart = (items) => {
  const cart = [];
  let totalPrice = 0;
  let totalItems = 0;

  const addItem = (item) => {
    cart.push(item);
    totalPrice += item.price;
    totalItems++;
  };

  const removeItem = (item) => {
    const index = cart.indexOf(item);
    cart.splice(index, 1);
    totalPrice -= item.price;
    totalItems--;
  };

  const displayTotalPrice = () => {
    return `Total price: ${totalPrice}`;
  };

  const displayTotalItems = () => {
    return `Total items: ${totalItems}`;
  };

  return {
    addItem,
    removeItem,
    displayTotalPrice,
    displayTotalItems,
  };
};
