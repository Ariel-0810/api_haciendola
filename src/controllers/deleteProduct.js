const { Products } = require("../db");

async function deleteProduct(id) {
  try {

    let producto = await Products.findByPk(id);


    if (!producto) {
      throw new Error(`No existe producto con el id: ${id}`);
    }


    await producto.destroy();


    return { message: `Producto con id ${id} eliminado correctamente` };
  } catch (error) {

    throw new Error(`Error al eliminar el producto: ${error.message}`);
  }
}

module.exports = { deleteProduct };
