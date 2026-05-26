import { renderWithProviders, screen } from '../../../test-utils';
import userEvent from '@testing-library/user-event';
import ContactForm from '../ContactForm';

describe('ContactForm', () => {
  it('muestra errores de validación al enviar vacío', async () => {
    renderWithProviders(<ContactForm />);
    await userEvent.click(screen.getByRole('button', { name: /cotización/i }));

    // Cuatro campos obligatorios -> cuatro alertas.
    const alerts = await screen.findAllByRole('alert');
    expect(alerts).toHaveLength(4);
  });

  it('valida el formato del correo', async () => {
    renderWithProviders(<ContactForm />);
    await userEvent.type(screen.getByLabelText('Nombre'), 'Emmanuel');
    await userEvent.type(screen.getByLabelText('Apellido'), 'P.');
    await userEvent.type(screen.getByLabelText('Correo electrónico'), 'correo-invalido');
    await userEvent.type(screen.getByLabelText('Mensaje'), 'Hola');
    await userEvent.click(screen.getByRole('button', { name: /cotización/i }));

    expect(screen.getByText('Introduce un correo válido.')).toBeInTheDocument();
  });

  it('envía correctamente y notifica al callback', async () => {
    const onSubmitSuccess = jest.fn();
    renderWithProviders(<ContactForm onSubmitSuccess={onSubmitSuccess} />);

    await userEvent.type(screen.getByLabelText('Nombre'), 'Emmanuel');
    await userEvent.type(screen.getByLabelText('Apellido'), 'P.');
    await userEvent.type(screen.getByLabelText('Correo electrónico'), 'hola@pakal.cloud');
    await userEvent.type(screen.getByLabelText('Mensaje'), 'Quiero un sitio web.');
    await userEvent.click(screen.getByRole('button', { name: /cotización/i }));

    expect(onSubmitSuccess).toHaveBeenCalledWith({
      firstName: 'Emmanuel',
      lastName: 'P.',
      email: 'hola@pakal.cloud',
      message: 'Quiero un sitio web.',
    });
    // El botón refleja el estado de éxito.
    expect(screen.getByRole('button', { name: /enviado/i })).toBeInTheDocument();
  });
});
