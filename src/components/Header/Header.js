import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="header shadow py-4">
      <div className="d-flex justify-content-center align-items-center header-logo">
        <FontAwesomeIcon icon={faCommentAlt} className="header-logo-icon" />
        <h1>Light-Text</h1>
      </div>
    </header>
  );
};

export default Header;
