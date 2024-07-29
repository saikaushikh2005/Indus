import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/common/Sidebar.css'; 
import LogoImg from '../../assets/logo.png'; 

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><img src={LogoImg} alt="Indus Logo" className="logo-image" /></li>
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="/leave-approval">Leave Approval</NavLink></li>
          <li><NavLink to="/employee-list">Employee List</NavLink></li>
          <li><NavLink to="/create-employee">Create Employee</NavLink></li>
          <li><NavLink to="/feedback">Feedback</NavLink></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
