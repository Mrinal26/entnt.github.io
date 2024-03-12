import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({ totalProducts, totalOrders }) => {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>

      <div className="key-metrics">
        <div className="metric-card">
          <h2>Total Products</h2>
          <p>{totalProducts}</p>
        </div>
        <div className="metric-card">
          <h2>Total Orders</h2>
          <p>{totalOrders}</p>
        </div>
      </div>

      <div className="navigation-links">
        <Link to="/products" className="nav-link">
          <div className="nav-card">
            <h2>Product Management</h2>
            <p>Manage your products</p>
          </div>
        </Link>
        <Link to="/orders" className="nav-link">
          <div className="nav-card">
            <h2>Order Management</h2>
            <p>Manage your orders</p>
          </div>
        </Link>
        <Link to="/calendar-view" className="nav-link">
          <div className="nav-card">
            <h2>Calendar View</h2>
            <p>View your orders on a calendar</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
