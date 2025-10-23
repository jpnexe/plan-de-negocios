<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1xr36nQePkPWMwvcAzuqenK-gs59vPLj9

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy a GitHub Pages

- Asegúrate de tener el proyecto en un repositorio en GitHub.
- Este proyecto ya está configurado para GitHub Pages:
  - `vite.config.ts` usa `base: './'` y construye en `docs/`.
- Pasos:
  1. Ejecuta `npm install` y luego `npm run build`.
  2. Verifica que se generó la carpeta `docs/` con el sitio estático.
  3. Sube los cambios a la rama `main` del repositorio.
  4. En GitHub, ve a `Settings` → `Pages` → `Build and deployment`.
     - Source: `Deploy from a branch`
     - Branch: `main` y carpeta `/docs`.
  5. Guarda y espera a que GitHub Pages publique el sitio.

### Desarrollo local
- `npm run dev` arranca el servidor local en `http://localhost:3000/`.
- `npm run preview` sirve el build estático.
