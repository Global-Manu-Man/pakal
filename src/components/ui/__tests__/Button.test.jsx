import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../Button';

describe('Button', () => {
  it('renderiza un <button> por defecto', () => {
    render(<Button>Enviar</Button>);
    const el = screen.getByRole('button', { name: 'Enviar' });
    expect(el.tagName).toBe('BUTTON');
  });

  it('renderiza un <a> cuando recibe href', () => {
    render(<Button href="#contact">Contacto</Button>);
    const link = screen.getByRole('link', { name: 'Contacto' });
    expect(link).toHaveAttribute('href', '#contact');
  });

  it('renderiza el componente indicado en `as` (polimorfismo)', () => {
    const Custom = ({ children, ...p }) => <span {...p}>{children}</span>;
    render(<Button as={Custom}>X</Button>);
    expect(screen.getByText('X').tagName).toBe('SPAN');
  });

  it('aplica clases de la variante ghost', () => {
    render(<Button variant="ghost">Ghost</Button>);
    expect(screen.getByRole('button')).toHaveClass('border-ink');
  });

  it('muestra la flecha cuando withArrow es true', () => {
    const { container } = render(<Button withArrow>Ir</Button>);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('dispara onClick al pulsarse', async () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click</Button>);
    await userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
