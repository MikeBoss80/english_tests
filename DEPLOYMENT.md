# English Assessment — Deployment Guide (GitHub Pages)

This project is a fully static, self-contained web app. It requires **no backend,
no database, no build step**. Deploying is as simple as pushing the files to a
GitHub repository and enabling GitHub Pages.

## 1. Create the repository

1. Go to https://github.com and create a **new repository**.
   - Name it e.g. `english-assessment`.
   - Keep it **Public** (required for the free GitHub Pages tier).
   - Do NOT initialize it with a README (optional).

## 2. Push the files

From this folder:

```bash
git init
git add .
git commit -m "English Assessment V1 — A1/A2 diagnostic test"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/english-assessment.git
git push -u origin main
```

## 3. Enable GitHub Pages

1. In the repo page, go to **Settings → Pages**.
2. Under **Build and deployment → Source**, select **Deploy from a branch**.
3. Select branch `main` and folder `/ (root)`.
4. Click **Save**.

Your site will be live in a few minutes at:

```
https://YOUR_USERNAME.github.io/english-assessment/
```

## 4. Optional: custom domain

If you want `https://YOUR_USERNAME.github.io/` (user site):
- Rename the repository to `YOUR_USERNAME.github.io`
- The site will live directly at that URL.

## Local development / testing

Any static server works. For example, from this folder:

```bash
# Python
python -m http.server 8080

# Or Node
npx serve .
```

Then open http://localhost:8080

> **Important:** open it via `http://localhost` (or the deployed URL), not by
> double-clicking the file. ES modules (`import` / `export`) require a server.

## How data works / how to add questions

- Question banks live in `data/a1-questions.js` and `data/a2-questions.js`.
- Each question is a plain object with metadata:
  - `id`, `section` (grammar | vocabulary | reading | language_use)
  - `topic` (e.g. `present_simple`) → used for the topic diagnosis
  - `difficulty`, `type`, `question`, `options`, `answer`, `explanation`
- Supported types: `multiple_choice`, `select_correct`, `fill_blank`,
  `matching`, `ordering`, `error_identification`, `reading`
  (reading groups use `passage` + `questions`).
- New topics in `modules/diagnostic-engine.js` need a recommendation if you
  want auto advice, otherwise a generic message is shown.

## File structure

```
├── index.html
├── styles.css
├── app.js
├── data/
│   ├── a1-questions.js
│   ├── a2-questions.js
│   └── question-bank.js
├── modules/
│   ├── assessment-engine.js
│   ├── scoring-engine.js
│   ├── diagnostic-engine.js
│   └── ui-controller.js
└── assets/
    └── icons/
```

No user data ever leaves the browser (all progress is stored in `localStorage`).