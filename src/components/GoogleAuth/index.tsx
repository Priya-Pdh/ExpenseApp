/* eslint-disable no-console */
import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

export default function GoogleAuth() {
  const navigate = useNavigate();

  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        navigate('/dashboard');
        console.log(credentialResponse);
      }}
      onError={() => {
        navigate('/');
        console.log('Login Failed');
      }}
    />
  );
}
