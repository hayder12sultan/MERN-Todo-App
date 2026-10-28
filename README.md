# MERN Stack Todo Application

A full-stack task management web application built to demonstrate clean **CRUD** (Create, Read, Update, Delete) architecture using MongoDB, Express, React, and Node.js.

## Tech Stack
* **Frontend:** React (Vite)
* **Backend:** Node.js, Express.js
* **Database:** MongoDB & Mongoose

---

## Features
* **Create:** Add new tasks instantly to the database.
* **Read:** Fetch and display all saved tasks upon loading.
* **Update:** 
  * Toggle task completion status (strike-through).
  * Edit existing task text inline using an active edit form.
* **Delete:** Remove tasks permanently from the database.

---

## Project Structure
```text
mern-todo-app/
├── server/
│   ├── models/
│   │   └── Todo.js
│   └── server.js
└── client/
    └── src/
        └── App.jsx

1. Clone the Repository

git clone <your-repo-url>
cd mern-todo-app

2. Backend Setup
Navigate to the server folder and install dependencies:

cd server
npm install express mongoose cors dotenv nodemon

Create a .env file in the server directory and add your MongoDB connection string:

MONGO_URI=mongodb://localhost:27017/merntodo
PORT=5000

Run the development server:

npm run dev

3. Frontend Setup
Navigate to the client folder and install dependencies:

cd client
npm install

Run the frontend development server:

npm run dev
