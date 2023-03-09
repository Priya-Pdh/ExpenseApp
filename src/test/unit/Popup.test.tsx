import React from 'react';
import { fireEvent, render } from '../../test-utils';
import Popup from '../../components/Popup';

describe('New Expense component', () => {
  test('submit button to be called on click', () => {
    const onSubmit = jest.fn();
    const { getByTestId } = render(
      <Popup
        type="expense_reports"
        onClick={onSubmit}
        setShowForm={jest.fn()}
        setWasSubmitted={jest.fn()}
      />
    );

    const form = getByTestId('form-container');
    fireEvent.submit(form);

    expect(onSubmit).toHaveBeenCalled();
  });
});
