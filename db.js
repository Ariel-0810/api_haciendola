const { User } = require ("./models/Users")
const { Sequelize } = require ("sequelize");
const { pg } = require('pg')
const fs = require("fs");
const path = require("path");
require("dotenv").config();
const { Pool } = require('pg')
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(
  "postgres://default:hauftMy4vdK8@ep-blue-night-a4swti6c.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
  {
    logging: false, 
    native: false, 
  }
);
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
})

pool.connect((err) => {
  if(err) throw err
  console.log("Connect to PostgreSQL successfully!");
})

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Users, Products } = sequelize.models;

Users.belongsToMany(Products, {
  through: "UsersProducts",
});
Products.belongsToMany(Users, {
  through: "ProductsUsers",
});

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
