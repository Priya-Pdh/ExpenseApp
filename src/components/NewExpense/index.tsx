import React from 'react';
import './style.scss';

export default function NewExpense() {
  return (
    <>
      <div className="new_expense_container">
        <h1 className="new_expense_heading">New Expense</h1>
        <form>
          <div className="first_three_label">
            <label className="form_input">
              Expense
              <input type="text" required />
            </label>
            <label className="form_input">
              Amount
              <input type="number" required />
            </label>

            <label className="form_input">
              Date
              <input type="date" required />
            </label>
          </div>

          <div className="last_two_label">
            <label className="form_input" id="select_category">
              Category
              <select name="Category">
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
              <input type="file" required />
            </label>

            <label className="form_input">
              Status
              <input type="text" required />
            </label>
          </div>
          <button value="submit" className="submit_button">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
