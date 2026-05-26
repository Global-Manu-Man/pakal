/**
 * Babel sólo se usa para el entorno de pruebas (Jest).
 * En desarrollo/producción, Vite + esbuild manejan la transpilación.
 * `runtime: 'automatic'` habilita el nuevo JSX transform (sin importar React).
 */
export default {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
};
