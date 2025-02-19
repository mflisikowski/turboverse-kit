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
- 📦 Payload CMS - Headless CMS
- 📧 React Email - Email templates

## Getting Started

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

### Available Scripts

- `pnpm dev` - Start all applications in development mode
- `pnpm build` - Build all applications and packages
- `pnpm lint` - Run linting for all applications and packages
- `pnpm test` - Run tests across the entire monorepo
- `pnpm clean` - Clean build artifacts and node_modules

## Project Structure

```text
turboverse-kit/
├── apps/
│   └── cms/                      # Payload CMS application
│   └── mobile/                   # React Native mobile application
│   └── studio/                   # Drizzle Studio (development only)
│   └── web/                      # Next.js web application
│
├── packages/
│   └── analytics/                # Analytics package
│   └── auth/                     # Authentication
│   └── email/                    # Email templates
│   └── env/                      # Environment variables
│   └── payload/                  # Payload CMS package
│   └── ui/                       # Shared UI component library
│   └── utils/                    # Shared utility functions
│   └── validation/               # Shared validation functions
│
└── tools/
    ├── tailwind-config/          # Shared Tailwind configuration
    └── typescript-config/        # Shared TypeScript configuration
```

## Workspaces

### apps/cms

The Payload CMS application. Contains the CMS functionality and admin interface.

### apps/mobile

The React Native mobile application. Contains the mobile application.

### apps/studio

The Drizzle Studio application. Contains the Drizzle Studio interface for the database.

### apps/web

The main Next.js web application. Contains the primary user-facing application.

### packages/analytics

The analytics package. Contains the analytics functionality for the entire monorepo.

### packages/auth

The authentication package. Contains the authentication functionality for the entire monorepo.

### packages/email

The email package. Contains the email templates for the entire monorepo.

### packages/env

The environment variables package. Contains the environment variables for the entire monorepo.

### packages/payload

The Payload CMS package. Contains the core functionality and configuration for the CMS.

### packages/ui

Shared UI component library built with React, TypeScript, and Tailwind CSS. Includes:

- `src/components/` - Reusable React components
- `src/hooks/` - Custom React hooks
- `src/css/` - Global styles and CSS utilities
- `src/lib/` - Utility functions and shared code

### packages/utils

The utility package. Contains the utility functions for the entire monorepo.

### packages/validation

The validation package. Contains the validation functions for the entire monorepo.


### tools

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

- [Biome](https://biomejs.dev)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Drizzle](https://orm.drizzle.team/)
- [Next.js](https://nextjs.org/)
- [Payload CMS](https://payloadcms.com/)
- [PNPM](https://pnpm.io/)
- [React](https://react.dev/)
- [React Email](https://react.email/)
- [React Expo](https://expo.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Turborepo](https://turbo.build/)
- [TypeScript](https://www.typescriptlang.org/)
