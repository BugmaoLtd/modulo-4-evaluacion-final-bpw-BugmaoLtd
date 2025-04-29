const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

const app = express();

async function getDBConnection() {
  const connection = await mysql.createConnection({
    host: "mysql-3fda49b8-begona-5bdb.j.aivencloud.com",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "books_db",
    port: 24757,
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
  const [resultList] = await connection.query(sqlQuery);

  connection.end();

  res.status(200).json({
    success: true,
    result: resultList,
  });
});

app.post("/api/book", async (req, res) => {
  const connection = await getDBConnection();

  if (!req.body) {
    res.status(404).json({
      success: false,
      message: "Provide all params",
    });
  } else {
  }
  const { title, author, editor, quantity } = req.body;

  if (!title || !author || !editor || !quantity) {
    res.status(404).json({
      success: false,
      message: "Wrong params. Provide 'title', 'author', 'editor', 'quantity' ",
    });
  } else {
    const sqlQuery2 =
      "INSERT INTO books (title, author, editor, quantity) VALUES(?,?,?,?) ";
    const [result] = await connection.query(sqlQuery2, [
      title,
      author,
      editor,
      quantity,
    ]);

    connection.end();

    res.status(201).json({
      success: true,
    });
  }
});

app.put("/api/book/:id", async (req, res) => {
  const connection = await getDBConnection();
  const { id } = req.params;
  const { title, author, editor, quantity } = req.body;
  const sqlQuery3 =
    "UPDATE books SET title = ?, author = ?, editor = ?, quantity = ? WHERE id = ?;";
  const [result] = await connection.query(sqlQuery3, [
    title,
    author,
    editor,
    quantity,
    id,
  ]);

  connection.end();

  res.status(200).json({
    success: true,
  });
});

app.delete("/api/book/:id", async (req, res) => {
  const connection = await getDBConnection();
  const { id } = req.params;
  const sqlQuery4 = "DELETE FROM books WHERE id = ?;";
  const [result] = await connection.query(sqlQuery4, [id]);

  connection.end();

  res.status(200).json({
    status: "success",
    message: "Book removed",
  });
});
