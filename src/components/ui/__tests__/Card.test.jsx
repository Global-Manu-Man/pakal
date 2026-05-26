import { render, screen } from '@testing-library/react';
import Card from '../Card';

describe('Card', () => {
  it('renderiza su contenido', () => {
    render(<Card>Contenido</Card>);
    expect(screen.getByText('Contenido')).toBeInTheDocument();
  });

  it('usa <div> por defecto y respeta la prop `as`', () => {
    const { rerender } = render(<Card>A</Card>);
    expect(screen.getByText('A').tagName).toBe('DIV');
    rerender(
      <Card as="article">B</Card>,
    );
    expect(screen.getByText('B').tagName).toBe('ARTICLE');
  });

  it('añade clases interactivas sólo cuando interactive es true', () => {
    const { rerender } = render(<Card>Estática</Card>);
    expect(screen.getByText('Estática')).not.toHaveClass('hover:border-teal');
    rerender(<Card interactive>Interactiva</Card>);
    expect(screen.getByText('Interactiva')).toHaveClass('hover:border-teal');
  });
});
