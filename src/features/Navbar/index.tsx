import React from 'react';
import './style.scss';
import logo from '../../assets/logo-hs.png';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import { AiOutlineDashboard } from 'react-icons/ai';
import { TbReportMoney } from 'react-icons/tb';
import { TbZoomMoney } from 'react-icons/tb';
import { TbReportMedical } from 'react-icons/tb';
import { TbZoomIn } from 'react-icons/tb';
import { TbLogout } from 'react-icons/tb';

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
          <NavLink to="/dashboard" className="navlink">
            <AiOutlineDashboard />
            {t('dashboard')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/expensepage" className="navlink">
            <TbReportMoney />
            {t('expense_reports')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/requests" className="navlink">
            <TbZoomMoney />
            {t('purchase_requests')}
          </NavLink>
        </li>
        <hr />
        <li>
          <NavLink to="/report-expense" className="navlink">
            <TbReportMedical />
            {t('report_expense')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/create-request" className="navlink">
            <TbZoomIn />
            {t('create_purchase_request')}
          </NavLink>
        </li>
        <div className="spacer" />
        <li>
          <NavLink to="/" className="navlink">
            <TbLogout />
            {t('logout')}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
