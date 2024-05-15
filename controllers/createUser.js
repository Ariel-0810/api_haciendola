const { Users } = require ("../db");
const bcrypt = require('bcrypt');


async function createUser({
    username,
    password,
    fullname,
    email,
}) {
    if(!username || !fullname || !email || !password)
    throw new Error("The data must be complete");


    const hashedPassword = await bcrypt.hash(password, 10);

try {
    let resultado = await Users.create({
      username,
      password: hashedPassword,
      fullname, 
      email,
    })
} catch (error) {

    throw new Error(error.parent.detail);
}
  
}

module.exports = { createUser }
