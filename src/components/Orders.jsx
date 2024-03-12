// src/components/Orders.jsx
import React, { useState } from 'react';

const Orders = () => {
  const initialOrder = { id: 0, customerName: '', orderDate: '', status: '' };

  const [orders, setOrders] = useState([
    { id: 1, customerName: 'Customer A', orderDate: '2022-03-15', status: 'Pending' },
    { id: 2, customerName: 'Customer B', orderDate: '2022-03-16', status: 'Shipped' },
    // Add more mock orders as needed
  ]);

  const [newOrder, setNewOrder] = useState({ ...initialOrder });
  const [editOrder, setEditOrder] = useState(null);

  const addOrder = () => {
    setOrders([...orders, { id: orders.length + 1, ...newOrder }]);
    setNewOrder({ ...initialOrder });
  };

  const editOrderHandler = (order) => {
    setEditOrder(order);
    setNewOrder(order);
  };

  const updateOrder = () => {
    setOrders((prevOrders) =>
      prevOrders.map((order) => (order.id === editOrder.id ? newOrder : order))
    );
    setNewOrder({ ...initialOrder });
    setEditOrder(null);
  };

  const deleteOrder = (orderId) => {
    setOrders(orders.filter((order) => order.id !== orderId));
  };

  return (
    <div>
      <h1>Orders Management</h1>

      {/* Display order list */}
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            Order ID: {order.id} - Customer: {order.customerName} - Date: {order.orderDate} - Status: {order.status}
            <button onClick={() => editOrderHandler(order)}>Edit</button>
            <button onClick={() => deleteOrder(order.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Add new order form */}
      <div>
        <h2>Add/Edit Order</h2>
        <input
          type="text"
          placeholder="Customer Name"
          value={newOrder.customerName}
          onChange={(e) => setNewOrder({ ...newOrder, customerName: e.target.value })}
        />
        <input
          type="date"
          placeholder="Order Date"
          value={newOrder.orderDate}
          onChange={(e) => setNewOrder({ ...newOrder, orderDate: e.target.value })}
        />
        <input
          type="text"
          placeholder="Status"
          value={newOrder.status}
          onChange={(e) => setNewOrder({ ...newOrder, status: e.target.value })}
        />
        {editOrder ? (
          <button onClick={updateOrder}>Update Order</button>
        ) : (
          <button onClick={addOrder}>Add Order</button>
        )}
      </div>
    </div>
  );
};

export default Orders;
