# Vite `import.meta.env` repro

The direct form (`import.meta.env.*`) resolves as expected, but the optional-chained form (`import.meta?.env?.*`) can drop out in build/preview and behave like env is missing.

If that’s what your logger path is using, it would explain why mode detection is coming through as undefined.
