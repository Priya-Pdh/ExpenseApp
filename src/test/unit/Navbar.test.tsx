import React from 'react';
import { render, screen } from '../../test-utils';
import Navbar from '../../features/navbar';

describe('Navbar Component', () => {
  test('Should have 5 links', () => {
    render(<Navbar />);
    const linkElements = screen.getAllByRole('link');
    expect(linkElements.length).toBe(5);
  });
});
