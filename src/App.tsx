import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import ExpensePage from './pages/expensePage/expensePage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/expensepage" element={<ExpensePage />} />
    </Routes>
  );
}
