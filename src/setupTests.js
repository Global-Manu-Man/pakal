// Extiende expect() con matchers de DOM: toBeInTheDocument, toHaveClass, etc.
import '@testing-library/jest-dom';

// matchMedia no existe en jsdom: lo simulamos para el hook useMediaQuery.
window.matchMedia =
  window.matchMedia ||
  function matchMedia(query) {
    return {
      matches: false,
      media: query,
      onchange: null,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => false,
    };
  };
