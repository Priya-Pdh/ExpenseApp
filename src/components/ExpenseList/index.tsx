import React, { Fragment } from 'react';
import './style.scss';
import { useTranslation } from 'react-i18next';

import { BiCategory } from 'react-icons/bi';
import { CgCalendarDates } from 'react-icons/cg';
import { BsHash } from 'react-icons/bs';
import { GrAttachment } from 'react-icons/gr';
import { TbLoader } from 'react-icons/tb';

import { NewExpenseProps } from '../../types/Types';

type ExpenseListProps = {
  expenseList: NewExpenseProps[];
};

export default function ExpenseList(props: ExpenseListProps) {
  const { expenseList } = props;
  const { t } = useTranslation();

  return (
    <Fragment>
      <div className="table_container">
        <table className="table_wrapper">
          <thead>
            <tr>
              <th>{t('expense')}</th>
              <th>
                <BsHash /> {t('amount')}
              </th>
              <th>
                <BiCategory /> {t('category')}
              </th>
              <th>
                <CgCalendarDates /> {t('date')}
              </th>
              <th>
                <GrAttachment /> {t('receipt')}
              </th>
              <th>
                <TbLoader /> {t('status')}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mouse</td>
              <td>250</td>
              <td>Electronics</td>
              <td>2023-01-25</td>
              <td />
              <td>Pending</td>
            </tr>

            {expenseList.map((expense) => {
              return (
                <tr key={expense.id}>
                  <td>{expense.expense}</td>
                  <td>{expense.amount}</td>
                  <td>{expense.category}</td>
                  <td>{expense.date}</td>
                  <td>{expense.receipt}</td>
                </tr>
              );
            })}

            <tr />
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}
