let PRODUCTS = require('./products');
let SUPPLIERS = require('./suppliers');

const allProductsBySupplier = (obj, args, ctx) => PRODUCTS.filter(p => p.supplierId === Number(ctx.user.sub));

const addProduct = (obj, args, ctx) => {
  const id = PRODUCTS.length + 1;
  PRODUCTS.push({
    ...args.input,
    id
  });
  return PRODUCTS.slice(-1)[0];
};

const product = (obj, args, ctx) => PRODUCTS.find(p => p.id === args.productId);

const suppliers = (obj, args, ctx) => SUPPLIERS;

module.exports = {allProductsBySupplier, product, suppliers, addProduct};
