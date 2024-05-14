const { Products } = require("../db");
const { Op } = require("sequelize");

async function searchProducts(Title) {
  if (!Title) {
    let allProducts = await Products.findAll();
    if (allProducts.length === 0) {
      return "message: No se encontraron productos en la Base de Datos";
    }
    return allProducts;

  } else {
    let productTitle = await Products.findAll({ 
      
      where: { Title: { [Op.iLike]: `%${Title}%` } },
      attributes: {
        exclude: ["createdAt", "updatedAt"]
    }
    });
    if (productTitle.length === 0) {
      return `No se encontraron productos con el Titulo: ${Title}`;
    }
    return productTitle;
  }
}

module.exports = { searchProducts };
