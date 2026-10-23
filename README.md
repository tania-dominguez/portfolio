# Portfolio · Tania Domínguez

Sitio estático con [Astro](https://astro.build), desplegado en Vercel. Sin CMS: el contenido vive en Markdown (`src/content/proyectos/`).

Dominio de producción: https://taniadominguez.com

## Comandos

```bash
npm install
npm run dev      # desarrollo en localhost:4321 (sin /api)
npm run build    # genera ./dist
npm run preview  # sirve ./dist
npx vercel dev   # entorno completo con /api/contact (requiere .env.local)
```

## Estructura

```
api/contact.js           función Vercel del formulario (Resend)
src/pages/               páginas y rutas
src/content/proyectos/   case studies en Markdown
src/components/          componentes Astro
src/layouts/             layouts (base con SEO/JSON-LD, legal)
src/styles/tokens.css    design tokens
src/data/site.ts         datos del sitio (nombre, nav, redes)
public/                  estáticos (robots.txt, favicon, CV)
vercel.json              headers de seguridad y caché
```

## Variables de entorno

Ver `.env.example`. En producción se definen en Vercel → Settings → Environment Variables.
