const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Users } = require("../db");

const secretKey = "tu_clave_secreta";

async function login(username, password) {
  try {

    const userDb = await Users.findOne({ where: { username } });

 
    if (!userDb) {
      return { error: "Credenciales inválidas" };
    }


    const storedPassword = userDb.password;


    const isPasswordValid = await bcrypt.compare(password, storedPassword);


    if (!isPasswordValid) {
      return { error: "Credenciales inválidas" };
    }


    const token = jwt.sign({ userId: userDb.id }, secretKey, {
      expiresIn: "12h",
    });


    return {
      token,
      user: {
        id: userDb.id,
        username: userDb.username,
        fullname: userDb.fullname,
        email: userDb.email,
        image: userDb.image,
        phone: userDb.phone,
      },
    };
  } catch (error) {
    console.error("Error de autenticación:", error);
    return { error: "Error de autenticación" };
  }
}

module.exports = { login };


