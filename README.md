# Playground

A sandbox for trying out Claude features — agents, subagents, side sessions, and Remote Control from mobile.

Nothing here is meant to be production code; experiments come and go.

## Quote of the Day

[`quote-of-the-day/`](quote-of-the-day/) is a single static page that shows one quote per calendar day, with an **Another quote** button to see a random one and **Back to today's** to return. It has no build step, no dependencies and makes no network requests. See [`SPEC.md`](quote-of-the-day/SPEC.md) for how it was put together.

### Open it

- **Online:** https://alexthoc.github.io/Playground/
- **Locally:** open `quote-of-the-day/index.html` straight in a browser, no server needed.

### How it's published

The [`Deploy Quote of the Day to GitHub Pages`](.github/workflows/pages.yml) workflow publishes the `quote-of-the-day/` folder to GitHub Pages whenever it changes on `main`. It can also be run by hand from the Actions tab. For it to work, the repository's **Settings → Pages → Build and deployment → Source** must be set to **GitHub Actions**.
