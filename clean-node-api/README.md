# 🧼 Clean Node API

A RESTful API project built with **Node.js** and **TypeScript**, following the **Clean Architecture** approach to ensure modularity, testability, and scalability.  
It includes user authentication, registration, and secure access using **JWT (JSON Web Tokens)**.

---

## 📌 Description

This API was created as part of a Clean Architecture course focused on applying advanced development patterns and separation of concerns in Node.js applications.

The project teaches how to:

- Build a secure and scalable user authentication system
- Apply Clean Architecture principles to organize business logic
- Structure code with layers: controllers, use-cases, services, and adapters
- Handle JWT-based authentication and authorization
- Improve maintainability and testability through decoupled design

---

## 🧠 Key Concepts

- Clean Architecture
- Dependency Inversion & SOLID
- JWT Authentication
- TypeScript with strict typing
- Express for routing and middleware
- Environment-based configuration

---

## 🛠️ Tech Stack

- **Node.js**
- **TypeScript**
- **Express.js**
- **JWT**
- **dotenv**
- **ESLint + Prettier**
- **Jest** (for tests)
- **ts-node**, **tsconfig-paths**

---

## 📁 Project Structure

```
clean-node-api/
├── src/
│   ├── config/
│   ├── domain/
│   ├── presentation/
│   ├── infrastructure/
│   └── app.ts
├── tests/
├── .env.example
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/IanScateni/architecture-projects.git
cd clean-node-api
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

4. Run the development server:

```bash
npm run dev
```

---

## 🧪 Run Tests

```bash
npm test
```

---

## 🔐 Environment Variables

Example:

```env
PORT=3000
JWT_SECRET=mysecretkey
MONGO_URL=mongodb://url:port
MONGO_DB_NAME=mynameDB
```

---

## 📄 License

This project is for educational purposes, aligned with the *Architect Track*.

---

## ✍️ Author

**Ian Scateni**  
Full Stack Developer · Software Architect
