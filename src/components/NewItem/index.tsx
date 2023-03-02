import React, { ChangeEvent, Fragment, useState } from 'react';
import './style.scss';
import { listProps } from '../../types/Types';
import { useTranslation } from 'react-i18next';

import { CgClose } from 'react-icons/cg';

type Props = {
  type: 'expense' | 'purchase';
  onClick: (data: listProps) => void;
  showForm: boolean;
  setShowForm: React.ComponentState;
};

export default function NewItem(props: Props) {
  const [item, setItem] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [receipt, setReceipt] = useState<string | undefined>('');
  const [status, setStatus] = useState('');

  const { t } = useTranslation();

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const data: listProps = {
      id: new Date().toJSON.toString(),
      item,
      price,
      date,
      category,
      receipt,
      status,
    };
    props.onClick(data);
  };

  const handleSetReciept = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    setReceipt(files?.item(0)?.name);
  };

  return (
    <div className="new_expense_form_wrapper" data-testid="main-expense-form-div">
      <div className="new_expense_container">
        <div className="end_close_icon">
          <button
            className="button_close_icon"
            data-testid="close-button"
            onClick={() => props.setShowForm(false)}
          >
            <CgClose />
          </button>
        </div>
        <h1 className="new_expense_heading">
          {props.type === 'expense' ? t('report_expense') : t('create_request')}
        </h1>
        <form onSubmit={onSubmit} data-testid="form-container">
          <div className="form_container">
            <label className="form_label">{t('item')}</label>

            <input
              type="text"
              className="form_input"
              required
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />

            <label className="form_label">{t('price')}</label>

            <input
              type="number"
              className="form_input"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <label className="form_label">{t('date')}</label>
            <input
              type="date"
              className="form_input"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

            <label className="form_label" id="select_category">
              {t('category')}
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

            {props.type === 'expense' && (
              <Fragment>
                <label className="form_label">{t('receipt')}</label>
                <input type="file" className="form_input" required onChange={handleSetReciept} />
              </Fragment>
            )}

            <label className="form_label">{t('status')}</label>
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
              {t('submit')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
