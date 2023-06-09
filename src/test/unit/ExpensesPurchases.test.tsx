import React from 'react';
import { fireEvent, render, screen, within } from '../../test-utils';
import ExpensesPurchases from '../../pages/ExpensesPurchases';

describe('Expense component', () => {
  test('Should have a button', () => {
    render(<ExpensesPurchases type="expense_reports" />);

    const buttonElement = within(screen.getByTestId('header')).getByRole('button', {
      name: /Report expense/i,
    });
    expect(buttonElement).toBeInTheDocument();
  });

  test('Should open form on click', () => {
    const { queryByTestId, getByTestId } = render(<ExpensesPurchases type="expense_reports" />);

    const form = queryByTestId('form-container');
    expect(form).toBeNull();

    const addButton = within(screen.getByTestId('header')).getByRole('button', {
      name: /Report expense/i,
    });
    fireEvent.click(addButton);

    const formContainer = getByTestId('form-container');
    expect(formContainer).toBeVisible();
  });
});
