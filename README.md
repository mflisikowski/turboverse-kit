# Turboverse Kit

A modern, scalable monorepo starter kit built with Next.js, TypeScript, Tailwind CSS, and testing tools.

## Features

- ⚡ Turborepo - High-performance build system for JavaScript/TypeScript monorepos
- 📦 PNPM - Fast, disk space efficient package manager
- 🎯 TypeScript - Type safety across the entire monorepo
- 🎨 Tailwind CSS - Utility-first CSS framework
- 🔍 Biome - Linter and formatter
- 🧪 Jest - Testing framework
- 🐶 Husky - Git hooks made easy
- 📋 CommitLint - Lint commit messages
- ⚛️ Next.js - React framework with SSR support

## Project Structure

```text
turboverse-kit/
├── apps/
│   └── web/                      # Next.js web application
│
├── packages/
│   └── ui/                       # Shared UI component library
│
└── tools/
    ├── tailwind-config/          # Shared Tailwind configuration
    └── typescript-config/        # Shared TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 22.x or later
- PNPM 9.x or later

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/turboverse-kit.git
   cd turboverse-kit
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm dev
   ```

## Available Scripts

- `pnpm dev` - Start all applications in development mode
- `pnpm build` - Build all applications and packages
- `pnpm lint` - Run linting for all applications and packages
- `pnpm test` - Run tests across the entire monorepo
- `pnpm clean` - Clean build artifacts and node_modules

## Workspaces

### /apps/web

The main Next.js web application. Contains the primary user-facing application.

### /packages/ui

Shared UI component library built with React, TypeScript, and Tailwind CSS. Includes:

- `src/components/` - Reusable React components
- `src/hooks/` - Custom React hooks
- `src/css/` - Global styles and CSS utilities
- `src/lib/` - Utility functions and shared code

### /tools

Configuration packages shared across the monorepo:

- `tailwind-config` - Base Tailwind CSS configuration used as a foundation for all applications and packages.
- `typescript-config` - Shared TypeScript configuration files.

## Development

### Adding a New Package

1. Create a new directory in the appropriate location (`apps/`, `packages/`, or `tools/`)
2. Initialize package.json:

   ```bash
   pnpm init
   ```

3. Add the package to the workspace in `pnpm-workspace.yaml`
4. Install dependencies and start development

### Commit Convention

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code changes that neither fix bugs nor add features
- `test:` - Adding or updating tests
- `chore:` - Changes to build process or auxiliary tools

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'feat: add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## Acknowledgments

- [Turborepo](https://turbo.build/)
- [PNPM](https://pnpm.io/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
