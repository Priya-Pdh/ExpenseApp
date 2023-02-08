import React from 'react';
import './style.scss';

import { BiCategory } from 'react-icons/bi';
import { CgCalendarDates } from 'react-icons/cg';
import { BsHash } from 'react-icons/bs';
import { GrAttachment } from 'react-icons/gr';
import { TbLoader } from 'react-icons/tb';

export default function ExpenseList() {
  return (
    <>
      <div className="table_container">
        <table className="table_wrapper">
          <tr>
            <th>Expense</th>
            <th>
              <BsHash />
              Amount
            </th>
            <th>
              <BiCategory />
              Category
            </th>
            <th>
              <CgCalendarDates />
              Date
            </th>
            <th>
              <GrAttachment />
              Reciept
            </th>
            <th>
              <TbLoader />
              Status
            </th>
          </tr>
          <tr>
            <td>toilte paper</td>
            <td />
            <td />
            <td />
            <td />
            <td />
          </tr>
        </table>
      </div>
    </>
  );
}
