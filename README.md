# Book API

A RESTful API for managing books, built with NestJS.

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Description

The Book API allows you to manage a collection of books. You can create, read, update, and delete books from the collection. This API is built using [NestJS](https://nestjs.com/), a progressive Node.js framework for building efficient, reliable, and scalable server-side applications.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

    ```sh
    git clone https://github.com/yourusername/book-api.git
    cd book-api
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Configuration:**

    Ensure you have a `.env` file with the necessary environment variables. You can use the example file `.env.example` as a reference.

4. **Run the application:**

    ```sh
    npm run start:dev
    ```

    The API will be available at `http://localhost:3000`.

## Usage

### API Endpoints

- **GET /books**: Retrieve a list of all books.
- **GET /books/:id**: Retrieve a specific book by ID.
- **POST /books**: Create a new book.
- **PUT /books/:id**: Update an existing book by ID.
- **DELETE /books/:id**: Delete a book by ID.

### Example Request

- **Creating a new book:**

    ```sh
    curl -X POST http://localhost:3000/books \
    -H "Content-Type: application/json" \
    -d '{"title": "Example Book", "author": "John Doe", "publishedDate": "2024-01-01"}'
    ```

## Features

- **CRUD operations**: Create, Read, Update, and Delete books.
- **Validation**: Ensures data integrity with DTOs and validation pipes.
- **Modular architecture**: Scalable and maintainable project structure with NestJS modules.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch-name`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch-name`).
5. Create a new Pull Request.

## License

This project is licensed under the UNLICENSED License.