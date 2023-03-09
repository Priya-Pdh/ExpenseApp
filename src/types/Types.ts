export type listProps = {
  id: string;
  item: string;
  price: string;
  date: string;
  category: string;
  receipt?: string;
  status: string;
  new: boolean;
};

export type formType = 'expense_reports' | 'purchase_requests' | 'hidden';
