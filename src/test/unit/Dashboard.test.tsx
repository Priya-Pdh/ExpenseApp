import React from 'react';
import { render, screen } from '../../test-utils';
import Dashboard from '../../pages/Dashboard';

describe('Dashboard Component', () => {
  test('Should have the two main sections', () => {
    render(<Dashboard />);
    const firstSectionElement = screen.getByText('Recent entries');
    const secondSectionElement = screen.getByText('Monthly overview');
    expect(firstSectionElement).toBeInTheDocument();
    expect(secondSectionElement).toBeInTheDocument();
  });
});
