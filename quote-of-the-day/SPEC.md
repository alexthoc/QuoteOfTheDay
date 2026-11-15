# Quote of the Day — Spec

A single static page that shows one quote per calendar day, with a button to see a random other quote. No build step, no dependencies, no network requests: it must work by opening `index.html` straight from disk.

## Files (all in `quote-of-the-day/`)

| File | Owner | Purpose |
| --- | --- | --- |
| `index.html` | Agent A | Markup; links `style.css` and `quotes.js` |
| `quotes.js` | Agent A | Quote data + behaviour (plain script, no modules) |
| `style.css` | Agent B | All styling |

## HTML structure contract (class names / ids are fixed)

```html
<body>
  <main class="qotd">
    <header class="qotd__header">
      <h1 class="qotd__title">Quote of the Day</h1>
      <p class="qotd__date" id="qotd-date"><!-- e.g. "Sunday, 15 November 2026" --></p>
    </header>

    <figure class="qotd__card" id="qotd-card">
      <blockquote class="qotd__text" id="qotd-text"></blockquote>
      <figcaption class="qotd__author" id="qotd-author"></figcaption>
    </figure>

    <div class="qotd__actions">
      <button type="button" class="qotd__button" id="qotd-next">Another quote</button>
      <button type="button" class="qotd__button qotd__button--ghost" id="qotd-today">Back to today's</button>
    </div>

    <footer class="qotd__footer">Built by Claude subagents in the Playground</footer>
  </main>
</body>
```

- `<html lang="en">`, `<meta charset="utf-8">`, viewport meta, `<title>Quote of the Day</title>`.
- `style.css` linked in `<head>`; `quotes.js` loaded at end of `<body>` (or with `defer`).

## Behaviour (`quotes.js`)

- `const QUOTES = [...]` — **at least 20** objects `{ text, author }`. Use only public-domain or very widely attributed short quotes (e.g. Seneca, Marcus Aurelius, Confucius, Lao Tzu, Benjamin Franklin, Mark Twain, Ada Lovelace). No song lyrics.
- **Daily quote:** index = days since 1970-01-01 in the viewer's local time, modulo `QUOTES.length`. Same quote all day, changes at local midnight.
- On load: fill `#qotd-date` with today's date via `toLocaleDateString(undefined, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })`, then show the daily quote.
- Author is rendered as `— Author` (em dash + space).
- `#qotd-next`: show a random quote that differs from the one currently shown.
- `#qotd-today`: show the daily quote again. Hidden (`hidden` attribute) while the daily quote is showing; visible otherwise.
- When the quote changes, toggle the class `is-changing` on `#qotd-card` for ~250 ms so CSS can animate it (remove then re-add; use `setTimeout`).
- Set text with `textContent` (never `innerHTML`).

## Styling (`style.css`)

- Centered card layout, max content width ~640px, comfortable padding; works from 320px wide (no horizontal scroll) up to desktop.
- System font stack for UI; the quote text in a serif stack, larger (≈ 1.5–2rem, scaling down on small screens).
- Colours as CSS custom properties on `:root`; a dark theme under `@media (prefers-color-scheme: dark)`. Explicit `body` background.
- `.qotd__card`: subtle border or shadow, rounded corners. A decorative opening quotation mark via `::before` on `.qotd__text` is welcome.
- `.qotd__card.is-changing`: brief fade/slide (opacity + small translate) using a transition or keyframes; respect `prefers-reduced-motion: reduce` (no movement).
- `.qotd__button`: clear primary style; `.qotd__button--ghost`: outlined/secondary. Visible `:focus-visible` outline. `[hidden]` must stay hidden.
- `.qotd__date`, `.qotd__footer`: muted colour, smaller text.

## Acceptance criteria

1. Opening `index.html` from disk shows today's date and a quote with its author; no console errors.
2. "Another quote" always changes the quote; "Back to today's" appears after that and restores the daily quote, then hides.
3. Reloading the page the same day shows the same daily quote.
4. Every class/id in the contract above exists in the HTML and is styled or used by JS as described.
5. Readable and tidy in light and dark mode, at 375px and 1280px widths.
