// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignIn from './components/SignIn';
import CreateUser from './components/CreateUser';
import Dashboard from './components/Dashboard';
import EmployeeList from './components/EmployeeList';
import LeaveApproval from './components/LeaveApproval';
import Feedback from './components/Feedback';


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/leave-approval" element={<LeaveApproval />} />
        <Route path="/employee-list" element={<EmployeeList />} />
        <Route path="/create-employee" element={<CreateUser />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
