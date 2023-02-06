import React from 'react';
import { render, screen } from '../../test-utils';
import Dashboard from '../../pages/dashboard';

describe('Dashboard Component', () => {
  test('Should have the two main sections', () => {
    render(<Dashboard />);
    const firstSectionElement = screen.getByText('Last 10 entries');
    const secondSectionElement = screen.getByText('Monthly overview');
    expect(firstSectionElement).toBeInTheDocument();
    expect(secondSectionElement).toBeInTheDocument();
  });
});
