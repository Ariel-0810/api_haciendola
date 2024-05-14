const { Router } = require('express');
const express = require ("express")
const { deleteProduct } = require("../controllers/deleteProduct")

const router = Router();
router.use(express.json());

router.delete("/:id", async (req, res) => {
  let { id } = req.params;
     try {
      let resultado = await deleteProduct(id);
      res.status(200).json({ message: `El producto con el ID ${id} se ha eliminado correctamente`, resultado });
    } catch (error) {
      res.status(404).json({error: `No existe producto con el id: ${id}`});
    } 
});

module.exports = router;
