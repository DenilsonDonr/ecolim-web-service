-- Usamos la DB ws_ecolim
USE ws_ecolim;

-- Tabla usuarios
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL, -- almacenar hash
    full_name VARCHAR(150),
    role VARCHAR(50) DEFAULT 'employee'
);

-- Tabla tipos de residuos
CREATE TABLE waste_types (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    description TEXT
);

-- Tabla de registro de residuos
CREATE TABLE waste_collection (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    waste_type_id INT NOT NULL,
    quantity DECIMAL(10, 2) NOT NULL,
    collection_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    location VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (waste_type_id) REFERENCES waste_types (id)
);

INSERT INTO
    users (username, password, full_name)
VALUES (
        'jlopez',
        '$2b$10$K9QwR9Fv1yYVZsQx9kKZ1e4m0Q0kP6r6W8Xk8Oe7H9qQjT7mKc1dG',
        'Juan Lopez'
    ),
    (
        'mrojas',
        '$2b$10$K9QwR9Fv1yYVZsQx9kKZ1e4m0Q0kP6r6W8Xk8Oe7H9qQjT7mKc1dG',
        'Maria Rojas'
    ),
    (
        'cgarcia',
        '$2b$10$K9QwR9Fv1yYVZsQx9kKZ1e4m0Q0kP6r6W8Xk8Oe7H9qQjT7mKc1dG',
        'Carlos Garcia'
    ),
    (
        'lramirez',
        '$2b$10$K9QwR9Fv1yYVZsQx9kKZ1e4m0Q0kP6r6W8Xk8Oe7H9qQjT7mKc1dG',
        'Luis Ramirez'
    ),
    (
        'aparedes',
        '$2b$10$K9QwR9Fv1yYVZsQx9kKZ1e4m0Q0kP6r6W8Xk8Oe7H9qQjT7mKc1dG',
        'Ana Paredes'
    );