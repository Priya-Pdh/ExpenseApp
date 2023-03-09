import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ExpensesPurchases from './pages/ExpensesPurchases';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/expense-reports" element={<ExpensesPurchases type="expense_reports" />} />
      <Route path="/purchase-requests" element={<ExpensesPurchases type="purchase_requests" />} />
    </Routes>
  );
}
