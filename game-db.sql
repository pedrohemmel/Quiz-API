CREATE DATABASE IF NOT EXISTS quiz_db;

USE quiz_db;

CREATE TABLE IF NOT EXISTS user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    points INT DEFAULT 0
);

INSERT INTO user (name, username, password, points)
VALUES 
    ('Pedro Henrique', 'pedro', '123', 0),
    ('Maria Silva', 'maria', '1234', 0),
    ('João Souza', 'joao', '12345', 0);
