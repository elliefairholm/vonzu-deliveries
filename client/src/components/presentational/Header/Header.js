import React from 'react';
import './Header.css';

import logo from '../../../assets/logo.png'

function Header () {
  return (
    <div className="header" data-testid="header">
      <div className="logo-container">
        <img src={logo} alt="Vonzu Logo" />
      </div>
    </div>
  );
}

export default Header;
