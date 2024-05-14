const { Products } = require("../db");

async function createProduct({
  Handle,
  Title,
  Description,  
  SKU,
  Grams,
  Stock,
  Price,
  Compare_Price,
  Barcode,
}) {
  if (!Handle || !Title || !Description)
    throw new Error("El Handle, el Title y la Description deben estar completos");

  try {
    let resultado = await Products.create({
      Handle,
      Title,
      Description,  
      SKU,
      Grams,
      Stock,
      Price,
      Compare_Price,
      Barcode,
    })
} catch (error) {

    throw new Error(error.parent.detail);
}
  
}

module.exports = { createProduct };
