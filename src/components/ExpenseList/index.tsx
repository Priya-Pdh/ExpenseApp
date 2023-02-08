import React from 'react';
import './style.scss';

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
            <th>Receipt</th>
            <th>Status</th>
          </tr>
          <tr>
            <td>toilte paper</td>
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
