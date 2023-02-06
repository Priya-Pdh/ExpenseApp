import React from 'react';
import GoogleAuth from '../../components/googleAuth/googleAuth';
import './style.scss';
import logo from '../../assets/logo-hs.png';
import { useTranslation } from 'react-i18next';

export default function Login() {
  const { t } = useTranslation();

  return (
    <>
      <div className="login_page_container">
        <img className="hyperstack_logo" src={logo} alt="hyperstack-logo" />
        <hr />
        <p className="login_para">{t('login_with_google')}</p>
        <div className="sign_in_container">
          <GoogleAuth />
        </div>
      </div>
    </>
  );
}
