import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavDesktop.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt, faUserFriends } from '@fortawesome/free-solid-svg-icons';

const NavDesktop = () => {
  return (
    <Navbar className="nav-desktop d-none d-lg-block rounded">
      <Nav
        navbar="true"
        className="w-100 d-flex flex-column justify-content-center align-items-start"
      >
        <Nav.Item className="nav-desktop-item">
          <FontAwesomeIcon icon={faCommentAlt} />
          <NavLink to="/" exact activeClassName="nav-desktop-link">
            Messages
          </NavLink>
        </Nav.Item>
        <Nav.Item className="nav-desktop-item">
          <FontAwesomeIcon icon={faUserFriends} />
          <NavLink to="/users" activeClassName="nav-desktop-link">
            Users
          </NavLink>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default NavDesktop;
