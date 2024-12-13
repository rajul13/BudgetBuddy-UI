import React, { useState } from "react";
import "./navbar.scss";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm py-3">
      <div className="container d-flex justify-content-between align-items-center">
        {/* <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src={"../images/BudgetBuddy.png"}
            alt="Budget Buddy Logo"
            width="40"
            height="40"
            className="me-2"
          />
          <span className="fw-bold text-primary">BudgetBuddy</span>
        </a> */}
        <span className="fw-bold text-primary">BudgetBuddy</span>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav d-flex justify-content-center mb-2 mb-lg-0 w-100">
            <li className="nav-item">
              <a className="nav-link active text-primary" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="#">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className={`nav-link dropdown-toggle text-secondary ${dropdownOpen ? "show" : ""}`}
                href="#"
                id="navbarDropdown"
                role="button"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown();
                }}
                aria-expanded={dropdownOpen}
              >
                Services
              </a>
              <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`} aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Consulting
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Budget Planning
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
            <li className="nav-item">
              <a className="nav-link text-secondary" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-primary px-4" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
