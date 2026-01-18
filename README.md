# Foodio – Restaurant Ordering System
## A full-stack restaurant ordering system built with Next.js (Frontend) and NestJS (Backend) using JWT authentication with HttpOnly cookies and role-based access control.
### Tech Stack:
- Next.js
- TypeScript
- Tailwind CSS
- DaisyUI
- Axios & middleware

### Backend:
- NestJS
- TypeORM
- PostgreSQL
- JWT Authentication (HttpOnly Cookies)

### Project Structure
Foodio-Restaurant-Ordering-System/
- │
- ├── frontend/   # Next.js application
- └── backend/    # NestJS application

## 1. Backend Setup & Run (NestJS):
```
cd backend
```
----
## 2. Install dependencies
```
npm install
```
----

### Run the backend server:
```
npm run start:dev
```
### Backend will run at: : http://localhost:4000 - at port 4000

### Frontend Setup & Run (Next.js)
```
cd frontend
```
### 1.Install dependencies : 
```
npm install
```
### 3.Configure Environment Variables
```
NEXT_PUBLIC_API_URL = http://localhost:4000
```
### 4.Run the frontend server:
```
npm run dev
```
### Fronend runs at : http://localhost:3000


