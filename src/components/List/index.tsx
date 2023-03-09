import React, { Fragment } from 'react';
import './style.scss';
import { useTranslation } from 'react-i18next';

import { TbBox } from 'react-icons/tb';
import { TbCurrencyDollar } from 'react-icons/tb';
import { TbTag } from 'react-icons/tb';
import { TbCalendar } from 'react-icons/tb';
import { TbReceipt } from 'react-icons/tb';
import { TbLoader } from 'react-icons/tb';

import { listProps, formType } from '../../types/Types';

type ListProps = {
  type: 'expense_reports' | 'purchase_requests' | 'recent_entries' | 'monthly_overview';
  list: listProps[];
  showForm?: formType;
  setShowForm?: React.ComponentState;
};

export default function List(props: ListProps) {
  const { t } = useTranslation();

  return (
    <Fragment>
      <header data-testid="header">
        {t(props.type)}
        {(props.type === 'expense_reports' || props.type === 'purchase_requests') && (
          <button className="new_item" onClick={() => props.setShowForm(props.type)}>
            {props.type === 'expense_reports' ? t('report_expense') : t('create_request')}
          </button>
        )}
      </header>
      <table className="table_wrapper">
        <thead>
          <tr>
            <th>
              <div className="header_icon">
                <TbBox /> {t('item')}
              </div>
            </th>
            <th>
              <div className="header_icon">
                <TbCurrencyDollar /> {t('price')}
              </div>
            </th>
            <th>
              <div className="header_icon">
                <TbTag /> {t('category')}
              </div>
            </th>
            <th>
              <div className="header_icon">
                <TbCalendar /> {t('date')}
              </div>
            </th>
            {props.type === 'expense_reports' && (
              <th>
                <div className="header_icon">
                  <TbReceipt /> {t('receipt')}
                </div>
              </th>
            )}
            <th>
              <div className="header_icon">
                <TbLoader /> {t('status')}
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {props.list.map((item, id) => {
            return (
              <tr key={id} className={item.new ? 'new' : ''}>
                <td>{item.item}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>{item.date}</td>
                {props.type === 'expense_reports' && <td>{item.receipt}</td>}
                <td>{item.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
}
