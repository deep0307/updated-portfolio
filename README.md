# Portfolio

A clean, elegant software engineer portfolio — **React + Vite** frontend with a **Node.js + Express** backend.

## Theme

| | |
|---|---|
| Background | `#0B1120` (dark navy) |
| Primary accent | `#3B82F6` (electric blue) |
| Secondary accent | `#22D3EE` (cyan) |
| Text | `#F8FAFC` |
| Muted text | `#94A3B8` |

## Stack

- **Frontend:** React 18, Vite, CSS (custom properties for the theme), scroll-reveal animations
- **Backend:** Node.js, Express — serves your content as a simple REST API
- **Skill icons:** rendered from the [Simple Icons](https://simpleicons.org/) package served via jsDelivr, keyed by slug

## Getting started

Requires **Node 18+**.

```bash
# from the portfolio/ root
npm install

# run both servers (frontend on :5173, backend on :5000)
npm run dev
```

Open http://localhost:5173.

## Project layout

```
portfolio/
├── client/               # React app (Vite)
│   └── src/
│       ├── components/   # Navbar, Hero, Experience, Projects, Skills, Education, Footer
│       ├── App.jsx
│       └── index.css     # theme variables + all styling
└── server/               # Express API
    └── src/
        ├── index.js      # server entry (also serves the built client)
        ├── routes/       # /api endpoints
        └── data/         # <-- ADD YOUR CONTENT HERE
```

## Adding your content

All content lives in **`server/src/data/`** — just edit these files:

| File | What it holds |
| --- | --- |
| `profile.js` | Name, title, tagline, about, socials |
| `experience.js` | Job history (role, company, period, highlights) |
| `projects.js` | Projects (name, description, tech stack, links) |
| `skills.js` | Skills grouped by category |
| `education.js` | Degrees and certifications |

### Adding a skill with its logo

Each skill is `{ name, icon }` where `icon` is a **Simple Icons slug**. Everything you listed is already wired up — to add a new skill, just add an entry and reference its slug (e.g. `{ name: 'Go', icon: 'go' }`). Find valid slugs at [simpleicons.org](https://simpleicons.org/) (hint: copy the "title" field, e.g. `go`, `ruby`, `kubernetes`). The icon renders automatically with the correct logo.

## Production

```bash
npm run build   # builds the client into client/dist
npm start       # Express serves the API + built client on :5000
```

## Notes

- The Vite dev server proxies `/api/*` to the backend, so no CORS config is needed locally.
- Placeholder content is included throughout — swap it for your own when you're ready.
