import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import About from '../view/about';

describe('renders', () => {
  beforeEach(() => {
    render(<About />);
  });

  it('render about section', () => {
    const element = screen.getByTestId('about');
    expect(element).toBeInTheDocument();
  });

  it('render address section', () => {
    const element = screen.getByTestId('address');
    expect(element).toBeInTheDocument();
  });

  it('render social section', () => {
    const element = screen.getByTestId('social');
    expect(element).toBeInTheDocument();
  });
});
