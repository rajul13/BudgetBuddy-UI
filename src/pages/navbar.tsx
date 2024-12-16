import React, { useState } from "react";
import "./navbar.scss";
import ProfileDropdown from "../components/profile-dropdown-component";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm py-3">
      <div className="container-fluid d-flex justify-content-between align-items-center">
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
          <ul className="navbar-nav mb-2 mb-lg-0 w-100 d-flex justify-content-center">
            <li className="nav-item">
              <a className="nav-link text-primary" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="#">
                About
              </a>
            </li>

            {/* Features dropdown with manual toggle */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-secondary"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown();
                }}
                aria-expanded={dropdownOpen ? "true" : "false"}
              >
                Features
              </a>
              <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`} aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Set Budget
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Bufget History
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Other Services
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <span className="fw-bold text-primary fs-2">Budget Buddy</span>

        <ProfileDropdown />
      </div>
    </nav>
  );
}

export default Navbar;
