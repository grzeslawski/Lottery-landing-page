import React from 'react';
import { render, screen, fireEvent, waitFor } from 'test-utils';
import MainForm from './MainForm';

describe('MainForm Component', () => {
  it('Renders the step one of MainForm Component', () => {
    render(<MainForm />);
    screen.getByText(/Krok 1/i);
  });

  it('Renders the step two of MainForm Component', () => {
    render(<MainForm />);
    const login = screen.getByLabelText('Imię');
    const password = screen.getByLabelText('Adres e-mail');

    fireEvent.change(login, { target: { value: 'Andrzej' } });
    fireEvent.change(password, { target: { value: 'testowyemail@gmail.com' } });

    fireEvent.click(screen.getByText('następny krok'));

    screen.findByText(/Krok 2/i);
  });

  it('Renders the modal with scratch after pass form', async () => {
    render(<MainForm />);
    const login = screen.getByLabelText('Imię');
    const password = screen.getByLabelText('Adres e-mail');

    fireEvent.change(login, { target: { value: 'Andrzej' } });
    fireEvent.change(password, { target: { value: 'testowyemail@gmail.com' } });

    fireEvent.click(screen.getByText('następny krok'));
    fireEvent.click(screen.getByTestId('conditionOne'));
    // fireEvent.click(screen.getByText('zagraj'));
    await waitFor(() => screen.findByTestId('modalTitle'));
  });
});
