const { Users } = require("../db");
const { Op } = require("sequelize");

async function searchUser(username) {
  if (!username) {
    let allUsers = await Users.findAll();
    if (allUsers.length === 0) {
      return "message: No se encontraron usuarios en la Base de Datos";
    }
    return allUsers;

  } else {
    let userName = await Users.findAll({ 
      
      where: { username: { [Op.iLike]: `%${username}%` } },
      attributes: {
        exclude: ["createdAt", "updatedAt"]
    }
    });
    if (userName.length === 0) {
      return `No se encontraron usuarios con el nombre: ${username}`;
    }
    return userName;
  }
}

module.exports = { searchUser };