# Tamal Roy — Portfolio

Static single-page portfolio. No build step required.

## Publish on GitHub Pages

1. Create a new repo on GitHub (e.g. `tamalroy.github.io` for a user site, or any name for a project site).
2. Upload `index.html`, `tamal-portrait.jpg`, and this `README.md` to the repo (drag-and-drop in the GitHub UI works).
3. In the repo, go to **Settings → Pages**.
4. Under **Source**, select **Deploy from a branch** → branch `main` → folder `/ (root)` → **Save**.
5. Wait ~1 minute. Your site will be live at:
   - `https://<username>.github.io/` (if repo is named `<username>.github.io`)
   - `https://<username>.github.io/<repo-name>/` (otherwise)

## Local preview

Just open `index.html` in a browser, or run:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000

## Editing

All content (experience, projects, skills) lives at the bottom of `index.html` inside `<script>` arrays. Edit there and refresh.
