# The Sports Hub

A modern sports dashboard application built with React, TypeScript, and Vite that displays live and upcoming sports events/matches with detailed match information.

## Features

- 🏆 **Live Sports Dashboard** - View current and upcoming matches across different leagues
- 📅 **Date Filtering** - Browse matches by specific dates
- ⚡ **Live Match Updates** - Real-time match status and scores with 15-second auto-refresh
- 📊 **Match Details** - Detailed match information including events timeline
- 🎨 **Responsive Design** - Mobile-first design with Tailwind CSS
- 🔍 **Match Filtering** - Filter by All, Live, or Favorite matches

## Tech Stack

### Frontend
- **React 18** - UI framework with TypeScript
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

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/wteffera11/the-sports-hub.git
   cd the-sports-hub
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Update `.env` with your API configuration:
   ```env
   VITE_API_URL=https://www.thesportsdb.com/api/v1/json/123/
   ```

4. **Start development server**
   ```bash
   pnpm dev
   ```

   The app will be available at `http://localhost:5173`

### Build for Production

```bash
pnpm build
```

### Preview Production Build

```bash
pnpm preview
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

The app uses [TheSportsDB API](https://www.thesportsdb.com/api.php) for fetching:

- **Events by date** - `/eventsday.php?d={date}&l={league}`
- **Event details** - `/lookupevent.php?id={eventId}`
- **Event timeline** - `/lookuptimeline.php?id={eventId}`

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

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Follow the commit message convention
5. Submit a pull request

## License

This project is licensed under the MIT License.