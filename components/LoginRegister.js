import React from "react";

import { useContextAuth } from "@/contexts/auth";
import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";

export default function LoginRegister(){
  let { loginFunction, registerFunction } = useContextAuth();
  let [ stateLoginForm, setStateLoginForm ] = React.useState({booLRegister: false});

  function handlerOnLogin(e) {
    e.preventDefault();
    let username = e.target.username.value;
    let password = e.target.password.value;
    if (username && password){
      loginFunction(username, password);
    } else {
      console.error("Login username and/or password not provided.")
    };
  };

  function handlerOnRegister(e){
    e.preventDefault();
    let username = e.target.username.value;
    let password1 = e.target.password1.value;
    let password2 = e.target.password2.value;
    let email = e.target.email.value;
    if (password1 !== password2){
      console.log("Passwords must match.")
    } else {
      registerFunction(username, password1, email);
    }
  };

  function handlerBoolRegister() {
    setStateLoginForm(prevState=>({...prevState,boolRegister:!prevState.boolRegister}))
  };

  return (
    <>
      { !stateLoginForm.boolRegister ?
        <LoginForm handlerOnLogin={handlerOnLogin} handlerBoolRegister={handlerBoolRegister} /> :
        <RegisterForm handlerOnRegister={handlerOnRegister} handlerBoolRegister={handlerBoolRegister} />
      }
    </>
  );
};
