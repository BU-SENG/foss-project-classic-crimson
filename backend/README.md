# 📱 MOOD BOARD BACKEND

A RESTful backend for a Mood Board application, built with Express and powered by a PostgreSQL database.

---

## 🚀 Features

- 🧠 Typed logic with TypeScript
- 🔐 JWT authentication
- 🧑 User Sign up & login, 
- 📝 CRUD - Create, View, Edit, and Delete Database Entry,
- 🚫 Rate Limiting in login route to avoid brute force attacks
- 🔌 RESTful API architecture
- 🛡️ Input validation and error handling

---


## 🛠️ Tech Stack

- 🟦 Node.js + Express
- 🍃 PostgreSQL + Prisma
- 🔑 JWT for authentication
- 🌐 CORS for secure cross-origin requests

---

## 📁 Project Structure

src/

- ├── config/ // Database connection
- ├── controllers/ // Route handlers
- ├── middlewares/ // Auth Verification
- ├── types/ //Type declarations
- ├── routes/ // Express routers
- ├── utils/ // Helper functions
- ├── app.ts //Express App Initialization  
- └── server.ts // Server Entry Point

## 📬 API Endpoints

**AUTH**

POST /api/auth/register - Create user accounts

POST /api/auth/login — Login 

POST /api/auth/refresh-token -Get Refresh token

**POSTS**
POST /api/posts - Create a Post

GET /api/posts - Get All Posts

GET /api/posts/:postId - Get a Post

DELETE /api/posts/:postId - Delete a Post


**COMMENTS**

GET /api/posts/:postId/comments — Get Comments for a post

POST /api/posts/:postId/comment — Post a Comment

DELETE /api/posts/:postId/:commentId — Delete A Comment


**LIKES**

POST /api/posts/:postId/like — Like a Post

DELETE /api/posts/:postId/unlike — Unlike a Post

GET /api/posts/:postid/liked — Check if User Liked

GET /api/posts/:postId/likes — Get Likes for a Post


**NOTIFICATIONS**

GET api/notifications/ - Get Notifications for a User

PATCH /api/notifications/:notificationId/read - Mark Notification as Read

PATCH /api/notifications/read-all - Read all Notifcations

DELETE /api/notifications/:notifications/:notificationId - Delete a Notification


