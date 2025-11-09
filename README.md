# 📝 Gerenciador de Tarefas Web

O **Gerenciador de Tarefas Web** é uma aplicação completa para gerenciamento de tarefas, permitindo criar, editar, listar e organizar tarefas de forma prática e intuitiva. O projeto é dividido em **frontend** com Angular e **backend** com Spring Boot.

---

## ⚙️ Tecnologias Utilizadas

### Frontend

- 🅰️ **Angular 20** – Framework para construção de aplicações web modernas.
- 💻 **TypeScript** – Linguagem de programação utilizada no Angular.
- 🌐 **HTML / CSS** – Estrutura e estilo da aplicação.

### Backend

- ☕ **Spring Boot** – Framework Java para criar APIs REST de forma rápida e eficiente.
- 📦 **Maven** – Gerenciamento de dependências e build do backend.
- 🗄️ **Banco de Dados** – Utilizado banco de dados H2. É um banco de dados relacional em memória.

---

## 🚀 Como Rodar o Projeto

### 1️⃣ Rodar o Backend (Spring Boot)

1. Navegue até a pasta do backend:

```bash
cd backend/gerenciador-tarefas
```

2. Build e start do projeto:

```bash
./mvnw clean install
./mvnw spring-boot:run
```

O backend ficará disponível em `http://localhost:8080`.

### 2️⃣ Rodar o Frontend (Angular)

1. Navegue até a pasta do frontend:

```bash
cd frontend/gerenciador-tarefas-web
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
ng serve
```

O frontend ficará disponível em [http://localhost:4200](http://localhost:4200). 🔄 A aplicação recarrega automaticamente ao alterar os arquivos.

---

### Spring Boot

- 🔹 Build: `./mvnw clean install`
- 🔹 Rodar aplicação: `./mvnw spring-boot:run`

---

## 📚 Recursos Adicionais

- [Documentação Angular](https://angular.dev)
- [Documentação Spring Boot](https://spring.io/projects/spring-boot)
- [Maven](https://maven.apache.org/)
