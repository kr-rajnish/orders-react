import React, { useState } from "react";

const ordersData = [
  { id: 1, ordername: "Order 1", orderstatus: "completed" },
  { id: 2, ordername: "Order 2", orderstatus: "pending" },
  { id: 3, ordername: "Order 3", orderstatus: "aborted" },
  { id: 4, ordername: "Order 4", orderstatus: "completed" },
  { id: 5, ordername: "Order 5", orderstatus: "pending" },
  { id: 6, ordername: "Order 6", orderstatus: "aborted" }
];

const OrderTable = () => {
  const [statusFilter, setStatusFilter] = useState("all");

  const handleFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };

  const filteredOrders =
    statusFilter === "all"
      ? ordersData
      : ordersData.filter((order) => order.orderstatus === statusFilter);

  return (
    <div>
      <h2>Orders</h2>
      <div>
        <label htmlFor="statusFilter">Filter by Status:</label>
        <select
          id="statusFilter"
          value={statusFilter}
          onChange={handleFilterChange}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
          <option value="aborted">Aborted</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Order Name</th>
            <th>Order Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.ordername}</td>
              <td>{order.orderstatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
