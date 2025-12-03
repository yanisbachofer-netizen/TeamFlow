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
| Yanis Gaoui | | Frontend Taskboard page. |
| Hugo Boizet | | Frontend Users page. |
| Eudes Peyrouny Mazeau | | Frontend Messages page. |
| Damien Desmons | desmonsdamien03-hue / desmons_damien20250071S | TailwindCSS Styling. |
| Garance Poignart | gpoignart / GarancePoignart_20250009S | Setup Backend entrypoint, models and database. Backend Messages API. |
| Gauthier Humeau |  | Backend Authentification. Backend Login Management API. |
| Clément Nicole | Clementncl / Clément Nicole 20250054S | Backend User Management API. |
| Faustine Picavet | | Backend Task Management API. |
| | | Backend Task Filters API. |
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
