[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/tfYzIujW)

# Backend Testing 🎨

A platform for sharing quotes and expressing moods visually. Connect with others through shared feelings and self-expression.

## Prerequisites

Node.js (LTS version recommended)

A running database instance (e.g., PostgreSQL, MySQL, SQLite) configured in prisma/schema.prisma.

## Setup and Installation🛠️
Install Dependencies:

npm install


Configure Environment:
Ensure you have a .env file in the root of the backend directory containing your DATABASE_URL and any other required secrets.

Generate Prisma Client:
This command reads your prisma/schema.prisma file and generates the TypeScript client required to interact with your database. Always run this after installing dependencies or making changes to the schema.

npx prisma generate

## Testing 🚀
The backend uses Jest with ts-jest for unit and integration testing.

To run the full test suite:

npm test


⚙️ Troubleshooting Testing Configuration

Module Resolution: The test configuration has been adjusted to handle path mapping and ensure tests can find modules correctly (e.g., import app from './app').

ESM/CommonJS: The jest.config.js is configured to force ts-jest to output CommonJS modules, resolving the SyntaxError: Cannot use import statement outside a module error.

1. **Clone the project.** Open your terminal and use the following command:
   ```bash
   https://github.com/BU-SENG/foss-project-classic-crimson
   ```

2. **Open the "foss-project-classic-crimson" folder** in VS Code (or your preferred code editor)

3. **Set up PostgreSQL database**.
   - Create a new database in PostgreSQL.
   - Note your database connection details.

4. **Configure the backend:**
   - Navigate to the backend folder
   - Create a file named ".env"
   ```bash
   DATABASE_URL="postgresql://postgres:{yourpassword}@localhost:5432/moodboard"
   JWT_SECRET="supersecretkey"
   PORT=5000
   ```
   - **Note:** Make sure you have created a database named "moodboard" in PostgreSQL

5. **Start the backend server:**
   - Open a terminal in the project directory and navigate to the backend folder
   ```bash
   cd backend
   npm install
   npm start
   ```
   

A list of technologies used in this backend service:

#nodejs

#express

#typescript

#prisma

#orm

#jest

#postgresql


## THINGS TO NOTE 📝

- `npm install` installs the dependencies
- `npm run dev` starts the development server for the frontend
- `npm start` runs the backend server
- Make sure PostgreSQL is running before starting the backend
- Ensure both frontend and backend servers are running simultaneously

## PROJECT STRUCTURE 📁

```
foss-project-classic-crimson/
├── backend/          # Backend server files
├── my-app/           # Frontend application
└── README.md         # Project documentation
```
