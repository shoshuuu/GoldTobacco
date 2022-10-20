export default function deleteFromCart(item, cart) {
  //create a copy of our cart state, avoid overwritting existing state
  debugger;
  let cartCopy;
  if (cart === null || cart === undefined) {
    cartCopy = [];
  } else {
    cartCopy = [...cart];
  }

  //assuming we have an id field in our item
  console.log(item);
  console.log(cartCopy);

  const index = cartCopy.findIndex(
    (element) => element.product.name === item.product.name
  );
  console.log(index);
  if (index > -1) {
    // only splice array when item is found
    cartCopy.splice(index, 1); // 2nd parameter means remove one item only
  }

  console.log(cartCopy);
  
  if (cartCopy) {
    return cartCopy;
  } else {
    return null;
  }

  //update app state
  // setCart(cartCopy);

  // //make cart a string and store in local space
  // let stringCart = JSON.stringify(cartCopy);
  // localStorage.setItem("cart", stringCart);
}
