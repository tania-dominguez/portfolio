export const site = {
  name: 'Tania Domínguez',
  role: 'Diseñadora UX/UI',
  locality: 'Alicante',
  country: 'ES',
  description:
    'Portfolio de Tania Domínguez, diseñadora UX/UI en Alicante: sistemas de diseño, producto digital e ilustración.',
  cv: '/tania-dominguez-cv.pdf',
  nav: [
    { label: 'Portfolio', href: '/portfolio/' },
    { label: 'Sobre mí', href: '/sobre-mi/' },
    { label: 'Contacto', href: '/contacto/' },
  ],
  legal: [
    { label: 'Política de privacidad', href: '/politica-privacidad/' },
    { label: 'Aviso legal', href: '/aviso-legal/' },
    { label: 'Política de cookies', href: '/politica-cookies/' },
  ],
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tania-dominguez/' },
    { label: 'Behance', href: 'https://www.behance.net/tania-dominguez' },
    { label: 'Medium', href: 'https://tania-dominguez.medium.com/' },
    { label: 'Instagram', href: 'https://www.instagram.com/taniadominguez_com/' },
  ],
} as const;
