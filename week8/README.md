# Week 8 - Employee Management Application

## Project Description

This is a full-stack Employee Management Web Application built with Node.js, Express.js, MongoDB, and a simple HTML/CSS/JavaScript frontend. The application allows users to create, view, update, and delete employee records.

## Features

- Add a new employee
- View all employees
- View detailed information for an individual employee
- Edit existing employee information
- Delete an employee record

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- HTML
- CSS
- JavaScript

## Folder Structure

week8/
├── backend/
│   ├── models/
│   │   └── Employee.js
│   ├── routes/
│   │   └── employees.js
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── index.html
│   ├── script.js
│   └── style.css
└── README.md

## How to Run the Backend

1. Open the terminal.
2. Go to the backend folder:

cd week8/backend

3. Install dependencies:

npm install

4. Start the backend server:

npm run dev

The backend will run on:

http://localhost:5000

## How to Run the Frontend

1. Open the frontend folder.
2. Open index.html using Live Server in VS Code.
3. The frontend connects to the backend API at:

http://localhost:5000/api/employees

## API Routes

| Method | Route | Description |
|---|---|---|
| POST | /api/employees | Create a new employee |
| GET | /api/employees | Get all employees |
| GET | /api/employees/:id | Get one employee |
| PUT | /api/employees/:id | Update an employee |
| DELETE | /api/employees/:id | Delete an employee |

## Notes

MongoDB must be running locally. The local MongoDB connection string is stored in the backend .env file.