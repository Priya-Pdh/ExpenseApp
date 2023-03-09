import React, { useState, useEffect, useMemo } from 'react';
import List from '../../components/List';
import './style.scss';
import Navbar from '../../components/Navbar';
import AppBar from '../../components/AppBar';

import { listProps, formType } from '../../types/Types';
import Popup from '../../components/Popup';

type pageProps = {
  type: 'expense_reports' | 'purchase_requests';
};

export default function ExpensesPurchases(props: pageProps) {
  const listPlaceholder = useMemo(() => {
    return [
      {
        item: 'Mouse',
        price: '250',
        category: 'Electronics',
        date: '2023-01-25',
        receipt: 'receipt.jpg',
        status: 'Pending',
        new: false,
      },
    ];
  }, []);

  const [expenseList, setExpenseList] = useState(listPlaceholder as listProps[]);
  const [showForm, setShowForm] = useState<formType>('hidden');

  const addNewExpense = (data: listProps) => {
    const oldList = expenseList.map((item) => {
      item.new = false;
      return item;
    });
    setExpenseList([...oldList, data]);
  };

  const [wasSubmitted, setWasSubmitted] = useState(false);

  useEffect(() => {
    if (wasSubmitted === false) {
      setShowForm('hidden');
      setExpenseList(listPlaceholder as listProps[]);
    } else {
      setShowForm('hidden');
      setWasSubmitted(false);
    }
  }, [props.type, listPlaceholder, wasSubmitted]);

  return (
    <div className="expenses_purchases">
      <Navbar setShowForm={setShowForm} />
      <AppBar />
      <div className="expenses_purchases_wrapper">
        <main className="expenses_purchases_container">
          <List
            list={expenseList}
            type={props.type}
            showForm={showForm}
            setShowForm={setShowForm}
          />
          {showForm !== 'hidden' && (
            <Popup
              type={showForm}
              onClick={addNewExpense}
              setShowForm={setShowForm}
              setWasSubmitted={setWasSubmitted}
            />
          )}
        </main>
      </div>
    </div>
  );
}
