import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import Orders from './components/Orders';
import CalendarView from './components/CalendarView';
import Navbar from './components/Navbar';
const App = () => {
  const totalProducts = 100;
  const totalOrders = 50;

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route
          path="/"
          element={<Dashboard totalProducts={totalProducts} totalOrders={totalOrders} />}
        />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/calendar-view" element={<CalendarView />} />
      </Routes>
    </Router>
  );
};

export default App;
