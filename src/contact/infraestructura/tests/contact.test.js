import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Contact from '../view/contact';

describe('renders', () => {
  beforeEach(() => {
    render(<Contact />);
  });

  it('render about contact', () => {
    const element = screen.getByTestId('content-contact');
    expect(element).toBeInTheDocument();
  });

  it('render about form contact', () => {
    const elementName = screen.getByTestId('form-name');
    const elementEmail = screen.getByTestId('form-email');
    const elementPhone = screen.getByTestId('form-phoneNumber');
    const elementMessage = screen.getByTestId('form-message');
    expect(elementName).toBeInTheDocument();
    expect(elementEmail).toBeInTheDocument();
    expect(elementPhone).toBeInTheDocument();
    expect(elementMessage).toBeInTheDocument();
  });

  it('render about form contact', () => {
    const elementName = screen.getByTestId('form-name');
    const elementEmail = screen.getByTestId('form-email');
    const elementPhone = screen.getByTestId('form-phoneNumber');
    const elementMessage = screen.getByTestId('form-message');
    expect(elementName).toBeInTheDocument();
    expect(elementEmail).toBeInTheDocument();
    expect(elementPhone).toBeInTheDocument();
    expect(elementMessage).toBeInTheDocument();
  });

  it('set form contact data  and clean after submit', async () => {
    const inputElementName = screen
      .getByTestId('form-name')
      .querySelector('input');

    const inputElementEmail = screen
      .getByTestId('form-email')
      .querySelector('input');

    const inputElementPhone = screen
      .getByTestId('form-phoneNumber')
      .querySelector('input');

    const inputElementMessage = screen
      .getByTestId('form-message')
      .querySelector('textarea');

    await act(async () => {
      fireEvent.change(inputElementName, { target: { value: 'name' } });
      fireEvent.change(inputElementEmail, { target: { value: 'email' } });
      fireEvent.change(inputElementPhone, { target: { value: '1234567890' } });
      fireEvent.change(inputElementMessage, {
        target: { value: 'lorem message' },
      });
    });

    expect(inputElementName.value).toBe('name');
    expect(inputElementEmail.value).toBe('email');
    expect(inputElementPhone.value).toBe('1234567890');
    expect(inputElementMessage.value).toBe('lorem message');

    await act(async () => {
      const button = screen.getByTestId('submit-form-contact');
      fireEvent.click(button);
    });

    expect(inputElementName.value).toBe('');
    expect(inputElementEmail.value).toBe('');
    expect(inputElementPhone.value).toBe('');
    expect(inputElementMessage.value).toBe('');
  });

  it('validate error in form', async () => {
    await act(async () => {
      const button = screen.getByTestId('submit-form-contact');
      fireEvent.click(button);
    });

    const elementErrorName = screen.getByTestId('error-icon-name');
    expect(elementErrorName).toBeInTheDocument();

    const elementErrorEmail = screen.getByTestId('error-icon-email');
    expect(elementErrorEmail).toBeInTheDocument();

    const elementErrorPhone = screen.getByTestId('error-icon-phoneNumber');
    expect(elementErrorPhone).toBeInTheDocument();
  });
});
