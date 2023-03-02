import React, { useState } from 'react';
import List from '../../components/List';
import './style.scss';
import { useTranslation } from 'react-i18next';
import Navbar from '../../components/Navbar';

import { listProps } from '../../types/Types';
import NewItem from '../../components/NewItem';

type pageProps = {
  type: 'expense' | 'purchase';
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

  const { t } = useTranslation();

  const addNewExpense = (data: listProps) => {
    setExpenseList([...expenseList, data]);
  };
  return (
    <div className="expense_page">
      <Navbar />
      <div className="expense_page_wrapper">
        <main className="expense_page_container">
          <header>
            {props.type === 'expense' ? t('expense_reports') : t('purchase_requests')}
            <button className="new_item" onClick={() => setShowForm(!showForm)}>
              {props.type === 'expense' ? t('report_expense') : t('create_request')}
            </button>
          </header>

          {showForm && (
            <NewItem
              type={props.type}
              onClick={addNewExpense}
              showForm={showForm}
              setShowForm={setShowForm}
            />
          )}

          <List list={expenseList} type={props.type} />
        </main>
      </div>
    </div>
  );
}
