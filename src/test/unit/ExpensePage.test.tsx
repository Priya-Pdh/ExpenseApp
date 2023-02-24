import React from 'react';
import { fireEvent, render, screen } from '../../test-utils';
import ExpensePage from '../../pages/ExpensePage';

describe('Expense component', () => {
  test('Should have a button', () => {
    render(<ExpensePage />);
    const buttonElement = screen.getByText('+ New Expense');
    expect(buttonElement).toBeInTheDocument();
  });

  test('Should open form on click', () => {
    const { getByText, queryByTestId, getByTestId } = render(<ExpensePage />);

    const form = queryByTestId('form-container');
    expect(form).toBeNull();

    const addButton = getByText('+ New Expense');
    fireEvent.click(addButton);

    const formContainer = getByTestId('form-container');
    expect(formContainer).toBeVisible();
  });
});
