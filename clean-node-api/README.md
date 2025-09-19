# 🧼 Clean Node API

A RESTful API built with **Node.js** and **TypeScript**, applying **Clean Architecture** principles for high scalability, testability, and separation of concerns.

This project is part of the **Architect Track** and demonstrates advanced backend practices including **JWT-based authentication**, **DTOs**, **MongoDB integration**, and **modular architecture**.

---

## 📌 Description

This API is designed to implement a clean and maintainable structure that separates concerns across layers:

- **Presentation**: Routing and middleware logic
- **Application**: Use cases orchestrating domain logic
- **Domain**: Business entities, repositories, and contracts
- **Infrastructure**: External dependencies such as MongoDB

---

## 🔐 Features

- ✅ Register new users with hashed passwords
- ✅ Login and JWT generation
- ✅ JWT verification middleware
- ✅ User payload injection for protected routes
- ✅ Clean and testable separation of concerns
- ✅ MongoDB persistence with Mongoose

---

## 🧠 Key Concepts

- Clean Architecture (Uncle Bob style)
- JWT Authentication
- Dependency Inversion (SOLID)
- DTOs and Use Cases
- MongoDB as persistence layer
- Modular and decoupled folder structure

---

## 🛠️ Tech Stack

- **Node.js** + **TypeScript**
- **Express.js**
- **JWT** (`jsonwebtoken`)
- **Mongoose**
- **dotenv** for environment management
- **ESLint** + **Prettier**
- **ts-node-dev** for development
- **Jest** *(optional for future tests)*

---

## 📁 Folder Structure

```
clean-node-api/
├── src/
│   ├── config/                # Environment, JWT, bcrypt setup
│   ├── data/                  # MongoDB database connection and models
│   │   └── mongodb/
│   ├── domain/                # Entities, DTOs, Repositories
│   │   ├── datasources/
│   │   ├── dtos/
│   │   ├── entities/
│   │   ├── errors/
│   │   └── repositories/
│   ├── infrastructure/        # Datasource implementations, mappers
│   ├── presentation/          # Controllers, Routes, Middlewares
│   └── app.ts                 # Express app config
├── .env
├── docker-compose.yml
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/IanScateni/architecture-projects.git
cd clean-node-api
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables**

```bash
cp .env.template .env
```

4. **Run the development server**

```bash
npm run dev
```

---

## 🔐 Example `.env`

```env
PORT=3000
JWT_SEED=supersecretkey2025
MONGO_URL=mongodb://localhost:27017
MONGO_DB_NAME=clean-node-db

```

---

## 📬 API Endpoints (via Postman)

### Base URL

```
http://localhost:3000/api
```

### Auth

| Method | Endpoint        | Description             |
|--------|------------------|-------------------------|
| POST   | `/auth/register` | Register new user       |
| POST   | `/auth/login`    | Login and get JWT token |
| GET    | `/auth`          | Validate token (Protected Route) |

> Use `Bearer <token>` in the **Authorization** header.

---

## 📦 Postman Collection

You can import the Postman collection from this repo:
> [`/postman/clean-node-api.postman_collection.json`](./postman/clean-node-api.postman_collection.json)

To add it:
1. Open Postman
2. Click `Import`
3. Upload the collection file

---

## ✅ Completed Modules

- [x] JWT Adapter and token generation
- [x] Middleware to validate JWT
- [x] User registration and login use cases
- [x] MongoDB integration
- [x] Clean separation of layers (Clean Architecture)

---

## 📄 License

This project is for educational purposes and is part of the long-term roadmap toward becoming a **Full Stack Software Architect**.

---

## ✍️ Author

**Ian Scateni**  
*Full Stack Developer · Architect Track*