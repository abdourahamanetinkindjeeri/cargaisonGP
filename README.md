# Mini Project Auth (PHP pages + Node.js API + TS client)

Structure:
- backend/: Node.js TypeScript API (no Express)
- data/db.json: user data
- routes/: PHP pages served by PHP built-in server (login.php, index.php, dashboard.php)
- public/login.js: compiled client JS (from frontend/login.ts)

## Prerequisites
- Node.js (>=16)
- npm
- PHP (for serving PHP pages)

## Install & Run backend
```bash
cd backend
npm install
# start with ts-node (dev)
npx ts-node src/index.ts
# or compile then run:
# npx tsc
# node dist/index.js
```

Backend API will listen on http://localhost:4000

## Serve PHP pages
From project root run:
```bash
php -S localhost:8000 -t .
```
Then open: http://localhost:8000/routes/login.php

## Notes
- The client TypeScript source is in frontend/login.ts. The compiled file public/login.js is already included.
- If you want to recompile the client TS, run:
```bash
npx tsc --target ES6 --outDir public frontend/login.ts
```
