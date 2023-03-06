import React from 'react';
import { render, screen } from '../../test-utils';
import Navbar from '../../components/Navbar';

describe('Navbar Component', () => {
  test('Should have 4 links', () => {
    render(<Navbar setShowForm={jest.fn()} />);
    const linkElements = screen.getAllByRole('link');
    expect(linkElements.length).toBe(4);
  });
});
