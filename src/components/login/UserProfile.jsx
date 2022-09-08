import React from "react";
import "../styles/login-styles/userProfile.css";
import { useNavigate } from "react-router-dom";

const UserProfile = ({ user }) => {
  //traigo la informacion del Usuario, para poderla mostrar en el perfil del Usuario
  const navigate = useNavigate();

  //funcion de Logout que borra el token del localStorage y asi ya no poder acceder a rutas protegidas
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

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
