# 2DO LifeOS

A simple life management app built with Expo and React Native. The project now uses a modular tracker system aimed at helping people (especially those with ADHD) stay on top of important areas of life.

## Available trackers
- Reminders
- Budget tracking
- Expense tracking
- Habit tracking
- Career tracking
- Goals tracking
- Car tracking
- Home tracking
- Project tracking
- School tracking
- Workout schedule tracking
- Daily affirmations
- Weight tracking

Each tracker lives in the `trackers` directory and can be expanded independently. To add a new tracker simply create a component and export it through `trackers/index.js`.

## Running the app
Install dependencies and start Expo:

```bash
npm install
npm start
```

## Web frontend and Google Sheets backend
This repository now includes a simple password-protected web client that reads its password from a Google Sheet.

### Backend
1. Copy `backend/.env.example` to `backend/.env` and fill in your Google service account credentials and sheet ID.
2. Install dependencies and start the server:
   ```bash
   cd backend
   npm install
   npm start
   ```
   The server only accepts requests from iPhone user agents and checks the password stored in the sheet.

### Frontend
1. Install dependencies and run the development server:
   ```bash
   cd frontend
   npm install
   npm start
   ```
2. Visit `http://localhost:3000` from your iPhone and log in using the password stored in the sheet.
