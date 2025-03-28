import mysql from "mysql2/promise";

const conetion = await mysql.createConnection({
  host: "localhost",
  user: "johan_adso2894667",
  password: "AprendiT2025",
  database: "node_adso2894667",
});

export default conetion;
