import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import NewExpense from '../../components/NewExpense';

describe('New Expense component', () => {
  test('submit button to be called on click', () => {
    const onSubmit = jest.fn();
    const { getByTestId } = render(<NewExpense onClick={onSubmit} />);

    const form = getByTestId('form-container');
    fireEvent.submit(form);

    expect(onSubmit).toHaveBeenCalled();
  });
});
