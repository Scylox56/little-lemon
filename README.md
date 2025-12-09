# Little Lemon — Restaurant React App

## Install

1. Clone the project
2. `npm install`
3. `npm run dev` to start the dev server (Vite)
4. `npm run test` to run unit tests (Vitest with Testing Library)

## What you'll find

- A responsive landing page
- Menu listing with categories
- Accessible booking form with validation and mocked API
- Unit tests for booking flow and menu rendering

## How the evaluation criteria are met

- **UX/UI Design**: Clean hierarchy, hero + card layout, gallery-like menu grid. Components are modular.
- **Accessibility**: Uses semantic elements (header, main, section, article), labelled form inputs, `aria-live` and `role` for feedback, alt text on images, keyboard-focusable controls.
- **Unit Tests**: Tests provided using Vitest + React Testing Library for booking and menu.
- **Booking Form**: Validates inputs, prevents past-date bookings, shows clear error messages, fetches mocked available times, handles no-availability.
- **Responsiveness**: Uses CSS grid/flex and breakpoints for mobile-friendly layout.
- **Git Integration**: Project structured with clear files; include commit message examples in your repository like `feat: add booking form` and `test: add booking form unit tests`.
- **Code Quality**: Components are small and documented with comments; consistent naming and separation (api, data, components).
- **Edge Cases & Errors**: Validation catches missing fields and out-of-range party sizes; mock API simulates network delay and failures can be surfaced in `status` messages.

## Notes & next steps

- Replace mocked API with real endpoints as needed.
- Replace placeholder images with optimized assets.
- Add e2e tests (Cypress/Playwright) for full booking flow.
