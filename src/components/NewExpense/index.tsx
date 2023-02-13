import React, { useState } from 'react';
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
    <>
      {hide && (
        <div className="new_expense_container">
          <div className="close_icon">
            <button onClick={() => setHide(!hide)}>
              <CgClose />
            </button>
          </div>

          <h1 className="new_expense_heading">New Expense</h1>
          <form onSubmit={onSubmit}>
            <div className="form_container">
              <label className="form_input">
                Expense
                <input
                  type="text"
                  required
                  value={expense}
                  onChange={(e) => setExpense(e.target.value)}
                />
              </label>
              <label className="form_input">
                Amount
                <input
                  type="number"
                  required
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </label>

              <label className="form_input">
                Date
                <input
                  type="calender"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </label>

              <label className="form_input" id="select_category">
                Category
                <select
                  name="Category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="select">--Select--</option>
                  <option value="travel">Travel</option>
                  <option value="food">Food</option>
                  <option value="rent">Rent</option>
                  <option value="salaries">Salaries</option>
                  <option value="maintaine">Maintenance and Repairs</option>
                  <option value="others">others</option>
                </select>
              </label>

              <label className="form_input">
                Receipt
                <input
                  type="file"
                  required
                  value={receipt}
                  onChange={(e) => setReceipt(e.target.value)}
                />
              </label>

              <label className="form_input">
                Status
                <input
                  type="text"
                  required
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                />
              </label>
            </div>
            <button value="submit" className="submit_button">
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
}
