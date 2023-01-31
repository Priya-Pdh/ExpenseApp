import React from 'react';
import { render, screen } from '../../test-utils';
import App from '../../App';

describe('App Component', () => {
  test('Should have link element', () => {
    render(<App />);
    const linkElement = screen.getByRole('link', { name: /login with google/i });
    expect(linkElement).toBeInTheDocument();
  });
});
