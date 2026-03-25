# Acquisitions API

A scalable, production-ready REST API built with Node.js and Express. Features user authentication, business listings, deal management, and security — fully containerized with Docker.

> 📺 Based on the [JavaScript Mastery](https://www.youtube.com/@javascriptmastery) YouTube tutorial.

---

## Tech Stack

- **Node.js & Express.js** — server and API routing
- **Neon PostgreSQL** — serverless database
- **Drizzle ORM** — database schema and migrations
- **JWT & bcrypt** — authentication and password hashing
- **Arcjet** — bot protection and rate limiting
- **Zod** — request validation
- **Winston** — logging
- **Docker** — containerization
- **Jest & SuperTest** — testing

---

## Features

- User authentication — signup, signin, signout
- Role-based access control — admin and user roles
- User management — create, read, update, delete
- Business listings — manage acquisition listings
- Deal management — create, accept, and reject deals
- Bot protection and rate limiting via Arcjet
- Request validation with Zod
- Structured logging with Winston
- Fully containerized with Docker

---

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org) v20+
- [Git](https://git-scm.com)
- [Docker Desktop](https://www.docker.com/products/docker-desktop)

### Clone & Install

```bash
[git clone https://github.com/pi8878/acquisitions.git]
cd acquisitions
npm install
```

### Environment Variables

Create a `.env` file in the root of the project:

```dotenv
PORT=3000
NODE_ENV=development
LOG_LEVEL=info

DATABASE_URL=        # from neon.tech
ARCJET_KEY=          # from app.arcjet.com
JWT_SECRET=          # any long random string
```

### Run

```bash
npm run dev
```

Server runs at [http://localhost:3000](http://localhost:3000)

---

## API Endpoints

### Auth
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/sign-up` | Register a new user |
| POST | `/api/auth/sign-in` | Login and get a token |
| POST | `/api/auth/sign-out` | Logout |

### Users
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/users` | Get all users (admin only) |
| GET | `/api/users/:id` | Get a user by ID |
| PUT | `/api/users/:id` | Update a user |
| DELETE | `/api/users/:id` | Delete a user (admin only) |

### Health
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/health` | Check if the API is running |

> Include your JWT token in protected requests:
> `Authorization: Bearer <your_token>`

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start with hot reload |
| `npm run start` | Start in production mode |
| `npm run db:migrate` | Run database migrations |
| `npm run db:studio` | Open database GUI |
| `npm run lint` | Check code for errors |
| `npm test` | Run tests |

---

## CI/CD
This project uses GitHub Actions for automated continuous integration and deployment.
On every push or pull request, the workflow automatically:

Installs dependencies
Runs the linter
Runs the test suite

The pipeline ensures code is always in a deployable state before merging.

Workflow files are located in .github/workflows/

## Docker

```bash
# Run development environment
docker compose -f docker-compose.dev.yml up --build
```

> Windows users: use **Git Bash** to run shell scripts, or run the docker command above directly in any terminal.

---

## License

ISC
