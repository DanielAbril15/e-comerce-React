import React from "react";
import "../styles/login-styles/userProfile.css";
import { useNavigate } from "react-router-dom";

const UserProfile = ({ user }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  console.log(user);
  return (
    <section className="user-profile">
      <article className="profile__container">
        <div className="profile-picture">
          <i className="fa-regular fa-user"></i>
        </div>
        <p>
          {user?.data.user.firstName} {user?.data.user.lastName}
        </p>

        <button onClick={handleLogout}>Log Out</button>
      </article>
    </section>
  );
};

export default UserProfile;
