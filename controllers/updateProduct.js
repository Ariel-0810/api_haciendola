const { Products } = require("../db");

async function updateProduct(productData, id) {
  try {
        await Products.update(productData, {
          where: {
            id: id
          },
          
        });
        let resultado = await Products.findByPk(id, {
          attributes: {
            exclude: ["createdAt", "updatedAt"]
          }
        });
        if(resultado){
            return resultado;
        }else{
            throw new Error(`There is no review with id ${id}`)
        }
  } catch (error) {
    throw new Error("Error updating the Review: " + error.message);
  }
}

module.exports = { updateProduct };