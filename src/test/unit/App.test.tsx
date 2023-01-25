import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';

describe('App Component', () => {
  test('Should have link element', () => {
    render(<App />);
    const linkElement = screen.getByRole('link', { name: /learn react/i });
    expect(linkElement).toBeInTheDocument();
  });
});
