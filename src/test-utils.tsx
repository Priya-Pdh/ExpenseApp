import React, { ReactElement } from 'react';
import { render as originalRender } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18nForTest';

// @ts-ignore
const render = (ui: ReactElement, { ...renderOptions } = {}) => {
  // @ts-ignore
  const Wrapper = ({ children }) => <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
  // @ts-ignore
  return originalRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from '@testing-library/react';
export { render, userEvent };
