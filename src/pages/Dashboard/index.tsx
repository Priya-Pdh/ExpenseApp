import React from 'react';
import './style.scss';
import Navbar from '../../components/Navbar';
import List from '../../components/List';

function Dashboard() {
  return (
    <div className="dashboard">
      <Navbar />
      <main>
        <section>
          <List
            list={[
              {
                id: 'lol',
                item: 'Mouse',
                price: '250kr',
                category: 'Electronics',
                date: '2023-01-25',
                status: 'Pending',
              },
            ]}
            type="recent_entries"
          />
        </section>
        <section>
          <List
            list={[
              {
                id: 'lol',
                item: 'Mouse',
                price: '250kr',
                category: 'Electronics',
                date: '2023-01-25',
                status: 'Pending',
              },
            ]}
            type="monthly_overview"
          />
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
