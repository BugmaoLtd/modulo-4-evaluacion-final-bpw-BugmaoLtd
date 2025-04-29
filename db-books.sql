CREATE DATABASE books_db;
USE books_db;

CREATE TABLE books (
	id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(130),
    author VARCHAR(130),
    editor VARCHAR(130),
    quantity INT
);

INSERT INTO books (title, author, editor, quantity)
VALUES
	('Apegos feroces', 'Vivian Gornick', 'Narrativa Sexto Piso', 3),
    ('Una habitación propia', 'Virginia Woolf', 'Austral singular', 4),
    ('Oso', 'Marian Engel', 'Impedimenta', 5);


-- Consultas

-- Query listar todas las entradas por orden de cantidad
SELECT * FROM books;
ORDER BY quantity ASC
LIMIT 5;

-- Query insertar una entrada
INSERT INTO books (title, author, editor, quantity)
VALUES
	('El cuento de la criada', 'Margaret Atwood', 'Salamandra Narrativa', 1),
    ('El acontecimiento', 'Annie Ernaux', 'Andanzas', 3),
    ('Nada', 'Carmen Laforet','Austral Educación', 2),
    ('La vegetariana', 'Han Kang','Random House', 3);

-- Query actualizar un campo
-- La cantidad de libros ahora es 5
UPDATE books SET quantity = 5 WHERE id = 10;

--Query borrar una entrada

DELETE FROM books WHERE id = 10;