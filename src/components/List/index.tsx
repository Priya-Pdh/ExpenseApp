import React from 'react';
import './style.scss';
import { useTranslation } from 'react-i18next';

import { TbBox } from 'react-icons/tb';
import { TbCurrencyDollar } from 'react-icons/tb';
import { TbTag } from 'react-icons/tb';
import { TbCalendar } from 'react-icons/tb';
import { TbReceipt } from 'react-icons/tb';
import { TbLoader } from 'react-icons/tb';

import { listProps } from '../../types/Types';

type ListProps = {
  type: 'expense' | 'purchase';
  list: listProps[];
};

export default function List(props: ListProps) {
  const { t } = useTranslation();

  return (
    <table className="table_wrapper">
      <thead>
        <tr>
          <th>
            <TbBox className="header_icon" /> {t('item')}
          </th>
          <th>
            <TbCurrencyDollar className="header_icon" /> {t('price')}
          </th>
          <th>
            <TbTag className="header_icon" /> {t('category')}
          </th>
          <th>
            <TbCalendar className="header_icon" /> {t('date')}
          </th>
          {props.type === 'expense' && (
            <th>
              <TbReceipt className="header_icon" /> {t('receipt')}
            </th>
          )}
          <th>
            <TbLoader className="header_icon" /> {t('status')}
          </th>
        </tr>
      </thead>
      <tbody>
        {props.list.map((expense, id) => {
          return (
            <tr key={id}>
              <td>{expense.item}</td>
              <td>{expense.price}</td>
              <td>{expense.category}</td>
              <td>{expense.date}</td>
              {props.type === 'expense' && <td>{expense.receipt}</td>}
              <td>{expense.status}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
