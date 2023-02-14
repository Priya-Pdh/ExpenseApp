import React from 'react';
import { render, screen } from '../../test-utils';
import Navbar from '../../components/Navbar';

describe('Navbar Component', () => {
  test('Should have 6 links', () => {
    render(<Navbar />);
    const linkElements = screen.getAllByRole('link');
    expect(linkElements.length).toBe(6);
  });
});
