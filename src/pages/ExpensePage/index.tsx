import React from 'react';
import ExpenseList from '../../components/ExpenseList';
import './style.scss';

import { FcMoneyTransfer } from 'react-icons/fc';

export default function ExpensePage() {
  return (
    <>
      <div className="expense_page_container">
        <img src="./images/expense-img.jpeg" alt="expense_img" className="expense_img" />
        <h1 className="expense_page_header">
          Expense Tracker <FcMoneyTransfer />
        </h1>
        <ul className="filters">
          <li className="filters_list">All Expenses </li>
          <li className="filters_list"> Filter</li>
        </ul>
        <ExpenseList />
      </div>
    </>
  );
}
