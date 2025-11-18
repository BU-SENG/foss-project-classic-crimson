[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/tfYzIujW)

# MOODBOARD 🎨

A platform for sharing quotes and expressing moods visually. Connect with others through shared feelings and self-expression.

## FEATURES 📲

- Sign up / Login
- Create and share mood posts with quotes
- Visual mood expression
- Connect with others through shared feelings
- Personalized mood boards

## TOOLS USED 🛠️

You need to have all these installed for everything to work fine:

- **Node.js** - JavaScript run-time environment
- **PostgreSQL** - Structured Database
- **VSCode** - Integrated Development Environment
- **PgAdmin** - To visualize the PostgreSQL database

## HOW TO USE THIS REPO 🚀

1. **Clone the project.** Open your terminal and use the following command:
   ```bash
   git clone https://github.com/tireddev24/moodboard_411
   ```

2. **Open the "moodboard_411" folder** in VS Code (or your preferred code editor)

3. **Set up PostgreSQL database**
   - Create a new database in PostgreSQL
   - Note your database connection details

4. **Configure the backend:**
   - Navigate to the backend folder
   - Create a file named ".env"
   ```bash
   DATABASE_URL="postgresql://postgres:{11111112}@localhost:5432/moodboard"
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

6. **Start the frontend server:**
   - Open a new terminal in the same project directory and navigate to the frontend folder
   ```bash
   cd my-app
   npm install
   npm run dev
   ```

7. **View the application** in the browser with the link provided in the terminal

## THINGS TO NOTE 📝

- `npm install` installs the dependencies
- `npm run dev` starts the development server for the frontend
- `npm start` runs the backend server
- Make sure PostgreSQL is running before starting the backend
- Ensure both frontend and backend servers are running simultaneously

## PROJECT STRUCTURE 📁

```
moodboard_411/
├── backend/          # Backend server files
├── my-app/           # Frontend application
└── README.md         # Project documentation
```
