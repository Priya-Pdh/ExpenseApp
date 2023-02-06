/* eslint-disable no-console */
import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

export default function GoogleAuth() {
  const navigate = useNavigate();
  // function onClick= (e: React.SyntheticEvent)=> {
  //   e.preventDefault();

  // }
  return (
    <>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          navigate('/dashboard');
          // console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </>
  );
}
