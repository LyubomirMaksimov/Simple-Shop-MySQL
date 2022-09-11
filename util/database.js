// Connecting to MySQL server
//-------------------------------

// const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "node-shop",
//   password: "30555",
// });

// module.exports = pool.promise();

//==============================================================

// Connecting With Sequelize

const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-shop", "root", "30555", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
