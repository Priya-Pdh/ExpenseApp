import React from 'react';
import { render, screen } from '../../test-utils';
import ExpenseList from '../../components/ExpenseList';

describe('ExpenseList Component', () => {
  test('should show the table header', () => {
    const props = [
      { id: '', expense: '', category: '', status: '', date: '', amoun: '', receipt: '' },
    ];
    render(<ExpenseList expenseList={props} />);
    const tableHeaders = screen.getAllByRole('columnheader');

    expect(tableHeaders.length).toBe(6);
  });
});
