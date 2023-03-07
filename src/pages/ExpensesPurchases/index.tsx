import React, { useState, useEffect } from 'react';
import List from '../../components/List';
import './style.scss';
import Navbar from '../../components/Navbar';

import { listProps, formType } from '../../types/Types';
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
  const [showForm, setShowForm] = useState<formType>('hidden');

  const addNewExpense = (data: listProps) => {
    setExpenseList([...expenseList, data]);
  };

  useEffect(() => {
    setShowForm('hidden');
  }, [props.type]);

  return (
    <div className="expenses_purchases">
      <Navbar setShowForm={setShowForm} />
      <div className="expenses_purchases_wrapper">
        <main className="expenses_purchases_container">
          <List
            list={expenseList}
            type={props.type}
            showForm={showForm}
            setShowForm={setShowForm}
          />
          {showForm !== 'hidden' && (
            <NewItem type={showForm} onClick={addNewExpense} setShowForm={setShowForm} />
          )}
        </main>
      </div>
    </div>
  );
}
