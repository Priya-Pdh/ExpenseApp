import React from 'react';
import { render, screen } from '../../test-utils';
import Login from '../../pages/login';

describe('Login Component', () => {
  test('Should have login with google', () => {
    render(<Login />);
    const loginElement = screen.getByText('Log in with Google');
    expect(loginElement).toBeInTheDocument();
  });
});
