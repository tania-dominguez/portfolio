# Portfolio · Tania Domínguez

Sitio estático con [Astro](https://astro.build), desplegado en Vercel. Sin CMS: el contenido vive en Markdown (`src/content/proyectos/`).

Dominio de producción: https://taniadominguez.com

## Comandos

```bash
npm install
npm run dev      # desarrollo en localhost:4321
npm run build    # genera ./dist
npm run preview  # sirve ./dist
```

## Estructura

```
src/pages/               páginas y rutas
src/content/proyectos/   case studies en Markdown
src/components/          componentes Astro
src/layouts/             layout base (SEO, JSON-LD)
src/styles/tokens.css    design tokens
src/data/site.ts         datos del sitio (nombre, nav, redes)
public/                  estáticos (robots.txt, favicon, PDF del CV)
vercel.json              headers de seguridad y caché
```
