# TeamFlow

TeamFlow is a collaborative web application to help teams plan, track, and manage projects efficiently.  
This repository contains both the **backend** (Node.js + Express + Lowdb) and the **frontend** (React + TailwindCSS).

## Project Objective

- Provide a secure project management platform for teams.
- Allow authenticated users to create, update, and filter tasks, and to view them in a task board.
- Allow authenticated users to update their informations in their users page.
- Allow authenticated users to use the team messaging feature.

## Team Members & Assigned Roles

| Name               | GitHub Account                     | Role |
|-------------------|----------------------------------|------|
| Clément Pitrat | ClementPitrat / Clément Pitrat 20250076S | Setup Frontend entrypoint and App. |
| | | Frontend Login page. |
| Pacal Arnold | | Frontend Dashboard page. |
| Yanis Gaoui | ultimatoros-hash / Yanis Gaoui 20250073S | Frontend Taskboard page + Backend Task Filters API |
| Hugo Boizet | | Frontend Users page. |
| Eudes Peyrouny Mazeau | | Frontend Messages page. |
| Damien Desmons | desmonsdamien03-hue / desmons_damien20250071S | TailwindCSS Styling. |
| Garance Poignart | gpoignart / GarancePoignart_20250009S | Setup Backend entrypoint, models and database. Backend Messages API. |
| Gauthier Humeau | ghumeau04 / Gauthier Humeau 20250074S | Backend Authentification. Backend Login Management API. |
| Clément Nicole | Clementncl / Clément Nicole 20250054S | Backend User Management API. |
| Faustine Picavet | | Backend Task Management API. |
| | | Backend Statistics API. |

## Installation & Usage Guide

### Prerequisites

- Node.js and npm

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

- Install all dependencies.

#### Start the backend

```bash
npx nodemon app.js
```

- Server runs on \`http://localhost:5000\`.

### Frontend Setup

```bash
cd ../frontend
npm install
```

- Install all dependencies.

#### Start the frontend

```bash
npm start
```

- React app runs on \`http://localhost:3000\`.  
- Ensure the backend is running for API calls.

## Frontend Entrypoint & Login Page

The frontend entrypoint of TeamFlow is based on the files main.jsx and App.jsx, which initialize the React application and set up the global routing structure.
This includes the navigation between the main pages of the project: Login, Dashboard, Tasks, Users, and Messages.
This setup provides the foundation on which the rest of the frontend will be developed.

### Login Page (Home Screen)

The home screen of the application is the Login page, where users will authenticate before accessing the application.
I created the initial structure of this page, which includes a basic layout and placeholder content.
This prepares the UI for the future integration of the authentication logic (JWT) handled by the backend and the corresponding frontend services.

This work establishes the starting point of the user experience and enables the rest of the frontend to be implemented smoothly.

### Users Page

The Users page allows team members to view and manage user information inside the application.  
The initial structure has been implemented: displaying the user list, accessing individual profile details, and integrating navigation with the main sections (Login, Dashboard, Taskboard, Messages).  

This first version prepares the integration of profile update features (editing personal information, role, and active status) and future administration actions.  
It acts as the foundation of the user management module, designed to work consistently with the dedicated backend API.


# TailwindCSS — Initial Setup

The TailwindCSS styling part has been initialized.
For now, only the basic environment has been prepared to start the UI work later.

## Current progress :

TailwindCSS is installed and correctly linked to the React project.

A first exploration of the project’s pages has been done to plan the upcoming styling tasks.

Early tests of component styling have been made (colors, spacing, layout structure).

## Next steps :

Define a small set of reusable utility classes to ensure consistency.

Coordinate with the frontend page owners before applying UI changes.

Start styling the Login and Dashboard pages once their structure is finalized.

This section will be updated as the design progresses.
