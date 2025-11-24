# PeakForge Fuel Landing Page

A single-page marketing site that showcases a bodybuilding supplement. Built with plain HTML, CSS, and a bit of vanilla JavaScript so beginners can understand every layer.

## Project Structure

```
website/
├── index.html          # Semantic layout and page content
├── styles/main.css     # Visual design and responsive layout
├── scripts/main.js     # Smooth scroll + FAQ accordion behavior
└── assets/             # Images and media
```

## Getting Started

```bash
# 1. Clone your GitHub repository (after you create it)
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>

# 2. Copy these project files into the repo directory

# 3. Open `index.html` in a browser
xdg-open index.html  # or open manually via file explorer
```

For live reloading you can use any lightweight dev server:

```bash
# Example with the VS Code Live Server extension or Python
python3 -m http.server 8080
```

## Deploying to GitHub Pages

1. Push your project to a GitHub repository.
2. In the repo settings, open **Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and `/root` folder, save.
5. After GitHub builds the site (usually under a minute), your public URL will appear in the Pages panel.

## Customizing

- Replace `assets/supplement-tub.svg` with actual product photography.
- Update text, testimonials, pricing, and CTA copy in `index.html`.
- Modify colors or typography through CSS variables in `styles/main.css`.
- Add analytics or forms integrations (e.g., ConvertKit, Mailchimp) in `scripts/main.js`.

## License

Use freely for learning and portfolio purposes.
