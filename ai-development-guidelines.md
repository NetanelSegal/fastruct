# AI Development Guidelines for Fastruct

This document provides guidelines for continuing development on the Fastruct project, particularly when using AI-based development tools. The goal is to maintain code quality, consistency, and long-term maintainability.

## 1. Code Style and Conventions

- **Consistency is Key:** Before writing any new code, review the existing codebase (`src` directory) to understand the established coding style, naming conventions, and file structure. New code should blend in seamlessly with the old.
- **Verify, Don't Assume:** Do not assume a library or utility is available. Always check the project's `package.json` and existing code to see what is already in use. For example, this project uses `clsx` for conditional classes, not a custom `cn` utility.
- **TypeScript:** All new components and functions should be written in TypeScript to maintain type safety.
- **Formatting:** The project uses Prettier for code formatting. Ensure you have it integrated into your editor or run `npx prettier --write .` before committing.
- **ESLint:** ESLint is configured to enforce code quality. Run `npx eslint .` to check for any issues.

### Specific Conventions

- **TypeScript Props:** Prop interfaces should be prefixed with `I` (e.g., `IButtonProps`, `IHeroSectionProps`).
- **Styling:** Use the `clsx` library for conditionally applying Tailwind CSS classes.
- **Client Components:** Add the `'use client';` directive at the top of files for client-side React components.
- **Naming:**
  - Components and interfaces use PascalCase (e.g., `HeroSection`, `IHeroSection`).
  - Custom hooks are prefixed with `use` (e.g., `useToggle`).
- **Quotes:** Use single quotes (`'`) for all strings.

## 2. Component Structure

- **Atomic Components:** Smaller, reusable components (like `Button.tsx` or `Section.tsx`) are located in `src/components`.
- **Section Components:** Larger components that represent a full section of a page (like `HeroSection.tsx`) are located in `src/sections`.
- **Pages:** Page-level components are in `src/app`. Each route has its own directory.
- **New Components:** When creating a new component, follow the structure of existing components. Include prop types and export the component clearly.

## 3. Content Management

- **Decoupled Content:** All user-facing text and data should be managed in the `public/content` directory. Do not hardcode content within components.
- **JSON Structure:** The JSON files in `public/content` are structured to match the data requirements of the components. When adding new content, update the JSON files accordingly.
- **`getContent` Function:** Use the `getContent` function from `src/lib/content.ts` to load content for your pages and components.

## 4. State Management

- **React Hooks:** For local component state, use React hooks like `useState` and `useReducer`.
- **Custom Hooks:** For reusable stateful logic, create custom hooks and place them in the `src/hooks` directory.
- **Global State:** For global state, consider using React Context or a lightweight state management library if the need arises. Avoid introducing complex state management unless necessary.

## 5. Testing

- **Unit Tests:** While not currently implemented, new complex components or utility functions should ideally be accompanied by unit tests. Use a testing framework like Jest and React Testing Library.
- **End-to-End Tests:** For critical user flows, consider adding end-to-end tests using a tool like Cypress or Playwright.

## 6. Git Workflow

- **Branching:** Create a new branch for each new feature or bug fix (e.g., `feature/new-contact-form`, `fix/navbar-bug`).
- **Commit Messages:** Write clear and concise commit messages that explain the "what" and "why" of the change.
- **Pull Requests:** Use pull requests to merge changes into the main branch. This allows for code review and discussion before merging.

By following these guidelines, we can ensure that the Fastruct project remains a high-quality, maintainable, and scalable application.

## 7. Core Libraries and Frameworks

The project is built on a modern web stack. When adding new features, prefer using these existing technologies:

- **Framework:** [Next.js](https://nextjs.org/) (v16) with the App Router.
- **Language:** [TypeScript](https://www.typescriptlang.org/).
- **UI:** [React](https://react.dev/) (v19).
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v4) for utility-first styling.
- **Conditional Classes:** [clsx](https://github.com/lukeed/clsx) for constructing class names conditionally.
- **Animation:** [Framer Motion](https://www.framer.com/motion/) (`motion` package) for animations.
- **Icons:** [Lucide React](https://lucide.dev/) for icons.
- **UI Components:** [Radix UI](https://www.radix-ui.com/) for unstyled, accessible components (e.g., Accordion).
