import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../components/myProfile-component.scss";  
const MyProfile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      navigate("/"); 
    }
  }, [navigate]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="my-profile">
      <div className="container">
        <div className="profile-header">
          <h2 className="text-primary">My Profile</h2>
        </div>
        <div className="profile-details">
          <div className="profile-item">
            <span className="profile-label">Username:</span>
            <span className="profile-value">{user}</span>
          </div>
          <div className="profile-item">
            <span className="profile-label">Email:</span>
            <span className="profile-value">{user}</span>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
