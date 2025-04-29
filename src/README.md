# API REST de Gestión de Libros

Este proyecto es una API REST construida con Express.js y MySQL para gestionar una base de datos de libros. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una tabla de libros.

## Requisitos

- Node.js >= v14.x
- MySQL (o un servicio compatible como Aiven)
- Variables de entorno configuradas

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/tu-repo.git
   ```

2. Instala las dependencias:

   ```bash
   cd tu-repo
   npm install
   ```

3. Configura las variables de entorno. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

   ```
   DB_USER=tu_usuario_mysql
   DB_PASSWORD=tu_contraseña_mysql
   DB_PORT=3000  # O el puerto en el que quieras que corra el servidor
   ```

4. Inicia el servidor:

   ```bash
   npm start
   ```

   El servidor debería estar corriendo en `http://localhost:3000` (o el puerto que hayas configurado).

## Endpoints de la API

### 1. Obtener todos los libros

- **Método:** `GET`
- **Ruta:** `/api/books`
- **Descripción:** Devuelve una lista con todos los libros registrados en la base de datos.

- **Respuesta (200 OK):**
  ```json
  {
    "success": true,
    "result": [
      {
        "id": 1,
        "title": "Libro 1",
        "author": "Autor 1",
        "editor": "Editorial 1",
        "quantity": 10
      },
      {
        "id": 2,
        "title": "Libro 2",
        "author": "Autor 2",
        "editor": "Editorial 2",
        "quantity": 5
      }
    ]
  }
  ```

### 2. Crear un nuevo libro

- **Método:** `POST`
- **Ruta:** `/api/book`
- **Descripción:** Crea un nuevo libro en la base de datos.

- **Cuerpo de la solicitud:**

  ```json
  {
    "title": "Nuevo libro",
    "author": "Nuevo autor",
    "editor": "Nueva editorial",
    "quantity": 15
  }
  ```

- **Respuesta (201 Created):**

  ```json
  {
    "success": true
  }
  ```

- **Errores posibles:**
  - **400 Bad Request:** Si no se proporcionan todos los parámetros necesarios (`title`, `author`, `editor`, `quantity`).

### 3. Actualizar un libro existente

- **Método:** `PUT`
- **Ruta:** `/api/book/:id`
- **Descripción:** Actualiza los detalles de un libro existente según el `id`.

- **Cuerpo de la solicitud:**

  ```json
  {
    "title": "Título actualizado",
    "author": "Autor actualizado",
    "editor": "Editorial actualizada",
    "quantity": 20
  }
  ```

- **Respuesta (200 OK):**
  ```json
  {
    "success": true
  }
  ```

### 4. Eliminar un libro

- **Método:** `DELETE`
- **Ruta:** `/api/book/:id`
- **Descripción:** Elimina un libro de la base de datos según el `id`.

- **Respuesta (200 OK):**
  ```json
  {
    "status": "success",
    "message": "Book removed"
  }
  ```

## Estructura del Proyecto

/tu-repo
├── .env # Archivo con las variables de entorno
├── node_modules/

# Dependencias instaladas

├── package.json

# Información del proyecto y dependencias

├── server.js

# Archivo principal que inicia el servidor

└── README.md

# Este archivo

## Dependencias

- `express`: Framework de Node.js para crear servidores web.
- `cors`: Middleware para habilitar el soporte CORS (Cross-Origin Resource Sharing).
- `mysql2/promise`: Cliente MySQL para Node.js que utiliza promesas.
- `dotenv`: Carga las variables de entorno desde un archivo `.env`.

## Contribuir

1. Haz un fork de este repositorio.
2. Crea una nueva rama (`git checkout -b feature/tu-feature`).
3. Realiza los cambios necesarios y haz un commit (`git commit -am 'Añadir nueva funcionalidad'`).
4. Envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

Si tienes alguna duda o problema, no dudes en abrir un issue en GitHub o contactar al equipo de desarrollo.
