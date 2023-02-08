import React from 'react';
import { render, screen } from '@testing-library/react';
import NewExpense from '../../components/NewExpense';

describe('NewExpense component', () => {
  test('should have heading new expense', () => {
    render(<NewExpense />);
    const inputElement = screen.getByText('New Expense');
    expect(inputElement).toBeInTheDocument();
  });
});
