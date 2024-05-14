const { Router } = require("express");

// Importar todos los routers;
const router = Router();
const getProducts = require("./getProducts");
const createProduct = require("./createProducts");
const getProductId = require("./getProductsId");
const deleteProducts = require("./deleteProducts");
const updateProduct = require("./updateProduct");
const createUser = require("./createUser")
const getuserid = require("./getUserId")
const getuser = require("./getUserName")
const updateUser = require("./updateUser");
const deleteUser = require("./deleteUser")
const loginUser = require('./auth')
const createBulkDB = require("./createBulkDB")





// Configurar los routers
router.use("/products", getProducts);
router.use("/products", updateProduct);
router.use("/products", createProduct);
router.use("/products", createBulkDB);
router.use("/products", getProductId);
router.use("/products", deleteProducts);
router.use("/user", createUser);
router.use("/user", getuserid);
router.use("/user", getuser);
router.use("/user", deleteUser);
router.use("/user/login", loginUser);
router.use("/user/update", updateUser);



module.exports = router;

