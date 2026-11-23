# Playground

A sandbox for trying out Claude features — agents, subagents, side sessions, and Remote Control from mobile. Nothing here is meant to be production code; experiments come and go.

Each experiment lives in its own top-level folder, and the whole repo is published to GitHub Pages at **https://alexthoc.github.io/Playground/**, with a landing page that links to every project.

## Projects

| Project | Folder | Live page |
| --- | --- | --- |
| Quote of the Day | [`quote-of-the-day/`](quote-of-the-day/) | https://alexthoc.github.io/Playground/quote-of-the-day/ |

### Quote of the Day

A single static page that shows one quote per calendar day, with an **Another quote** button to see a random one and **Back to today's** to return. It has no build step, no dependencies and makes no network requests, so it also works by opening `quote-of-the-day/index.html` straight in a browser. See [`SPEC.md`](quote-of-the-day/SPEC.md) for how it was put together.

## Adding a project

1. Create a new top-level folder with its own `index.html`.
2. Add a link to it in the root [`index.html`](index.html) and a row in the table above.
3. Merge to `main`. It will be live at `https://alexthoc.github.io/Playground/<folder>/`.

## How it's published

The [`Deploy Playground to GitHub Pages`](.github/workflows/pages.yml) workflow publishes the repo to GitHub Pages on every push to `main`, and can also be run by hand from the Actions tab. Hidden folders such as `.github` are left out. For it to work, the repository's **Settings → Pages → Build and deployment → Source** must be set to **GitHub Actions**.
