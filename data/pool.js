const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost", 
  user: "shivadmin",
  database: "top_users",
  password: "master",
  port: 5432 // The default port
});
