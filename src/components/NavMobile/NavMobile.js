import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavMobile.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt, faUserFriends } from '@fortawesome/free-solid-svg-icons';

const NavMobile = () => {
  return (
    <Navbar fixed="bottom" className="nav-mobile">
      <Nav
        navbar="true"
        className="w-100 d-flex justify-content-around align-items-center"
      >
        <Nav.Item className="nav-mobile-item">
          <FontAwesomeIcon icon={faCommentAlt} />
          <NavLink to="/" exact activeClassName="nav-mobile-link">
            Messages
          </NavLink>
        </Nav.Item>
        <Nav.Item className="nav-mobile-item">
          <FontAwesomeIcon icon={faUserFriends} />
          <NavLink to="/users" activeClassName="nav-mobile-link">
            Users
          </NavLink>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default NavMobile;
