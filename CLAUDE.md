# Portfolio de Tania Domínguez (UX/UI)

Migración de WordPress a sitio estático en Vercel. Dominio nuevo: **taniadominguez.com** (sin guión). El dominio antiguo, tania-dominguez.com, dejará de existir: **no crear redirecciones desde él**.

## Stack y reglas
- Astro 5 (TypeScript strict) + `motion` solo en los componentes que animen + View Transitions.
- CSS con variables en `src/styles/tokens.css`; sin librerías innecesarias.
- Prioridades: Core Web Vitals (LCP<2,5s, CLS<0,1, INP<200ms), accesibilidad AA, SEO, peso mínimo, HTML/CSS válidos W3C.
- Animaciones: solo `transform`/`opacity`, respetar `prefers-reduced-motion`, no animar el elemento LCP al cargar.
- Respuestas breves, sin teoría; indicar modelo de Claude y skill recomendados cuando aplique.

## Pendiente
- Replicar el diseño real (hay capturas del WordPress actual por aportar).
- Migrar contenido del XML exportado a Markdown; optimizar imágenes con `astro:assets`; fuentes woff2 autoalojadas.
- Añadir `public/tania-dominguez-cv.pdf` (la nav enlaza a `/tania-dominguez-cv.pdf`).
- Formulario de contacto: sin decidir (Formspree / Web3Forms / función Vercel + Resend).
- Textos legales: migrar y actualizar con el dominio nuevo.
- Animaciones con Motion; validación W3C, Lighthouse y axe.
- Favicon provisional (`public/favicon.svg`).
