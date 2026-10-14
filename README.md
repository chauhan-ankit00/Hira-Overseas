# React Components Site

This version splits your original page into React components per section while keeping pixel-perfect styles.

## Run
```bash
npm install
npm run dev
```

## Notes
- Each component renders its original HTML via `dangerouslySetInnerHTML` to preserve styling.
- External CSS/JS (CDNs) remain in `index.html`. Local CSS/JS/assets live under `/public` and are imported/linked automatically.
- To further "React-ify", replace the innerHTML with real JSX markup and add real event handlers.
