import React, { Fragment, useState } from 'react';
import './style.scss';
import { NewExpenseProps } from '../../types/Types';

import { CgClose } from 'react-icons/cg';

type Props = {
  onClick: (data: NewExpenseProps) => void;
};

export default function NewExpense(props: Props) {
  const [expense, setExpense] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [receipt, setReceipt] = useState('');
  const [status, setStatus] = useState('');

  const [hide, setHide] = useState(true);

  const { onClick } = props;

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const data: NewExpenseProps = {
      id: new Date().toJSON.toString(),
      expense: expense,
      amount: amount,
      date: date,
      category: category,
      receipt: receipt,
      status: status,
    };
    onClick(data);
  };

  return (
    <Fragment>
      {hide && (
        <div className="new_expense_form_wrapper" data-testid="main-expense-form-div">
          <div className="new_expense_container">
            <div className="end_close_icon">
              <button
                className="button_close_icon"
                data-testid="close-button"
                onClick={() => setHide(!hide)}
              >
                <CgClose />
              </button>
            </div>
            <h1 className="new_expense_heading">New Expense</h1>
            <form onSubmit={onSubmit} data-testid="form-container">
              <div className="form_container">
                <label className="form_label"> Expense</label>

                <input
                  type="text"
                  className="form_input"
                  required
                  value={expense}
                  onChange={(e) => setExpense(e.target.value)}
                />

                <label className="form_label">Amount </label>

                <input
                  type="number"
                  className="form_input"
                  required
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />

                <label className="form_label">Date</label>
                <input
                  type="date"
                  className="form_input"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />

                <label className="form_label" id="select_category">
                  Category
                </label>
                <select
                  name="Category"
                  className="form_input"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="select">--Select--</option>
                  <option value="travel">Travel</option>
                  <option value="food">Food</option>
                  <option value="rent">Rent</option>
                  <option value="salaries">Salaries</option>
                  <option value="maintaine" className="form_input">
                    Maintenance and Repairs
                  </option>
                  <option value="others">others</option>
                </select>

                <label className="form_label">Receipt</label>
                <input
                  type="file"
                  className="form_input"
                  required
                  value={receipt}
                  onChange={(e) => setReceipt(e.target.value)}
                />

                <label className="form_label">Status </label>
                <input
                  type="text"
                  className="form_input"
                  required
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                />
              </div>
              <div className="center_submit_button">
                <button value="submit" className="submit_button">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Fragment>
  );
}
