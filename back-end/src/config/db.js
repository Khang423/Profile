const mysql = require("mysql2/promise");

// connect 
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "react",
});

module.exports = pool;