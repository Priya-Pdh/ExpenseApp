import React from 'react';
import './style.scss';
import { useTranslation } from 'react-i18next';

import { BiCategory } from 'react-icons/bi';
import { CgCalendarDates } from 'react-icons/cg';
import { BsHash } from 'react-icons/bs';
import { GrAttachment } from 'react-icons/gr';
import { TbLoader } from 'react-icons/tb';

export default function ExpenseList() {
  const { t } = useTranslation();
  return (
    <>
      <div className="table_container">
        <table className="table_wrapper">
          <tr>
            <th>{t('expense')}</th>
            <th><BsHash /> {t('amount')}</th>
            <th><BiCategory /> {t('category')}</th>
            <th><CgCalendarDates /> {t('date')}</th>
            <th><GrAttachment /> {t('receipt')}</th>
            <th> <TbLoader /> {t('status')}</th>
          </tr>
          <tr>
            <td>Mouse</td>
            <td>250</td>
            <td>Electronics</td>
            <td>2023-01-25</td>
            <td />
            <td>Pending</td>
          </tr>
        </table>
      </div>
    </>
  );
}
