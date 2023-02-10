import { NewExpenseProps } from '../../types/Types';
import React, { useContext } from 'react';

type NewExpenseProviderProps = {
  children: React.ReactNode;
};

export type NewExpenseContextProps = {
  setExpense: React.Dispatch<React.SetStateAction<string>>;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
  setDate: React.Dispatch<React.SetStateAction<number>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  setReceipt: React.Dispatch<React.SetStateAction<string>>;
};

export const NewExpenseContext = React.createContext(
  {} as NewExpenseContextProps | NewExpenseProps
);

export function useNewExpenseContext() {
  return useContext(NewExpenseContext);
}

export function NewExpenseProvider({ children }: NewExpenseProviderProps) {
  const [expense, setExpense] = React.useState('');
  const [amount, setAmount] = React.useState(0);
  const [date, setDate] = React.useState(0);
  const [category, setCategory] = React.useState('');
  const [receipt, setReceipt] = React.useState('');

  return (
    <NewExpenseContext.Provider
      value={{
        expense,
        setExpense,
        amount,
        setAmount,
        date,
        setDate,
        category,
        setCategory,
        receipt,
        setReceipt,
      }}
    >
      {children}
    </NewExpenseContext.Provider>
  );
}
