const product = {
  id: 1,
  name: 'Camiseta',
};

const productPrice = {
price: 23
}

const updateProduct = { ...product, ...productPrice }

console.log(updateProduct);