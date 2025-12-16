CREATE DATABASE IF NOT EXISTS projetoDB;
USE projetoDB;


-- Criar tabela de usuarios
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email varchar(100) not null unique,
    senha VARCHAR(255) NOT NULL
);

-- Criar tabela de produtos
CREATE TABLE IF NOT EXISTS produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    descricao VARCHAR(255),
    imagem VARCHAR(255)
);