import React from "react";
import { useForm } from "react-hook-form";
import "../styles/login-styles/formLogin.css";
import axios from "axios";

const FormLogin = ({ setIsLogged, setUser }) => {
  const { register, handleSubmit, reset } = useForm();
  const submit = (data) => {
    const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/users/login";

    axios
      .post(URL, data)
      .then((res) => {
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
            <i className="fa-solid fa-envelope"></i> danielabril@gmail.com
          </p>
          <p>
            <i className="fa-solid fa-lock"></i> 192837465
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
