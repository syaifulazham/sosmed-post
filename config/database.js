const mysql = require('mysql');
require('dotenv').config();

const dbConnection = mysql.createConnection({
  host: process.env.DB_MYSQL_HOST,
  port: process.env.DB_MYSQL_PORT,
  user: process.env.DB_MYSQL_USER,
  password: process.env.DB_MYSQL_PASS,
  database: process.env.DB_MYSQL_DBAS
});

dbConnection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = dbConnection;
