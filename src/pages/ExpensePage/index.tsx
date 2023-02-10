import React from 'react';
import ExpenseList from '../../components/ExpenseList';
import './style.scss';
import { useTranslation } from 'react-i18next';
import Navbar from '../../features/Navbar';
import { FcMoneyTransfer } from 'react-icons/fc';

export default function ExpensePage() {
  const { t } = useTranslation();
  return (
    <div className="expense_page">
      <Navbar />
      <main className="expense_page_container">
        <img src="./images/expense-img.jpeg" alt="expense_img" className="expense_img" />
        <h1 className="expense_page_header">
          {t('expense_tracker')} <FcMoneyTransfer />
        </h1>
        <ul className="filters">
          <li className="filters_list">{t('all_expenses')}</li>
          <li className="filters_list">{t('filter')}</li>
        </ul>
        <ExpenseList />
      </main>
    </div>
  );
}
