export default function getTotal(localCart) {
  let total = 0;
  if (localCart && localCart.length != null) {
    for (let i = 0; i < localCart.length; i++) {
      if (localCart[i]?.product?.categories[0]?.name === "Табак") {
        total +=
          Number(localCart[i]?.product?.price * 1000) *
          Number(localCart[i]?.quantity);
      } else {
        total +=
          Number(localCart[i]?.product?.price) * Number(localCart[i]?.quantity);
      }
    }
    return total;
  } else {
    return total;
  }
}
