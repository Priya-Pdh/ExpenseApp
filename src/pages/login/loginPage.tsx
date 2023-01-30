import React from 'react';
import GoogleAuth from '../../components/googleAuth/googleAuth';
import './loginPage.scss';

export default function Login() {
  return (
    <>
      <div className="login_page_container">
        <img className="hyperstack_logo" src="logo-hs.png" alt="hyperstack-logo" />
        <hr />
        <p className="login_para">Login in with social account</p>
        <div className="sign_in_container">
          <GoogleAuth />
        </div>
      </div>
    </>
  );
}
