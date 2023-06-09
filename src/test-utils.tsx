import React, { ReactElement } from 'react';
import { render as originalRender } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18nForTest';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from 'react-router-dom';

// @ts-ignore
const render = (ui: ReactElement, { ...renderOptions } = {}) => {
  // @ts-ignore
  const Wrapper = ({ children }) => (
    <GoogleOAuthProvider clientId="694623864346-pqhuo7fr26ll6s2p08gdificdd040q6a.apps.googleusercontent.com">
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
  // @ts-ignore
  return originalRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from '@testing-library/react';
export { render, userEvent };
