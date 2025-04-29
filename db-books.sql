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


-- AQUÍ TERMINA EL CÓDIGO PARA GENERAR LA TABLA DE MYSQL

-- Query listar todas las entradas por orden de cantidad

-- Query insertar una entrada
INSERT INTO books (title, author, editor, quantity)
VALUES
	('El cuento de la criada', 'Margaret Atwood', 'Salamandra Narrativa', 1),
    ('El acontecimiento', 'Annie Ernaux', 'Andanzas', 3),
    ('Nada', 'Carmen Laforet','Austral Educación', 2),
    ('La vegetariana', 'Han Kang','Random House', 3);

-- Formato para Postman
{
    "title": "El cuento de la criada",
    "author": "Margaret Atwood",
    "editor": "Salamandra Narrativa",
    "quantity": 1
}

{
    "title": "El acontecimiento",
    "author": "Annie Ernaux",
    "editor": "Andanzas",
    "quantity": 3
}

{
    "title": "Nada",
    "author": "Carmen Laforet",
    "editor": "Austral Educación",
    "quantity": 2
}

{
    "title": "La vegetariana",
    "author": "Han Kang",
    "editor": "Random House",
    "quantity": 3
}

-- Query actualizar un campo

-- La cantidad de libros ahora es 5
UPDATE books SET quantity = 5 WHERE id = 5;

--Query borrar una entrada

DELETE FROM books WHERE id = 10;