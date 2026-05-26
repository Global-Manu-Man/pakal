import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

/**
 * Punto de entrada del bundle. Monta <App> en #root usando la API concurrente
 * de React 18. <StrictMode> ayuda a detectar efectos impuros en desarrollo.
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
