export function addToCart(item, cart, setCart) {
  //create a copy of our cart state, avoid overwritting existing state
  let cartCopy = [...cart];

  //assuming we have an id field in our item
  let id = item.product.id;

  function findProduct(product) {
    return product.product.id === id;
  }

  debugger;
  console.log(id);
  console.log(cartCopy.find(findProduct));

  //look for item in cart array
  let existingItem = cartCopy.find(findProduct);

  //if item already exists
  if (existingItem) {
    // console.log(Number(existingItem.quantity));
    // console.log(Number(item.quantity));
    // console.log(Number(existingItem.quantity) + Number(item.quantity));
    existingItem.quantity =
      Number(existingItem.quantity) + Number(item.quantity); //update item
  } else {
    //if item doesn't exist, simply add it
    cartCopy.push(item);
  }

  //update app state
  setCart(cartCopy);

  //make cart a string and store in local space
  let stringCart = JSON.stringify(cartCopy);
  localStorage.setItem("cart", stringCart);
}
