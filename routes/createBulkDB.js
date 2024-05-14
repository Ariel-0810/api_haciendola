const { Products } = require("../db");
const { Router } = require("express");
const express = require("express");
const fs = require("fs");
const path = require("path");

const router = Router();
router.use(express.json());

router.post("/createBulkDB", async (req, res) => {
    try {

        const productsPath = path.join(__dirname, "../products.json");

        const rawData = fs.readFileSync(productsPath);
        const productsData = JSON.parse(rawData);

        await Products.bulkCreate(productsData);

        return res.status(200).json({ message: "Datos insertados correctamente" });
    } catch (error) {
        return res.status(500).json({ message: "Error interno del servidor: " + error.message });
    }
});

module.exports = router;

