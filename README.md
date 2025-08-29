# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

## Deploy to Vercel

1. Убедитесь, что сборка проходит локально:
   ```bash
   npm ci
   npm run build
   ```
2. Конфигурация SPA уже добавлена в `vercel.json` (output `dist`, rewrite на `index.html`).
3. Деплой через Git:
   - Импортируйте репозиторий в Vercel → New Project.
   - Framework Preset: Vite.
   - Build Command: `npm run build`.
   - Output Directory: `dist`.
   - Deploy.
4. Деплой через CLI (опционально):
   ```bash
   npm i -g vercel
   vercel --prod
   ```
5. Переменные окружения: Project Settings → Environment Variables.


## Deploy to Netlify

1. Убедитесь, что проект собирается:
   ```bash
   npm ci
   npm run build
   ```
2. Конфиг SPA добавлен в `netlify.toml` (publish `dist`, редирект `/*` → `/index.html`).
3. Деплой через Netlify UI:
   - Создайте сайт → Import from Git.
   - Build command: `npm run build`.
   - Publish directory: `dist`.
   - Deploy.
4. Деплой через Netlify CLI (опционально):
   ```bash
   npm i -g netlify-cli
   netlify deploy --prod --dir=dist
   ```
5. Переменные окружения: Site settings → Build & deploy → Environment.


You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

