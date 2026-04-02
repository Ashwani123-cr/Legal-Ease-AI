# LegalEase

AI-powered contract analysis platform — marketing website.

## Pages

| File | Route |
|---|---|
| `index.html` | Home |
| `pages/about.html` | About |
| `pages/contact.html` | Contact |

## Project structure

```
legal-ease/
├── index.html          # Home page
├── pages/
│   ├── about.html      # About page
│   └── contact.html    # Contact page
├── css/
│   ├── global.css      # Reset, variables, navbar, footer, utilities
│   ├── home.css        # Hero, features grid, stats bar
│   ├── about.css       # Mission, team, values
│   └── contact.css     # Contact layout, form, inputs
├── js/
│   ├── nav.js          # Hamburger menu toggle
│   └── contact.js      # Contact form validation + success message
└── README.md
```

## Running locally

Just open `index.html` in a browser — no build step needed.

Or use a simple local server:

```bash
# Python
python -m http.server 3000

# Node (npx)
npx serve .
```

Then visit `http://localhost:3000`.

## Deploying

Works out of the box on:
- **GitHub Pages** — push to `main`, enable Pages in repo settings, set source to root
- **Netlify** — drag and drop the folder or connect the repo
- **Vercel** — import repo, framework = Other

## Tech stack

Plain HTML, CSS, and JavaScript — no frameworks, no build tools.
