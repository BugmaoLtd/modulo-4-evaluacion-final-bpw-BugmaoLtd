const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

const app = express();

async function getDBConnection() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "books_db",
  });
  connection.connect();
  return connection;
}

app.use(cors());
app.use(express.json());

require("dotenv").config();

const port = process.env.DB_PORT;
app.listen(port, () => {
  console.log(`Server is listening in http://localhost:${port}`);
});

app.get("/api/books", async (req, res) => {
  const connection = await getDBConnection();
  const sqlQuery = "SELECT * FROM books";
  const [result] = await connection.query(sqlQuery);
  console.log(result);

  res.json({});
});
