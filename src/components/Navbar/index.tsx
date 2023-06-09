import React, { useContext, useState } from 'react';
import './style.scss';
import logo from '../../assets/images/logo-hs.png';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import { TbDashboard } from 'react-icons/tb';
import { TbReportMoney } from 'react-icons/tb';
import { TbZoomMoney } from 'react-icons/tb';
import { TbReportMedical } from 'react-icons/tb';
import { TbZoomIn } from 'react-icons/tb';
import { TbLogout } from 'react-icons/tb';
import { TbLanguage } from 'react-icons/tb';
import { HamburgerContext } from '../../context/hamburgerContext';

type pageProps = {
  setShowForm: React.ComponentState;
};

export default function Navbar(props: pageProps) {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  const { isOpen } = useContext(HamburgerContext);

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
    <nav className={isOpen ? 'navbar navbar_hamburger' : 'navbar'}>
      <ul className="navlist">
        <li>
          <img src={logo} alt="hyperstack logo" />
        </li>
        <hr />
        <li>
          <NavLink to="/dashboard" className="navlink">
            <TbDashboard />
            {t('dashboard')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/expense-reports" className="navlink">
            <TbReportMoney />
            {t('expense_reports')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/purchase-requests" className="navlink">
            <TbZoomMoney />
            {t('purchase_requests')}
          </NavLink>
        </li>
        <hr />
        <li>
          <button className="navlink" onClick={() => props.setShowForm('expense_reports')}>
            <TbReportMedical />
            {t('report_expense')}
          </button>
        </li>
        <li>
          <button className="navlink" onClick={() => props.setShowForm('purchase_requests')}>
            <TbZoomIn />
            {t('create_request')}
          </button>
        </li>
        <div className="spacer" />
        <li>
          <NavLink to="/" className="navlink">
            <TbLogout />
            {t('logout')}
          </NavLink>
          <button className="navlink lang_switcher" onClick={changeLang}>
            <TbLanguage />
            {lang}
          </button>
        </li>
      </ul>
    </nav>
  );
}
