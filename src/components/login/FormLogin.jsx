import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "../styles/login-styles/formLogin.css";
import axios from "axios";

const FormLogin = ({ setUser }) => {
  //uso el Hook useForm para guardar los valores que ingrese el usuario
  const { register, handleSubmit, reset } = useForm();

  //Funcion de Login
  const submit = (data) => {
    const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/users/login";

    axios
      .post(URL, data)
      .then((res) => {
        //si los Datos son correctos guardo el Token en el Local Storage para que tenga acceso a las rutas protegidas
        if (res.data.status === "success") {
          localStorage.setItem("token", res.data.data.token);

          setUser(res.data);
          reset({
            email: "",
            password: "",
          });
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <section className="login">
      <div className="login__container">
        <p className="login-welcome">
          Welcome! Enter yout email and password to continue
        </p>
        <div className="login__test-user">
          <h3>Test User</h3>
          <p>
            <i className="fa-solid fa-envelope"></i> danielabril01@gmail.com
          </p>
          <p>
            <i className="fa-solid fa-lock"></i> pass1234
          </p>
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <div className="login__option">
            <label id="email">Email</label>
            <input {...register("email")} id="email" type="email" />
          </div>
          <div className="login__option">
            <label id="pass" htmlFor="">
              Password
            </label>
            <input {...register("password")} id="pass" type="password" />
          </div>
          <button>LOGIN</button>
        </form>
      </div>
    </section>
  );
};

export default FormLogin;
