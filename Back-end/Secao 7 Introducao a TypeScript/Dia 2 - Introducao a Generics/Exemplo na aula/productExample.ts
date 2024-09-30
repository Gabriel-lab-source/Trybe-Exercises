type Product = {
  barcode: string,
  price: number,
}

function getProduct() {
  const product = {};
  const productWithBarcode: Product = { ...product, barcode: '123c456b789a', price: 10}
  return product;
}

console.log(getProduct());