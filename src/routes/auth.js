const { Router } = require("express");
const express = require("express");
const { login } = require('../controllers/auth.js')

const router = Router();
router.use(express.json());


router.post('/', async (req, res) => {
  const { username, password } = req.body;
  try {

    const authResult = await login(username, password);


    if (authResult.error) {
      return res.status(401).json({ message: authResult.error });
    }

    if (authResult.token) {
      res.status(200).json(authResult);
    } else {

      res.status(500).json({ message: 'Error interno del servidor' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

module.exports = router;


