import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/dashboard";
import Customers from "../../pages/customers";
import Inventory from "../../pages/inventory";
import Orders from "../../pages/order";

const AppRoutes = () => {
  return (
    <div className="Routes">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
