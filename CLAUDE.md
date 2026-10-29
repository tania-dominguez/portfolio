# Portfolio de Tania Domínguez (UX/UI)

Migración de WordPress a sitio estático en Vercel. Dominio nuevo: **taniadominguez.com** (sin guión). El dominio antiguo, tania-dominguez.com, dejará de existir: **no crear redirecciones desde él**.

## Stack y reglas
- Astro 5 (TypeScript strict) + `motion` solo en los componentes que animen + View Transitions.
- CSS con variables en `src/styles/tokens.css`; sin librerías innecesarias.
- Prioridades: Core Web Vitals (LCP<2,5s, CLS<0,1, INP<200ms), accesibilidad AA, SEO, peso mínimo, HTML/CSS válidos W3C.
- Animaciones: solo `transform`/`opacity`, respetar `prefers-reduced-motion`, no animar el elemento LCP al cargar.
- Respuestas breves, sin teoría; indicar modelo de Claude y skill recomendados cuando aplique.

## Formulario de contacto
`api/contact.js` (función Vercel, sin dependencias) envía el email con Resend. Variables en Vercel: `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, opcional `CONTACT_FROM_EMAIL` (por defecto `onboarding@resend.dev`, que solo entrega al correo de la cuenta de Resend hasta verificar el dominio). Probar en local con `vercel dev`, no con `astro dev`. No añadir `trailingSlash` a `vercel.json` (podría romper el POST a `/api/contact`).

## Textos legales
Redactados el 24-10-2026 para el dominio nuevo (RGPD/LOPDGDD). Sin cookies de analítica: si se añade analítica, actualizar la política de cookies y el banner. Titular identificada solo por nombre y formulario; si ofrece servicios profesionales, valorar añadir NIF y domicilio. Revisión legal profesional recomendada.

## Diseño (Figma)
Archivo "Portfolio" (cuenta tdominguezvi@uoc.edu): https://www.figma.com/design/nGzxKhjDuSwHnJczXHVzq8/Portfolio — Home: node 6201-3077 (frame 1024w). Tokens en `src/styles/tokens.css` (Acadia #120E03, White Rock #E8E2D1, Raw Umber #7D6017; DM Serif Display + Libre Franklin, autoalojadas con @fontsource).
- El shell de esta sesión no descarga assets de figma.com (proxy 403): los assets se adjuntan en el chat y se copian a `src/assets/`.
- Header: lista de secciones en escritorio; hamburguesa (CSS, sin SVG) hasta 768px. Footer: solo LinkedIn y correo (→ /contacto/).
- Logo solo existe a 65px (1x): pedir versión 2x o SVG.
- Botón principal: fondo #7D6017 con texto blanco (5,9:1, AA), hover #120E03. Se sustituye el #B19141 del Figma (blanco sobre él = 3:1, no cumple AA). Decisión de la titular.
- Trabajar en ramas y verificar el preview de Vercel antes de fusionar a main.

## Pendiente
- Replicar el resto de páginas del Figma (home hecha): case studies, sobre mí, contacto, versión móvil.
- Migrar contenido del XML exportado a Markdown; optimizar imágenes con `astro:assets`; fuentes woff2 autoalojadas.
- Configurar Resend y variables de entorno en Vercel; probar el formulario en preview.
- Animaciones con Motion; validación W3C, Lighthouse y axe.
- Favicon provisional (`public/favicon.svg`).
