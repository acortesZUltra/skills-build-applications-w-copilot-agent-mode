# OctoFit Tracker

A modern multi-tier fitness tracking application with team management and competitive leaderboarding.

## Project Structure

```
octofit-tracker/
├── frontend/          # React 19 + Vite presentation tier
│   ├── src/
│   ├── package.json
│   └── vite.config.ts
└── backend/           # Node.js + Express API tier
    ├── src/
    ├── package.json
    └── tsconfig.json
```

## Technology Stack

### Frontend (Presentation Tier)
- **Framework**: React 19
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Styling**: Bootstrap 5
- **Port**: 5173

### Backend (Logic/API Tier)
- **Runtime**: Node.js (LTS)
- **Framework**: Express
- **Language**: TypeScript
- **ODM**: Mongoose
- **Port**: 8000

### Data Tier
- **Database**: MongoDB
- **Connection String**: `mongodb://localhost:27017/octofit-tracker`
- **Port**: 27017 (private)

## Features

- User authentication and profiles
- Activity logging and tracking
- Team creation and management
- Competitive leaderboard
- Personalized workout suggestions

## Setup Instructions

### Prerequisites
- Node.js (LTS)
- MongoDB
- npm or yarn

### Development

1. **Install frontend dependencies**
   ```bash
   npm install --prefix octofit-tracker/frontend
   ```

2. **Install backend dependencies**
   ```bash
   npm install --prefix octofit-tracker/backend
   ```

3. **Start MongoDB**
   ```bash
   mongod
   ```

4. **Start the backend server**
   ```bash
   npm run dev --prefix octofit-tracker/backend
   ```

5. **Start the frontend development server**
   ```bash
   npm run dev --prefix octofit-tracker/frontend
   ```

The application will be available at `http://localhost:5173`

## Port Configuration

- **Frontend**: 5173 (public)
- **Backend API**: 8000 (public)
- **MongoDB**: 27017 (private)

## Environment Variables

### Backend (.env)
```
PORT=8000
MONGODB_URI=mongodb://localhost:27017/octofit-tracker
NODE_ENV=development
```

See `.env.example` for the template.

## Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend
- `npm run dev` - Start development server with hot reload
- `npm run build` - Compile TypeScript
- `npm run start` - Run compiled application
- `npm run lint` - Run ESLint
