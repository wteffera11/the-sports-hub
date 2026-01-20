# The Sports Hub

A modern sports dashboard application built with React, TypeScript, and Vite that displays live and upcoming sports events/matches with detailed match information.

## Features

- 🏆 **Sports Events Dashboard** - View current and upcoming matches across different leagues
- 📅 **Date Filtering** - Browse matches by specific dates
- ⚡ **Live Match Updates** - Real-time match status and scores with 15-second auto-refresh
- 📊 **Match Details** - Detailed match information including events timeline
- 🎨 **Responsive Design** - Mobile-first design with Tailwind CSS
- 🔍 **Match Filtering** - Filter by All, Live, or Favorite matches

## Tech Stack

### Frontend
- **React >19** - UI framework with TypeScript
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing
- **TanStack Query** - Server state management and caching
- **Tailwind CSS** - Utility-first CSS framework

### Development Tools
- **Biome** - Code formatting and linting
- **Commitlint** - Commit message linting
- **Lefthook** - Git hooks management
- **TypeScript** - Type safety

## Project Structure

```
src/
├── components/
│   ├── dashboard/          # Dashboard-specific components
│   ├── match-details/     # Match detail page components
│   └── *.tsx            # Reusable components
├── hooks/                # Custom React hooks
├── icons/                # Icon components
├── layouts/              # Layout components
├── pages/                # Page components
├── types/                # TypeScript type definitions
├── utils/                # Utility functions
└── constants/            # Application constants
```

## Getting Started

### Quick Start

1. **Clone and install**
   ```bash
   git clone https://github.com/wteffera11/the-sports-hub.git
   cd the-sports-hub
   pnpm install
   ```

2. **Set up environment**
   ```bash
   cp .env.example .env
   # Edit .env with your API configuration
   ```

3. **Run the app**
   ```bash
   pnpm dev
   ```
   Open `http://localhost:5173` in your browser

### Build & Deploy
```bash
pnpm build        # Build for production
pnpm preview      # Preview production build
```

## Development Workflow

### Code Quality Tools

#### Biome
This project uses **Biome** for code formatting and linting. It's configured in `biome.json`.

**Commands:**
```bash
# Check and fix code formatting/linting
pnpm format:fix
```

**Configuration:**
- Automatic import sorting
- Consistent code formatting
- TypeScript strict mode
- React best practices

#### Commitlint
Ensures consistent commit messages following conventional commits.

**Configuration:** `commitlint.config.js`

**Commit Message Format:**
```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

**Examples:**
```bash
git commit -m "feat(dashboard): add live match filtering"
git commit -m "fix(api): resolve environment variable loading"
git commit -m "docs: update README with setup instructions"
```

#### Lefthook
Manages Git hooks automatically. Configured in `lefthook.yml`.

**Current Hooks:**
- **pre-commit:** Runs Biome check and auto-fix
- **pre-push:** Runs Biome check
- **commit-msg:** Runs Commitlint validation


### Git Workflow

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make changes and commit**
   ```bash
   git add .
   git commit -m "feat(component): add new feature"
   ```
   - Lefthook will automatically run Biome formatting
   - Commitlint will validate your commit message

3. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

## Environment Variables

### Required Variables
- `VITE_API_URL` - Base URL for the sports API

### Environment Files
- `.env` - Local environment (gitignored)
- `.env.example` - Template file

**Note:** Vite requires environment variables to be prefixed with `VITE_` to be exposed to the client-side code.

## API Integration

The app uses [TheSportsDB API](https://www.thesportsdb.com/api.php) for fetching sports data. API endpoints are stored as constants in `src/constants/api.ts`:

```typescript
export const API_ENDPOINTS = {
  EVENTS_DAY: "/eventsday.php",      // Events by date
  EVENT_LOOKUP: "/lookupevent.php",  // Event details
  TIMELINE: "/lookuptimeline.php",   // Event timeline
} as const;

export const LEAGUES = {
  ENGLISH_PREMIER_LEAGUE: "English Premier League",
} as const;
```


### Real-time Updates

To provide live match updates, the application implements automatic data polling:

- **15-second refresh interval** for all data queries
- **TanStack Query** handles background refetching
- **Smart caching** to prevent unnecessary API calls
- **Automatic UI updates** when new data is available

This ensures users see the latest match scores and status changes without manual refresh.

## Deployment

### Vercel
The project is configured for Vercel deployment with `vercel.json` for SPA routing:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Build Commands
```bash
# Install dependencies
pnpm install

# Build for production
pnpm build

# Start production server
pnpm preview
```

## Available Scripts

```bash
# Development
pnpm dev          # Start dev server
pnpm preview      # Preview production build

# Building
pnpm build        # Build for production (TypeScript check + Vite build)

# Code Quality
pnpm format:fix   # Run Biome check and auto-fix

# Git Hooks (runs automatically)
# Lefthook hooks are configured to run on pre-commit, pre-push, and commit-msg
```