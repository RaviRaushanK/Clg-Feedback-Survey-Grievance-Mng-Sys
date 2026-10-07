# CampusVoice

College Feedback, Survey and Grievance Management System built with the MERN stack.

This repository currently contains Phase 1 only: project foundation, Express API setup, MongoDB connection configuration and a base React UI for role dashboard previews.

## Technology Stack

- Frontend: React, Vite, JavaScript, Bootstrap 5, Bootstrap Icons, React Router
- Backend: Node.js, Express.js, MongoDB, Mongoose, dotenv
- Architecture: MVC, service layer, REST API, React view layer

Expected request flow for future phases:

```text
React View -> REST API -> Route -> Controller -> Service -> Model -> MongoDB
```

## Folder Structure

```text
campusvoice/
|-- config/
|-- models/
|-- controllers/
|-- services/
|-- routes/
|-- middleware/
|-- validators/
|-- utils/
|   |-- dsa/
|   `-- constants/
|-- seeders/
|-- uploads/
|-- frontend/
|   |-- public/
|   `-- src/
|       |-- assets/
|       |-- components/
|       |-- layouts/
|       |-- pages/
|       |-- services/
|       |-- context/
|       |-- hooks/
|       |-- routes/
|       |-- utils/
|       |-- styles/
|       |-- App.jsx
|       `-- main.jsx
|-- tests/
|-- app.js
|-- server.js
`-- package.json
```

## Prerequisites

- Node.js 18 or newer
- npm
- MongoDB running locally, or a MongoDB connection string

## Installation

```bash
npm install
```

## Environment Setup

Create a `.env` file in the project root using `.env.example` as a guide:

```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/campusvoice
FRONTEND_ORIGIN=http://localhost:5173
VITE_API_BASE_URL=http://localhost:5000/api
```

Do not commit real secrets in `.env`.

## MongoDB Setup

For local development, start MongoDB and keep the default URI:

```text
mongodb://127.0.0.1:27017/campusvoice
```

If MongoDB runs elsewhere, update `MONGODB_URI` in `.env`.

## Run Backend

```bash
npm run dev:backend
```

Production backend start:

```bash
npm start
```

## Run Frontend

```bash
npm run dev:frontend
```

The Vite app runs at:

```text
http://localhost:5173
```

## Run Complete Development Environment

```bash
npm run dev
```

This starts the Express API and Vite frontend together.

## Health Endpoint

```text
GET /api/health
```

Expected response:

```json
{
  "success": true,
  "message": "CampusVoice API is running"
}
```

## Frontend Preview Routes

Temporary Phase 1 preview routes:

- `/`
- `/principal/dashboard`
- `/hod/dashboard`
- `/faculty/dashboard`
- `/student/dashboard`

These routes are intentionally unprotected until authentication is added in Phase 2.

## Phase 1 Scope

Implemented:

- Express app foundation
- Centralized environment configuration
- MongoDB connection module
- Health API route
- 404 and centralized error middleware
- React/Vite foundation
- Bootstrap 5 and Bootstrap Icons setup
- Shared application shell with sidebar, navbar and main content area
- Principal, HOD, Faculty and Student layout previews
- Reusable loading, alert, empty state and stat card components

Not implemented in Phase 1:

- Authentication
- JWT or cookies
- User models
- Role-based access control
- Feedback, complaints, surveys, suggestions or analytics business logic
- DSA feature implementations

## Future Phases

The next phase is Phase 2: Authentication, first-login password change, JWT/HTTP-only cookie authentication, role-based access control and real Principal/HOD/Faculty/Student protected dashboards.
