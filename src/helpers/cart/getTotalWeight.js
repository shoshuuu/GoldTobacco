export default function getTotalWeight(localCart) {
  let total = 0;
  if (localCart && localCart.length != null) {
    for (let i = 0; i < localCart.length; i++) {
      if (localCart[i]?.product?.categories[0]?.name === "Табак") {
        total += Number(localCart[i]?.quantity);
      }
    }
    return total;
  } else {
    return total;
  }
}
