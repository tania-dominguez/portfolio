/** Categorías de proyecto, en el orden en que se muestran los filtros de /portfolio/. */
export const categories = [
  'Design System',
  'Diseño gráfico',
  'Ilustración',
  'UX/UI Design',
] as const;

export type Category = (typeof categories)[number];
