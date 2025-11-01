# DataCube Solutions Monorepo

This repository contains the source code for the DataCube Solutions platform. It is a monorepo that includes a Next.js frontend, multiple backend microservices, and shared libraries.

## Architecture

The platform is built on a microservices architecture, with a Next.js frontend that communicates with the backend services via a REST API. Supabase is used for authentication, real-time data, and storage.

### Frontend

The frontend is a Next.js application located in the `frontend` directory. It uses TypeScript, Tailwind CSS, and the Supabase client library.

### Backend

The backend is composed of multiple microservices, each with its own database and API. The services are located in the `backend/services` directory. Each service follows the principles of clean architecture.

- **Users Service:** Manages user data and authentication.
- **Products Service:** Manages product information.
- **Orders Service:** Manages customer orders.

### Shared Libraries

The `shared` directory contains common utilities, types, and libraries that are reused across the frontend and backend services.

## Getting Started

To get started with the project, you will need to have Docker and Node.js installed.

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-org/datascube-solutions.git
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Set up environment variables:**

   Copy the `.env.example` file to a new file named `.env` and fill in the required values.

   ```bash
   cp .env.example .env
   ```

4. **Run the development environment:**

   ```bash
   docker-compose up --build
   ```

This will start the frontend and all of the backend services. The frontend will be available at `http://localhost:3000`.

## CI/CD

The project uses a CI/CD pipeline to automate the building, testing, and deployment of the services. The pipeline is defined in the `scripts` directory.

## Branching Strategy

The project uses a Trunk-Based Development model. Please refer to the `CONTRIBUTING.md` file for more details on the branching strategy.
