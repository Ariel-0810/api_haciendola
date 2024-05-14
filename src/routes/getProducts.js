const { Router } = require("express");
const { searchProducts } = require("../controllers/getProducts");
const express = require("express");


const router = Router();
router.use(express.json());

router.get("/", async (req, res) => {
  const { Title } = req.query;

  try {
    let result = await searchProducts(Title);
    res.status(200).json( result );
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;



