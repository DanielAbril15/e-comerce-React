import React, { useState } from "react";
import FormLogin from "../login/FormLogin";
import UserProfile from "../login/UserProfile";

const Login = () => {
  const isLogged = localStorage.getItem("token");
  const [user, setUser] = useState();
  if (isLogged) {
    return <UserProfile user={user} />;
  } else {
    return <FormLogin setUser={setUser} />;
  }
};

export default Login;
