import { renderWithProviders, screen } from '../../../test-utils';
import userEvent from '@testing-library/user-event';
import Navbar from '../Navbar';

describe('Navbar', () => {
  it('renderiza los enlaces de navegación en español por defecto', () => {
    renderWithProviders(<Navbar />);
    expect(screen.getByRole('link', { name: 'Inicio' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Servicios' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Contacto' })).toBeInTheDocument();
  });

  it('el botón hamburguesa alterna aria-expanded', async () => {
    renderWithProviders(<Navbar />);
    const burger = screen.getByRole('button', { name: /menú/i });

    expect(burger).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(burger);
    expect(burger).toHaveAttribute('aria-expanded', 'true');
    await userEvent.click(burger);
    expect(burger).toHaveAttribute('aria-expanded', 'false');
  });

  it('marca el enlace activo con aria-current', () => {
    renderWithProviders(<Navbar />);
    // Por defecto la sección activa es "home" (Inicio).
    expect(screen.getByRole('link', { name: 'Inicio' })).toHaveAttribute('aria-current', 'true');
  });
});
