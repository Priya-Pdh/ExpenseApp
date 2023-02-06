import React from 'react';
import './expenseList.scss';

export default function ExpenseList() {
  return (
    <>
      <div className="table_container">
        <table className="table_wrapper">
          <tr>
            <th>Expense</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
            <th>Reciept</th>
            <th>Status</th>
          </tr>
          <tr>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
          </tr>
        </table>
      </div>
    </>
  );
}
