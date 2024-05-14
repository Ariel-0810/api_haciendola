const { Router } = require("express");
const express = require("express");
const { createProduct } = require("../controllers/createProduct");
const router = Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/", async (req, res) => {
 
  let {
    Handle,
    Title,
    Description,  
    SKU,
    Grams,
    Stock,
    Price,
    Compare_Price,
    Barcode, } = req.body;
  try {
    let resultado = await createProduct({
      Handle,
      Title,
      Description,  
      SKU,
      Grams,
      Stock,
      Price,
      Compare_Price,
      Barcode,
    });
    res.status(200).json({message: "Su producto se ha creado con éxito. Gracias por compartirlo!"})
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;