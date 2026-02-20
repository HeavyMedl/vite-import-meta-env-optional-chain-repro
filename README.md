# Vite `import.meta.env` optional-chaining repro

## What to test

- Run `npm run dev` and inspect browser console.
- Run `npm run build && npm run preview` and inspect browser console.

Expected behavior:

- `direct` (`import.meta.env.*`) is correctly replaced/injected by Vite.
- `optional` (`import.meta?.env?.*`) may not be replaced as expected and can end up undefined in production paths.
