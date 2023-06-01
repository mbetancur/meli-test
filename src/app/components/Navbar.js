import React from 'react';
import Image from 'next/image';
import './styles/Navbar.css';

const Navbar = ({ children }) => {
  return (
    <nav className="navbar">
      <Image className="navbar__logo" src="/logo.png" alt="Logo" width="90" height="50" />
      {children}
    </nav>
  );
};

export default Navbar;
