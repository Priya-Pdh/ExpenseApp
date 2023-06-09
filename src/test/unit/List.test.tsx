import React from 'react';
import { render, screen } from '../../test-utils';
import List from '../../components/List';

describe('ExpenseList Component', () => {
  test('should show the table header', () => {
    const props = [
      { id: '', item: '', category: '', status: '', date: '', price: '', receipt: '', new: false },
    ];
    render(<List list={props} type="expense_reports" />);
    const tableHeaders = screen.getAllByRole('columnheader');

    expect(tableHeaders.length).toBe(6);
  });
});
