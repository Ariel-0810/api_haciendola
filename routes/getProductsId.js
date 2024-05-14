const { Router } = require("express");
const { searchId } = require('../controllers/getProductsId')
const express = require("express");


const router = Router();
router.use(express.json());


router.get("/:id", async (req, res) => {
  
  let { id } = req.params;

  try {
    let result = await searchId(id);
    res.status(200).json( result );
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});



module.exports = router;