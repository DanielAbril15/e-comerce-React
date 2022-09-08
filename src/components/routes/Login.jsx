import React, { useState } from "react";
import FormLogin from "../login/FormLogin";
import UserProfile from "../login/UserProfile";

const Login = () => {
  const isLogged = localStorage.getItem("token");

  const [user, setUser] = useState();
  //condicional si el usuario hizo Login puede acceder a la informacion de usuario , si no, solo mostrara la pagina de login
  if (isLogged) {
    return <UserProfile user={user} />;
  } else {
    return <FormLogin setUser={setUser} />;
  }
};

export default Login;
