import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from "react-router-dom";

export default function Header({ title = "My Todos List" }) {
  const navClass = ({ isActive }) => `nav-link${isActive ? " active fw-semibold" : ""}`;

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          {title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
            <li className="nav-item">
              <NavLink className={navClass} to="/" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={navClass} to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};
