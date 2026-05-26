import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, useTheme } from '../ThemeContext';

/** Componente de prueba que consume el contexto de tema. */
function ThemeProbe() {
  const { theme, isDark, toggleTheme } = useTheme();
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <span data-testid="isDark">{String(isDark)}</span>
      <button onClick={toggleTheme}>toggle</button>
    </div>
  );
}

describe('ThemeContext', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
  });

  it('arranca en modo claro por defecto', () => {
    render(
      <ThemeProvider>
        <ThemeProbe />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('theme')).toHaveTextContent('light');
    expect(document.documentElement).not.toHaveAttribute('data-theme');
  });

  it('alterna a oscuro y refleja data-theme + persistencia', async () => {
    render(
      <ThemeProvider>
        <ThemeProbe />
      </ThemeProvider>,
    );
    await userEvent.click(screen.getByRole('button', { name: 'toggle' }));

    expect(screen.getByTestId('theme')).toHaveTextContent('dark');
    expect(screen.getByTestId('isDark')).toHaveTextContent('true');
    expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
    expect(JSON.parse(localStorage.getItem('pakal-theme'))).toBe('dark');
  });

  it('lanza error si useTheme se usa fuera del provider', () => {
    // Silencia el error esperado en consola para no ensuciar la salida.
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => render(<ThemeProbe />)).toThrow(/ThemeProvider/);
    spy.mockRestore();
  });
});
