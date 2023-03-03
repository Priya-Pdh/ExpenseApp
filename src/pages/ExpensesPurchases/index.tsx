import React, { useState } from 'react';
import List from '../../components/List';
import './style.scss';
import Navbar from '../../components/Navbar';

import { listProps } from '../../types/Types';
import NewItem from '../../components/NewItem';

type pageProps = {
  type: 'expense_reports' | 'purchase_requests';
};

export default function ExpensesPurchases(props: pageProps) {
  const [expenseList, setExpenseList] = useState([
    {
      item: 'Mouse',
      price: '250kr',
      category: 'Electronics',
      date: '2023-01-25',
      status: 'Pending',
    },
  ] as listProps[]);
  const [showForm, setShowForm] = useState(false);

  const addNewExpense = (data: listProps) => {
    setExpenseList([...expenseList, data]);
  };
  return (
    <div className="expense_page">
      <Navbar />
      <div className="expense_page_wrapper">
        <main className="expense_page_container">
          <List
            list={expenseList}
            type={props.type}
            showForm={showForm}
            setShowForm={setShowForm}
          />
          {showForm && (
            <NewItem
              type={props.type}
              onClick={addNewExpense}
              showForm={showForm}
              setShowForm={setShowForm}
            />
          )}
        </main>
      </div>
    </div>
  );
}
