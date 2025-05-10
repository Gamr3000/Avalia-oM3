CREATE DATABASE helpdesk;

USE helpdesk;

CREATE TABLE tickets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    description TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'Aberto',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);

-- Insere dados de exemplo
INSERT INTO users (name, email) VALUES ('Carlos Silva', 'carlos@example.com');
INSERT INTO tickets (description, status) VALUES ('Problema no sistema de login', 'Aberto');
