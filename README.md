# Portfolio (Minimal)

## Run locally

```bash
npm install
npm run dev
```

Then open the URL printed in the terminal.

## Deploy (GitHub + Vercel)

1. Create a new empty repo on GitHub (do not add a README).
2. Push this project:

```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

3. Import the repo at [vercel.com/new](https://vercel.com/new) and deploy.

Future updates:

```bash
git add .
git commit -m "Describe your change"
git push
```

Vercel redeploys automatically on every push to `main`.

