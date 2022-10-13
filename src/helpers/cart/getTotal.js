export default function getTotal(localCart) {
  let total = 0;
  for (let i = 0; i < localCart.length; i++) {
    total += Number(localCart[i].product.price) * Number(localCart[i].quantity);
  }
  return total;
}
