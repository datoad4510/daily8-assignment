# Readme

This backend project is built using [Nest.js](https://nestjs.com/).

To start the backend server:

```
npm install
npx prisma generate
npm run start
```

## Database Model

- The Prisma schema for the User table is defined in `prisma/schema.prisma`.

## Authentication

- All code related to user registration and login is located in `src/auth`.

## Testing the API

You can test the authentication endpoints using Postman or with the following `curl` commands:

**Register:**
```sh
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email": "x@x.com", "password": "test123", "name": "My name"}'
```

**Login:**
```sh
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "x@x.com", "password": "test123"}'
```
