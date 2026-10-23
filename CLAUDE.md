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

## Pendiente
- Replicar el diseño real (hay capturas del WordPress actual por aportar).
- Migrar contenido del XML exportado a Markdown; optimizar imágenes con `astro:assets`; fuentes woff2 autoalojadas.
- Configurar Resend y variables de entorno en Vercel; probar el formulario en preview.
- Animaciones con Motion; validación W3C, Lighthouse y axe.
- Favicon provisional (`public/favicon.svg`).
