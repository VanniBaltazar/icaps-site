/**
 * Capa de abstracción para Anime.js v4.
 * 
 * Este archivo centraliza la importación de Anime.js para proteger el código
 * de cambios en la API o en la estructura de exportaciones de la biblioteca.
 */

import * as animeModule from 'animejs';

// Intentar obtener las funciones principales independientemente de cómo se exporten
// Esto hace que el código sea resiliente a cambios entre v3, v4 y futuras versiones. Esto por que ya una vez todo se fue al carajo u.u

export const animate = animeModule.animate || animeModule.default || animeModule;

export const createTimeline = animeModule.createTimeline || 
                             (animeModule.timeline ? animeModule.timeline : null);

export const stagger = animeModule.stagger;

// Exportación por defecto para compatibilidad con código que espera 'import anime from ...'
const animeProxy = animate;
if (createTimeline) animeProxy.timeline = createTimeline;
if (stagger) animeProxy.stagger = stagger;

export default animeProxy;
