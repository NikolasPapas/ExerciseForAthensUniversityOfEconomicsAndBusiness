# ExerciseForAthensUniversityOfEconomicsAndBusiness

University exercise — first stage of a mechanic-shop web app (cars & motorcycles). The app manages users/owners, vehicles, insurance and repairs.

## Tech Stack

- Front-end: Angular 20
- Back-end: Node.js (Node 24)
- Database: MongoDB 7
- Containers: Docker / docker-compose
- Dev tooling: mongo-express (DB web UI)

## Architecture & Patterns

- Domain-Driven Design (DDD)
- Model-First Approach
- 3-layer architecture (routes/controllers → services → repositories)
- Authentication & Authorization

## Repository Layout (high level)

- [BackEnd](BackEnd) — Node.js API, services, repositories, models and routes
- [FrontEnd](FrontEnd) — Angular 20 application
- [DB](DB) — mongo-compose / Dockerfiles
- [Postman](Postman) — Postman collection and environment
- `docker-compose.yml` — compose stack for local development

## Ports (development / Docker)

- MongoDB: `27017`
- mongo-express: `8081`
- Backend API: `4000`
- Frontend (Angular dev server): `4200`

## Quick Start (Docker)

1. From repository root, build and start everything with docker-compose:

```bash
docker-compose up --build
# or run in background
docker-compose up -d --build
```

Then: run initDB request from postman to set initial data on DB
Test User: admin Pass: admin

2. Services will be available on the ports listed above. Common addresses:

- Frontend: http://localhost:4200
- Backend API: http://localhost:4000
- mongo-express: http://localhost:8081

## Local Development (optional)

Backend (example):

```bash
cd BackEnd
npm install
# check available scripts in BackEnd/package.json (e.g. "start" or "dev")
npm run start
```

Frontend (example):

```bash
cd FrontEnd
npm install
# if Angular CLI installed globally:
ng serve --open
# or use configured npm script: npm run start
```

Note: check `BackEnd/dev.env` and `FrontEnd/src/environments` for environment variables used by each service.

## Postman

Postman collection and environment are included in the `Postman` folder:

- [Postman/ExerciseForAthensUniversityOfEconomicsAndBusiness.postman_collection.json](Postman/ExerciseForAthensUniversityOfEconomicsAndBusiness.postman_collection.json)
- [Postman/ExerciseForAthensUniversityOfEconomicsAndBusiness.postman_environment.json](Postman/ExerciseForAthensUniversityOfEconomicsAndBusiness.postman_environment.json)

Load those into Postman to test API endpoints. The backend contains routes under `BackEnd/src/routes` (including `auth.routes.js`).

## Notes

- This project is an academic exercise and intentionally focuses on the first stage of the application.
- The backend follows a 3-layer pattern: route handlers → services → repositories, implemented with a model-first approach.
- Authentication and authorization are implemented in the API (see `BackEnd/src/routes/auth.routes.js`).

## License

No license (proprietary for the course exercise).
