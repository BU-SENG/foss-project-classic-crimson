# Contributing to Moodboard 🎨

First off, thank you for your interest in contributing to Moodboard! 🎉

We're building a platform for sharing quotes and expressing moods visually, and we're excited to have you on board. Contributions aren't limited to code—you can improve documentation, design, UI/UX, or even add new features. Every contribution matters! 🚀

---

## 📋 Table of Contents

- [Project Setup](#%EF%B8%8F-project-setup)
  - [Prerequisites](#prerequisites)
  - [Database Setup](#database-setup)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [How to Contribute](#-how-to-contribute)
- [Branch and PR Flow](#-branch-and-pr-flow)
- [Commit Message Style](#-commit-message-style)
- [Contribution Guidelines](#-contribution-guidelines)
- [What You Can Contribute](#%EF%B8%8F-what-you-can-contribute)
- [Code of Conduct](#-code-of-conduct)

---

## 🛠️ Project Setup

This project consists of two main components:
- **Backend**: Node.js/Express API with PostgreSQL
- **Frontend**: React application

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Git** - [Download & Install Git](https://git-scm.com/downloads)
- **Node.js** (v16 or higher) and **npm** - [Download & Install Node.js](https://nodejs.org/)
- **PostgreSQL** - [Download & Install PostgreSQL](https://www.postgresql.org/download/)
- **VSCode** (recommended) - [Download & Install VSCode](https://code.visualstudio.com/)
- **PgAdmin** (optional, for database visualization) - [Download & Install PgAdmin](https://www.pgadmin.org/download/)

### Backend Setup

Follow these steps to set up the backend locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/BU-SENG/foss-project-classic-crimson
   cd foss-project-classic-crimson
   ```

2. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Configure environment variables:**
   - Create a `.env` file in the backend directory
   - Add the following configuration:
   
   ```env
   DATABASE_URL="postgresql://postgres:{yourpassword}@localhost:5432/moodboard"
   JWT_SECRET="supersecretkey"
   PORT=5000
   ```
   
   **Important:** Replace `{yourpassword}` with your actual PostgreSQL password.The PostgreSQL port in the DATABASE_URL (default 5432) must match the port configured on your machine. If you changed the default port during PostgreSQL installation, update it accordingly

5. **Run database migrations** (if applicable):
   ```bash
   # Check if there are migration scripts in package.json
   npx prisma migrate dev --name {migration_name}
   ```

6. **Start the backend server:**
   ```bash
   npm start
   ```
   
   The API will be available at `http://localhost:5000`

**Backend Dependencies:**
- Node.js - JavaScript runtime
- Express - Web framework
- PostgreSQL - Database
- JWT - Authentication

### Frontend Setup

Follow these steps to set up the React frontend locally:

1. **Navigate to the frontend directory:**
   ```bash
   cd my-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   
   The application will be available at the URL shown in your terminal (typically `http://localhost:5173`)

4. **Build for production** (optional):
   ```bash
   npm run build
   ```

### Running the Full Application

To run the complete application, you need **both servers running simultaneously**:

1. **Terminal 1 (Backend):**
   ```bash
   cd backend
   npm start
   ```

2. **Terminal 2 (Frontend):**
   ```bash
   cd my-app
   npm run dev
   ```

3. **Access the application** in your browser at the URL provided by the frontend server.

---

## 📌 How to Contribute

1. **Fork the repository**

   * Click the **Fork** button (top-right corner of this repo).

2. **Clone your fork**

   ```bash
   git clone https://github.com/YOUR-USERNAME/foss-project-classic-crimson
   cd foss-project-classic-crimson
   ```

3. **Create a new branch**

   * Branch names should be descriptive.

   ```bash
   git checkout -b fix/typo-in-readme
   # or
   git checkout -b feature/add-mood-filter
   ```

4. **Make your changes**

   * Follow the project's coding style
   * Test your changes thoroughly
   * Ensure both frontend and backend work correctly
   * Update documentation if needed

5. **Commit your changes**

   ```bash
   git add .
   git commit -m "feat: add mood filtering functionality"
   ```

6. **Push your branch**

   ```bash
   git push origin feature/add-mood-filter
   ```

7. **Open a Pull Request (PR)**

   * Go to the original repo and click **New Pull Request**
   * Clearly describe your contribution
   * Reference any related issues

---

## 🌿 Branch and PR Flow

### Branch Naming Convention

Use descriptive branch names that clearly indicate the purpose of your changes:

- **Feature branches**: `feature/description-of-feature`
  - Example: `feature/add-mood-categories`
  
- **Bug fixes**: `fix/description-of-bug`
  - Example: `fix/login-authentication-error`
  
- **Documentation**: `docs/description-of-change`
  - Example: `docs/update-setup-instructions`
  
- **UI/Design**: `ui/description-of-change`
  - Example: `ui/improve-mood-card-layout`
  
- **Refactoring**: `refactor/description-of-refactor`
  - Example: `refactor/optimize-database-queries`
  
- **Chores** (dependency updates, config changes): `chore/description`
  - Example: `chore/update-dependencies`

### Pull Request Process

1. **Before creating a PR:**
   - Ensure your code works locally without errors
   - Test both backend and frontend
   - Make sure PostgreSQL database is properly configured
   - Update documentation if you added new features
   - Ensure your branch is up to date with main

2. **Creating a PR:**
   - Use a clear and descriptive title
   - Provide a detailed description of what your PR does
   - Reference any related issues (e.g., "Closes #123")
   - Add screenshots/videos if your changes affect the UI
   - List any breaking changes
   - Request review from maintainers

3. **PR Review Process:**
   - Maintainers will review your PR
   - Address any feedback or requested changes
   - Once approved, your PR will be merged
   - Delete your feature branch after merging

4. **Keep your fork updated:**
   ```bash
   # Add upstream remote (only needed once)
   git remote add upstream https://github.com/BU-SENG/foss-project-classic-crimson.git
   
   # Fetch and merge changes from upstream
   git fetch upstream
   git checkout main
   git merge upstream/main
   git push origin main
   ```

---

## 💬 Commit Message Style

We follow the **Conventional Commits** specification for clear and consistent commit messages.

### Format

```
<type>(<scope>): <subject>

<body> (optional)

<footer> (optional)
```

### Types

- **feat**: A new feature
  - Example: `feat(frontend): add mood board filtering`
  
- **fix**: A bug fix
  - Example: `fix(backend): resolve JWT authentication issue`
  
- **docs**: Documentation changes
  - Example: `docs(readme): update installation instructions`
  
- **style**: Code style changes (formatting, missing semicolons, etc.)
  - Example: `style(frontend): format components with prettier`
  
- **refactor**: Code refactoring without changing functionality
  - Example: `refactor(backend): simplify database queries`
  
- **test**: Adding or updating tests
  - Example: `test(api): add unit tests for mood endpoints`
  
- **chore**: Maintenance tasks, dependency updates
  - Example: `chore(deps): update react to latest version`
  
- **perf**: Performance improvements
  - Example: `perf(backend): optimize mood post loading`

### Examples

**Good commit messages:**
```bash
feat(frontend): add mood category selector
fix(backend): correct quote validation logic
docs(contributing): add branch naming conventions
refactor(api): improve error handling in auth routes
chore(deps): update express to v4.18.2
ui(frontend): improve mood card responsive design
```

**Bad commit messages:**
```bash
update stuff
fixed bug
changes
asdf
Update README.md
working on feature
```

### Guidelines

- Use the imperative mood ("add" not "added" or "adds")
- Keep the subject line under 50 characters
- Capitalize the first letter of the subject
- Don't end the subject line with a period
- Use the body to explain **what** and **why**, not **how**

---

## ✅ Contribution Guidelines

* Only **quality PRs** will be merged (no spam)
* Each PR should focus on **a single change/feature**
* Test your changes with both frontend and backend running
* Ensure PostgreSQL database is properly configured
* Add proper documentation/comments where necessary
* Follow the existing code style and structure
* Be respectful and constructive in reviews/discussions
* Update the README if you add new features or change setup steps

### Code Quality Standards

- Write clean, readable, and maintainable code
- Use meaningful variable and function names
- Add comments for complex logic
- Handle errors appropriately
- Validate user inputs
- Follow React best practices for frontend
- Follow Node.js/Express best practices for backend
- Ensure database queries are optimized

---

## 🏷️ What You Can Contribute

### Code Contributions
* Add new mood categories or themes
* Implement mood filtering and search functionality
* Improve authentication and authorization
* Add user profile features
* Enhance the mood board UI/UX
* Optimize database queries
* Add API endpoints for new features

### Non-Code Contributions
* Fix typos, grammar, or improve documentation
* Design new UI components or layouts
* Create user guides or tutorials
* Suggest and design new features
* Report bugs with detailed reproduction steps
* Improve accessibility features
* Add internationalization (i18n) support

### Feature Ideas
* Mood analytics and insights
* Social features (follow users, like posts)
* Mood themes and customization
* Export/share mood boards
* Mobile responsive improvements
* Dark mode support
* Notifications system

---

## 🐛 Reporting Bugs

When reporting bugs, please include:

1. **Description**: Clear description of the bug
2. **Steps to Reproduce**: Detailed steps to reproduce the issue
3. **Expected Behavior**: What you expected to happen
4. **Actual Behavior**: What actually happened
5. **Screenshots**: If applicable
6. **Environment**: 
   - OS (Windows/Mac/Linux)
   - Node.js version
   - PostgreSQL version
   - Browser (for frontend issues)

---

## 💡 Suggesting Features

We welcome feature suggestions! Please:

1. Check if the feature has already been suggested
2. Clearly describe the feature and its benefits
3. Explain use cases
4. Add mockups or examples if possible
5. Open an issue with the label "enhancement"

---

## 📜 Code of Conduct

We follow the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/).

By participating, you agree to uphold a welcoming and inclusive environment. We expect all contributors to:

- Be respectful and inclusive
- Welcome newcomers and help them get started
- Accept constructive criticism gracefully
- Focus on what is best for the community
- Show empathy towards other community members

---

## 🙏 Thank You!

Thank you for contributing to Moodboard! Your efforts help make this platform better for everyone. If you have any questions, feel free to open an issue or reach out to the maintainers.

Happy coding! 🎨✨