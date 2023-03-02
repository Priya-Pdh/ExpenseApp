import React from 'react';
import './style.scss';
import Navbar from '../../components/Navbar';
import List from '../../components/List';
import { useTranslation } from 'react-i18next';

function Dashboard() {
  const { t } = useTranslation();

  return (
    <div className="dashboard">
      <Navbar />
      <main>
        <section>
          <header>{t('last_entries')}</header>
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
            type="expense"
          />
        </section>
        <section>
          <header>{t('month_overview')}</header>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
