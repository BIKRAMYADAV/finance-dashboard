# Finance Dashboard Backend
## Overview
A backend system for a finance dashboard that manages users, financial records and gives summary analysis.
It demonstrates backend design, API structuring, role-based access control and data processing.

## Features
- User and role management
    1. create users
    2. assign roles: viewer, analyst or admin
    3. update status: active or incative
    4. role based access control
- Financial records management
    1. create, read, update, delete financial records
    2. filter records by type, category or date
    3. role based access management to records
- Dashboard summary
    1. total income, expenses and net balance aggregated in one route
    2. access only for admin and analysts
    3. category wise breakdowns and recent transactions fetched
- Access control
    1. viewer - read only
    2. analyst - read + analytics
    3. admin - complete access
- Validation & error handling
    1. required field validation
    2. proper http status codes
    3. error handling for different inappropriate operations

## Tech Stack
    * Node.js
    * Express.js
    * MongoDB
    * Mongoose

## Project Structure
    src/
        models/         #database schemas
        controllers/    #business logic
        routes/         #API routes
        middlewares/    #auth and role checks
        config/         #database config and setup
        express-app.js  #app setup

## Setup 
    1. Clone Repository
        git clone <your-repo-link>
        cd finance-dashboard
    2. Install Dependencies
        npm install
    3. Setup Environment Variables

        Create .env file:

            PORT=3000
            MONGO_URI=your_mongodb_connection_string
    4. Run
        npm start
        
## API endpoints
    1. Users
        * POST /users  -> create users
        * GET /users   -> get all users
        * PATCH /users/:id  -> update role/status
    2. Records
        * POST /records → Create record
        * GET /records → Get records (with filters)
        * PATCH /records/:id → Update record
        * DELETE /records/:id → Delete record
    3. Dashboard summary
        * GET /dashboard/summary -> Get financial summary

## Query parameters
    /records?type=INCOME 
    /records?category=Food 
    /records?startDate=2026-01-01&endDate=2026-04-01

## Mock Authentication
    This project uses a mock authentication middleware:

    req.user = {
    id: "<USER_ID>",
    role: "ADMIN"
                }
        In production, this would be replaced with JWT-based authentication.

