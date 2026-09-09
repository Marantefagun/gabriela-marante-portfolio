// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  /* Necesario para las URLs canónicas y para las imágenes de
     previsualización: las redes sociales exigen rutas absolutas. */
  site: 'https://gabriela-marante.com',

  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Plus Jakarta Sans',
      cssVariable: '--font-plus-jakarta-sans',
      // Light (hero), Regular (footer y tags), Medium (nav y titular).
      // Sin esta lista Astro solo descargaría el peso 400.
      weights: [300, 400, 500],
      styles: ['normal'],
      subsets: ['latin'],
      display: 'swap',
    },
    {
      provider: fontProviders.google(),
      name: 'Epilogue',
      cssVariable: '--font-epilogue',
      // Medium (footer) y SemiBold (títulos de sección).
      weights: [500, 600],
      styles: ['normal'],
      subsets: ['latin'],
      display: 'swap',
    },
  ],
});
