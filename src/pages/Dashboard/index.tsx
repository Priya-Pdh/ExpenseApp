import React, { useState } from 'react';
import './style.scss';
import Navbar from '../../components/Navbar';
import List from '../../components/List';
import NewItem from '../../components/NewItem';
import { listProps, formType } from '../../types/Types';

function Dashboard() {
  const [showForm, setShowForm] = useState<formType>('hidden');

  const [expenseList, setExpenseList] = useState([
    {
      item: 'Mouse',
      price: '250kr',
      category: 'Electronics',
      date: '2023-01-25',
      status: 'Pending',
    },
  ] as listProps[]);

  const addNewExpense = (data: listProps) => {
    setExpenseList([...expenseList, data]);
  };

  return (
    <div className="dashboard">
      <Navbar setShowForm={setShowForm} />
      <main>
        <section>
          <List list={expenseList} type="recent_entries" />
        </section>
        <section>
          <List list={expenseList} type="monthly_overview" />
        </section>
        {showForm !== 'hidden' && (
          <NewItem type={showForm} onClick={addNewExpense} setShowForm={setShowForm} />
        )}
      </main>
    </div>
  );
}

export default Dashboard;
