export function addToCart(item, cart) {
  //create a copy of our cart state, avoid overwritting existing state
  let cartCopy;
  if (cart === null || cart === undefined) {
    cartCopy = [];
  } else {
    cartCopy = [...cart];
  }

  //assuming we have an id field in our item
  let id = item.product.id;

  function findProduct(product) {
    return product.product.id === id;
  }

  //look for item in cart array
  let existingItem = cartCopy.find(findProduct);
  debugger;
  //if item already exists
  if (existingItem) {
    let existingQuantity = parseFloat(existingItem.quantity);
    let newQuantity = parseFloat(item.quantity);
    // console.log(existingQuantity);
    // console.log(newQuantity);
    // console.log(existingQuantity + newQuantity);
    existingItem.quantity = parseFloat(
      Number(existingQuantity.toFixed(2)) + Number(newQuantity.toFixed(2))
    ).toFixed(2);
    // console.log(existingItem.quantity);
  } else {
    //if item doesn't exist, simply add it

    cartCopy.push(item);
  }
  //update app state
  //setCart(cartCopy);
  console.log(cartCopy);

  //make cart a string and store in local space
  return cartCopy;
}
