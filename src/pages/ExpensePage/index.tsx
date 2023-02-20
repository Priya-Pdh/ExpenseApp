import React, { useState } from 'react';
import ExpenseList from '../../components/ExpenseList';
import './style.scss';
import { useTranslation } from 'react-i18next';
import Navbar from '../../components/Navbar';
import { FcMoneyTransfer } from 'react-icons/fc';

import { NewExpenseProps } from '../../types/Types';
import NewExpense from '../../components/NewExpense';

export default function ExpensePage() {
  const [newExpenseList, setNewExpenseList] = useState([] as NewExpenseProps[]);
  const [showForm, setShowForm] = useState(false);

  const { t } = useTranslation();

  const addNewExpense = (data: NewExpenseProps) => {
    setNewExpenseList([...newExpenseList, data]);
  };
  return (
    <div className="expense_page">
      <Navbar />
      <main className="expense_page_container">
        <h1 className="expense_page_header">
          {t('expense_tracker')}
          <FcMoneyTransfer />
        </h1>

        <button className="add_expense_button" onClick={() => setShowForm(!showForm)}>
          + New Expense
        </button>

        {showForm && <NewExpense onClick={addNewExpense} />}

        <ExpenseList expenseList={newExpenseList} />
      </main>
    </div>
  );
}
