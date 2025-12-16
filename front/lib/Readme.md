# 📘 Documentação Completa do Projeto Inovatech

## 1. Visão Geral

O **Inovatech** é um projeto de e-commerce desenvolvido com foco educacional e prático, utilizando **HTML, CSS, JavaScript (Frontend)** e **Node.js + Express + MySQL (Backend)**. O sistema permite exibição de produtos, cadastro de usuários, autenticação (login) e gerenciamento básico de dados via API REST.

---

## 2. Tecnologias Utilizadas

### Frontend

* HTML5
* CSS3
* JavaScript (Vanilla JS)

### Backend

* Node.js
* Express.js
* MySQL
* dotenv
* cors

### Ferramentas

* XAMPP (MySQL + Apache)
* Visual Studio Code
* Git (opcional)

---

## 3. Estrutura de Pastas

```
inovatech/
│
├── front/
│   ├── html/
│   │   ├── projeto.html
│   │   ├── login.html
│   │   ├── admin.html
│   │   └── cadastro.html
│   │
│   ├── css/
│   │   ├── projeto.css
│   │   └── login.css
│   │
│   ├── js/
│   │   └── login.js
│   │
│   └── img/
│
├── back/
│   └── api/
│       ├── server.js
│       ├── routes.js
│       ├── db.js
│       └── controllers/
│           ├── authController.js
│           ├── usuariosControllers.js
│           └── produtosControllers.js
│
├── .env
└── README.md
```

---

## 4. Banco de Dados

### 4.1 Criação do Banco (DDL)

```sql
CREATE DATABASE IF NOT EXISTS projetoDB;
USE projetoDB;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    usuario VARCHAR(50) UNIQUE,
    senha VARCHAR(255) NOT NULL
);

CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    descricao VARCHAR(255),
    imagem VARCHAR(255)
);
```

### 4.2 Inserção de Dados (DML)

```sql
INSERT INTO usuarios (nome, email, senha) VALUES
('João Felipe', 'joaofelipe@gmail.com', '123456'),
('Emanuel Rocha', 'emanuel@gmail.com', 'senha456'),
('Admin Inovatech', 'admin@inovatech.com', 'admin123');

INSERT INTO produtos (nome, preco, descricao, imagem) VALUES
('Fone de Ouvido Bluetooth', 199.00, 'Fone bluetooth potente para jogos', 'fone.png'),
('Redmi Note 14 Pro 5G', 2199.99, 'Smartphone potente', 'redmi.png');
```

---

## 5. Backend (API)

### 5.1 server.js

Responsável por iniciar o servidor e configurar middlewares.

Funções principais:

* Carregar variáveis de ambiente
* Configurar CORS
* Habilitar JSON
* Registrar rotas

### 5.2 routes.js

Centraliza todas as rotas da aplicação.

Rotas disponíveis:

* `POST /api/login`
* `GET /api/usuarios`
* `POST /api/usuarios`
* `GET /api/produtos`
* `POST /api/produtos`

---

## 6. Autenticação (Login)

### 6.1 Fluxo de Login

1. Usuário preenche email e senha
2. Frontend envia requisição POST
3. Backend valida no banco
4. Retorna sucesso ou erro

### 6.2 Endpoint

```http
POST /api/login
```

Body JSON:

```json
{
  "email": "admin@inovatech.com",
  "senha": "admin123"
}
```

Resposta de sucesso:

```json
{
  "message": "Login realizado com sucesso",
  "token": "jwt-token-aqui"
}
```

---

## 7. Frontend

### 7.1 Página Principal (projeto.html)

* Header com navegação
* Listagem de produtos
* Carrinho visual
* Footer institucional

### 7.2 Login (login.html + login.js)

* Formulário com validação
* Envio via fetch
* Armazenamento de token no localStorage

---

## 8. Segurança (Boas Práticas)

* Uso de variáveis de ambiente (.env)
* CORS configurado
* Separação Frontend / Backend
* Possibilidade de usar bcrypt e JWT

---

## 9. Possíveis Melhorias Futuras

* Criptografia de senha (bcrypt)
* Autenticação JWT completa
* Área administrativa protegida
* Carrinho funcional
* Integração com pagamentos

---

## 10. Conclusão

O projeto **Inovatech** demonstra a integração completa entre frontend e backend, utilizando conceitos fundamentais de desenvolvimento web moderno, APIs REST e banco de dados relacional.

📌 Projeto ideal para fins acadêmicos e evolução profissional.
