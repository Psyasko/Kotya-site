# Repository guidance

## Project

- The active React application lives in `src/` and static assets live in `public/`.
- Use `pnpm` for dependency and script commands.
- Run `pnpm run build` after changing application code or styles.

## GitHub publishing

- After completing a user-requested code change, inspect the diff and stage only files that belong to that task.
- If validation succeeds, commit the completed change with a concise descriptive message.
- Push the current `agent/*` branch to `origin` and open or update a draft pull request.
- Never commit `node_modules`, `dist`, `.pnpm-store`, `.env` files, credentials, or unrelated user changes.
- If validation fails or the remote branch has diverged, do not push; report the problem instead.
