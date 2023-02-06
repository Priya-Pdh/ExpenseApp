import React from 'react';
import './style.scss';
import logo from '../../assets/logo-hs.png';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const { t, i18n } = useTranslation();

  return (
    <nav className="navbar">
      <ul className="navlist">
        <li>
          <img src={logo} alt="Company logo" />
        </li>
        <li>
          <select
            name="lang_switch"
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
              i18n.changeLanguage(event.target.value)
            }
          >
            <option value="en">English</option>
            <option value="sv">svenska</option>
          </select>
        </li>
        <hr />
        <li>
          <NavLink to="/dashboard">{t('dashboard')}</NavLink>
        </li>
        <li>
          <NavLink to="/expensepage">{t('all_expense_reports')}</NavLink>
        </li>
        <li>
          <NavLink to="/requests">{t('all_purchase_requests')}</NavLink>
        </li>
        <hr />
        <li>
          <NavLink to="/report-expense">{t('report_expense')}</NavLink>
        </li>
        <li>
          <NavLink to="/create-request">{t('create_purchase_request')}</NavLink>
        </li>
      </ul>
    </nav>
  );
}
