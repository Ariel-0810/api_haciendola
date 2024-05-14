const { Router } = require("express");
const express = require("express");
const { createUser } = require("../controllers/createUser");

const router = Router();
router.use(express.json());

router.post("/", async (req, res) => {
 
  let { username, password, fullname, email, image, phone } = req.body;   

  try {

      let newUser = await createUser({
      username,
      password,
      fullname,
      email,
      image,
      phone,        
      });


      res.status(201).json({message: 'Usuario creado exitosamente', data: newUser});
  } catch (Error) {
    console.log(Error.message)
  }
});

module.exports = router;
