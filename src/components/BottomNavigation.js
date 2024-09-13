// src/components/BottomNavigation.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBookmark } from 'react-icons/fa';
import './BottomNavigation.css'; // Import your CSS for styling

const BottomNavigation = () => {
    return (
      <div className="bottom-navigation">
        <Link to="/" className="nav-link">
          <FaHome size={24} />
          <span className="nav-text">Jobs</span>
        </Link>
        <Link to="/bookmarks" className="nav-link">
          <FaBookmark size={24} />
          <span className="nav-text">Bookmarks</span>
        </Link>
      </div>
    );
  };
export default BottomNavigation;
