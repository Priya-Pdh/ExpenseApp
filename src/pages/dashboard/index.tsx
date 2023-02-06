import React from 'react';
import './style.scss';
import Navbar from '../../features/Navbar';
import { useTranslation } from 'react-i18next';

function Dashboard() {
  const { t } = useTranslation();

  return (
    <div className="dashboard">
      <Navbar />
      <main>
        <section>
          <header>{t('last_entries')}</header>
        </section>
        <section>
          <header>{t('month_overview')}</header>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
