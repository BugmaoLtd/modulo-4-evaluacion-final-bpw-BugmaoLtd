const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

const app = express();

async function getDBConnection() {
  const connection = await mysql.createConnection({
    host: "mysql-3fda49b8-begona-5bdb.j.aivencloud.com",
    user: "avnadmin",
    password: "AVNS_y5oSYVhR7psh5iMAY_9",
    database: "books_db",
  });
  connection.connect();
  return connection;
}

app.use(cors());
app.use(express.json());

const port = 5001;
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
