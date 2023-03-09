import React, { useState } from 'react';
import './style.scss';
import Navbar from '../../components/Navbar';
import List from '../../components/List';
import Popup from '../../components/Popup';
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
      new: false,
    },
  ] as listProps[]);

  const addNewExpense = (data: listProps) => {
    const oldList = expenseList.map((item) => {
      item.new = false;
      return item;
    });
    setExpenseList([...oldList, data]);
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
          <Popup type={showForm} onClick={addNewExpense} setShowForm={setShowForm} />
        )}
      </main>
    </div>
  );
}

export default Dashboard;
