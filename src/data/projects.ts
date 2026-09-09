/* Lista única de proyectos del sitio. La usan los atajos de "Other
   projects" y servirá de base cuando existan las otras cuatro páginas.
   `published` marca las que ya tienen página: las demás se pintan sin
   enlace, para no dejar enlaces rotos por el camino. */
export interface Project {
  slug: string;
  /* Nombre corto, el que aparece en los atajos. */
  label: string;
  published: boolean;
}

export const projects: Project[] = [
  { slug: 'data-integration-flows', label: 'Data Integration Flows', published: true },
  { slug: 'ai-for-creating-metrics', label: 'AI for Metrics', published: true },
  { slug: 'serina-orb', label: 'Serina Orb', published: true },
  { slug: 'nuba', label: 'Nuba', published: true },
  { slug: 'bubbla-x-oppo', label: 'BUBBLA', published: true },
];
