/**
 * Configuración de Jest + React Testing Library.
 * - `jsdom` simula el DOM del navegador.
 * - Mapeamos CSS/SCSS a `identity-obj-proxy` y los assets a un stub, ya que
 *   Jest no procesa estilos ni binarios.
 * - `transformIgnorePatterns` permite transpilar react-router-dom (ESM).
 */
export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(png|jpg|jpeg|gif|svg|webp)$': '<rootDir>/src/__mocks__/fileMock.js',
  },
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/(?!(react-router|react-router-dom)/)'],
  testMatch: ['<rootDir>/src/**/*.test.{js,jsx}'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/main.jsx',
    '!src/**/*.test.{js,jsx}',
    '!src/__mocks__/**',
  ],
};
