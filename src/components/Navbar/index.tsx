import React, { useState } from 'react';
import './style.scss';
import logo from '../../assets/images/logo-hs.png';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import { TbUserCircle } from 'react-icons/tb';
import { AiOutlineDashboard } from 'react-icons/ai';
import { TbReportMoney } from 'react-icons/tb';
import { TbZoomMoney } from 'react-icons/tb';
import { TbReportMedical } from 'react-icons/tb';
import { TbZoomIn } from 'react-icons/tb';
import { TbLogout } from 'react-icons/tb';
import { TbLanguage } from 'react-icons/tb';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  function changeLang() {
    if (i18n.language === 'en') {
      i18n.changeLanguage('sv');
      setLang('sv');
    } else {
      i18n.changeLanguage('en');
      setLang('en');
    }
  }

  return (
    <nav className="navbar">
      <ul className="navlist">
        <li>
          <img src={logo} alt="hyperstack logo" />
        </li>
        <li>
          <div className="navlink">
            <TbUserCircle />
            Jane Doe
          </div>
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
          <button className="navlink" onClick={changeLang}>
            <TbLanguage />
            {lang}
          </button>
        </li>
      </ul>
    </nav>
  );
}
