# TeamFlow

TeamFlow is a collaborative web application to help teams plan, track, and manage projects efficiently.  
This repository contains both the **backend** (Node.js + Express + Lowdb) and the **frontend** (React + TailwindCSS).

## Project Structure

```
teamflow/
├── backend/                    # Backend folder (Node.js + Express + Lowdb)
│   ├── package.json        # Project dependencies and scripts
│   ├── app.js                    # Main server entry point: initializes DB and registers all routes
│   ├── db.js                      # Lowdb database configuration and initialization
│   ├── db.json                  # Lowdb storage file (JSON database)
│   ├── models/                 # Data models (classes)
│   │   ├── User.js                   # User class
│   │   ├── Task.js                   # Task class
│   │   ├── Message.js            # Message class
│   ├── routes/                   # Express routes (endpoints)
│   │   ├── auth.js                   # JWT endpoint (login)
│   │   ├── users.js                  # User endpoints (create, list, update)
│   │   ├── tasks.js                  # Task endpoints (create, list, update, delete)
│   │   ├── messages.js          # Team messages endpoints (send, list)
│   │   └── stats.js                  # Stats endpoints (tasks count, completed tasks, active users)
│   └── utils/                      # Helper functions / middleware
│       └── auth.js                  # JWT authentication helpers
├── frontend/                             # Frontend folder (React + TailwindCSS)
│   ├── package.json                     # Project dependencies and scripts
│   ├── tailwind.config.js                # Tailwind configuration
│   ├── postcss.config.js                # PostCSS configuration
│   └── src/
│       ├── main.jsx                     # React entry point
│       ├── App.jsx                      # Main layout and routing between pages
│       ├── pages/                       # Main pages corresponding to app features
│       │   ├── Login.jsx                     # Login page
│       │   ├── Dashboard.jsx            # Dashboard page showing statistics overview
│       │   ├── Tasks.jsx                     # Task board page (list, filters, status updates)
│       │   ├── Users.jsx                     # Page listing all users
│       │   ├── Messages.jsx              # Internal team chat page
│       ├── components/              # Reusable UI components
│       │   ├── TaskCard.jsx                # Component for displaying a task
│       │   ├── UserCard.jsx                # Component for displaying a user
│       │   ├── MessageCard.jsx         # Component for displaying a chat message
│       ├── services/                     # API and helper functions
│       │   ├── api.js                             # Wrapper for calls to backend
│       │   └── auth.js                           # Login/logout and JWT helper functions
│       └── styles/                         # Styling
│           └── global.css                       # Global Tailwind/utility CSS
│
└── README.md                       # Project description and instructions
```

## Prerequisites

- Node.js and npm

## Setup Instructions

### Clone the repository

```bash
git clone git@github.com:gpoignart/TeamFlow.git
cd TeamFlow
```

### Backend Setup

```bash
cd backend
npm install
```

- Installs dependencies
- `db.json` will be created automatically on first run

#### Start the backend

```bash
npx nodemon app.js
```

- Server runs on `http://localhost:5000` by default

### Frontend Setup

```bash
cd ../frontend
npm install
```

- Installs dependencies

#### Start the frontend

```bash
npm start
```

- Runs React app on `http://localhost:3000`
- Make sure the backend is running to fetch data from API
