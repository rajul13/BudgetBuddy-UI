import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/profile-component.scss";
import profileImg from "../images/profile-pic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Remove the user data from localStorage
    localStorage.removeItem("user");

    // Redirect the user to the login page
    navigate("/");
  };

  return (
    <div className="profile-dropdown">
      <div className="profile-icon" onClick={toggleDropdown}>
        <img
          src={profileImg}
          alt="Profile"
          className="profile-image"
          width="48"
          height="48"
        />
        <span className="profile-text  text-decoration-underline ms-2">
          Profile
        </span>
        <FontAwesomeIcon icon={faChevronDown} className="dropdown-arrow" />
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
           <li>
            <a href="/profile">My Profile</a>  {/* Update the link */}
          </li>
          <li>
            <a href="/settings">Settings</a>
          </li>
          <li>
            <a href="#" onClick={handleLogout}>
              Logout
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ProfileDropdown;
