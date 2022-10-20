export function editItem(itemID, amount, cart, setCart) {
  let cartCopy = [...cart];

  //find if item exists, just in case
  let existentItem = cartCopy.find((item) => item.id == itemID);

  //if it doesnt exist simply return
  if (!existentItem) return;

  //continue and update quantity
  existentItem.quantity += amount;

  //validate result
  if (existentItem.quantity <= 0) {
    //remove item  by filtering it from cart array
    cartCopy = cartCopy.filter((item) => item.ID != itemID);
  }

  //again, update state and localState
  setCart(cartCopy);

  let cartString = JSON.stringify(cartCopy);
  localStorage.setItem("cart", cartString);
}
