// import tools
import React from "react";
import jwt from "jsonwebtoken";
import axios from "axios";

// global variables
const tokenUrl = process.env.NEXT_PUBLIC_API_URL + "api/token/";
const AuthContext = React.createContext();

// create use context
export function useContextAuth() {
  const auth = React.useContext(AuthContext);
  if (!auth) {
    throw new Error("You forgot AuthProvider.");
  }
  return auth;
}

// create context provider
export function AuthProvider(props) {
  const [stateAuth, setStateAuth] = React.useState({
    tokens: null,
    // user: { username: "jacob", email: "email", id: "1" },
    user:null,
    loginFunction: loginFunction,
    logoutFunction: logoutFunction,
  });

  async function loginFunction(username, password) {
    // console.log("Login Function", username, password);

    const options = {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    };

    const response = await fetch(tokenUrl, options);

    const data = await response.json();

    const decodedAccess = jwt.decode(data.access);

    const newState = {
      tokens: data,
      user: {
        username: decodedAccess.username,
        email: decodedAccess.email,
        id: decodedAccess.user_id,
      },
    };

    setStateAuth((prevState) => ({ ...prevState, ...newState }));
  }

  // function loginFunction(username, password){
  // let tokenBody = { 'username':username, 'password':password};
  // let tokenHeaders = {'Content-Type':'application/json'};
  // axios.post(tokenUrl, tokenBody, {tokenHeaders})
  //   .then((res)=>{
  //     const data = res.data;
  //     const decodedAccess = jwt.decode(data.access);
  //     console.log("Auth", data)
  //     setStateAuth(prevState => ({...prevState,
  //       tokens:data,
  //       user:{
  //         username: decodedAccess.username,
  //         password: decodedAccess.password,
  //         id: decodedAccess.user_id,
  //       }}));
  //   })
  // handle error in request formation, lack of response, or error in response
  // .catch((err)=>{
  //   if (err.response){
  //     console.error("Server responded with error", err.response.data);
  //   } else if (err.request){
  //     console.error("No response from server");
  //   } else {
  //     console.error("Error setting up the request: ", err.message);
  //   }
  // });
  // };

  // when performing a logout, reset auth state
  function logoutFunction() {
    setStateAuth((prevState) => ({ ...prevState, tokens: null, user: null }));
  }

  // console.log("AuthContext", stateAuth.user);
  // console.log("AuthContext", tokenUrl);

  // return provider
  return (
    <AuthContext.Provider value={stateAuth}>
      {props.children}
    </AuthContext.Provider>
  );
}
