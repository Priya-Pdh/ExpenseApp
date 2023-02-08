import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ExpensePage from './pages/ExpensePage';
import NewExpense from './components/NewExpense';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/expensepage" element={<ExpensePage />} />
      <Route path="/newexpense" element={<NewExpense />} />
    </Routes>
  );
}
