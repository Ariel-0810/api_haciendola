
const { Products } = require("../db");

async function searchId(id) {
    let result = await Products.findByPk(id, {
      attributes: {
        exclude: ["createdAt", "updatedAt"]
    }           
    });
    if (!result) throw new Error(`No existen productos con el id: ${id}`);

    return result;
  }


module.exports = { searchId };