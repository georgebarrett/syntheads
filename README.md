📦 Syntheads

Full-Stack TypeScript E-Commerce Platform
Built back-to-front with modern, in-demand technologies.

🎯 Project Goal

Build a production-ready full-stack TypeScript application that demonstrates:

Clean architecture

Domain-driven thinking

Secure authentication

REST API design

Database modelling

Testing

Deployment readiness

Modern frontend patterns

This is not a tutorial clone.
This is an employability project.

🧠 Tech Stack (Most Employable 2026 UK Market)
🔹 Frontend

React 18+

TypeScript (strict mode)

Vite

React Router

TanStack Query (server state)

Zustand (light global state)

Tailwind CSS

Vitest (testing)

🔹 Backend

Node.js

Express

TypeScript (strict)

Prisma ORM

PostgreSQL

JWT authentication

Bcrypt (password hashing)

Supertest + Vitest (API testing)

🔹 DevOps / Infra

Docker

Railway / Render (initial deploy)

GitHub Actions (optional CI)

Environment variable configuration

Proper project structure

🏗 Architecture Philosophy

We are building this back-to-front.

Meaning:

Domain modelling

Database schema

Authentication

Core business logic

API testing

Frontend

Deployment polish

Frontend is last.

This ensures:

Clean data design

Stable API contracts

Real architectural thinking

🧱 Build Order (Methodical Phases)
Phase 1 — Domain Design

Define:

User

Product

Category

Cart

Order

OrderItem

Role (admin / customer)

No code yet. Just modelling.

Phase 2 — Database (Prisma + Postgres)

Write schema.prisma

Define relationships

Run migrations

Seed database

Phase 3 — Authentication

Register route

Login route

Password hashing (bcrypt)

JWT token generation

Auth middleware

Role-based access control

Phase 4 — Core API

Product CRUD (admin protected)

Public product listing

Cart logic

Order creation

Checkout flow

Error handling patterns

Phase 5 — Testing

Auth tests

Product tests

Order tests

Integration testing with Supertest

Phase 6 — Frontend

Auth UI

Product listing

Product page

Cart

Checkout

Admin dashboard

Phase 7 — Production Polish

Docker setup

Environment configs

Logging

Deployment

README refinement

🔐 Authentication Strategy

We are using:

JWT access tokens (short expiry)

Stateless auth

Auth middleware

Role-based access control

No session storage.
No magic auth frameworks.

Manual implementation for interview strength.

📂 Repo Structure (Planned)

We will likely use a monorepo structure:

syntheads/
  backend/
  frontend/
  docker/
  README.md
🧭 Purpose of This Project

This project should allow me to confidently say:

"I designed and built a full-stack e-commerce system using React, TypeScript, Node, Express, Prisma and PostgreSQL. It includes authentication, role-based access control, testing, and containerised deployment."

🧠 Context for Future Chat Threads

If starting a new thread, assume:

I am a developer with ~3.5 years commercial experience.

Background: Django backend + TypeScript frontend.

Goal: Become highly employable as a full-stack TypeScript engineer.

We are building Syntheads back-to-front.

Architecture clarity is more important than rushing UI.

I care about understanding, not copying tutorials.

🚀 Current Status

Project just initialised.
Empty repo.
Starting Phase 1: Domain modelling.
