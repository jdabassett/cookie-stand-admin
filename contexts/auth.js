import React from "react";
import jwt from "jsonwebtoken";
// import { parse } from "next/dist/build/swc";
// import axios from "axios";

const tokenUrl = process.env.NEXT_PUBLIC_API_URL + "api/token/";
const registerUrl = process.env.NEXT_PUBLIC_API_URL + "api/register/";
const AuthContext = React.createContext();

export function useContextAuth() {
  const auth = React.useContext(AuthContext);
  if (!auth) {
    throw new Error("You forgot AuthProvider.");
  }
  return auth;
};

export function AuthProvider(props) {
  const [stateAuth, setStateAuth] = React.useState({
    tokens: null,
    accessToken: null,
    refreshToken: null,
    // user: { username: "jacob", email: "email", id: "1" },
    user:null,
    loginFunction: loginFunction,
    logoutFunction: logoutFunction,
    registerFunction: registerFunction,
  });

  // React.useEffect(() => {
  //   const fetchDataFromLocalStorage = () => {
  //     try {
  //       const storedUser = localStorage.getItem('user');
  //       // const storedAccessToken = localStorage.getItem('accessToken');
  //       // console.log("inside useEffect",JSON.parse(storedAccessToken));

  //       if (storedUser) {
  //         let parsedUser = JSON.parse(storedUser);
  //         // let parsedAccessToken = JSON.parse(storedAccessToken);
  //         setStateAuth(prevState => ({...prevState, user: parsedUser, accessToken:parsedAccessToken}));
          
  //       } else {
  //         console.log("Not retrieving anything from local storage.");
  //       };
  //     } catch (error) {
  //       console.log('Error retrieving data from local storage:', error);
  //     }
  //   };

  //   fetchDataFromLocalStorage();
  // }, []);

  async function loginFunction(username, password) {
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
      accessToken: data.access,
      refreshToken: data.refreshToken,
      user: {
        username: decodedAccess.username,
        email: decodedAccess.email,
        id: decodedAccess.user_id,
      },
    };
    // localStorage.setItem("user",JSON.stringify(newState.user));
    // localStorage.setItem("accessToken",JSON.stringify(data.access));
    setStateAuth((prevState) => ({ ...prevState, ...newState }));
  };

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
    setStateAuth((prevState) => ({ ...prevState, tokens: null, accessToken:null, refreshToken:null, user: null }));
    localStorage.clear();
  };

  async function registerFunction(username, password, email) {
    const options = {
      method: "POST",
      body: JSON.stringify({ username, password, email }),
      headers: { "Content-Type": "application/json" },
    };
    try {
      const response = await fetch(registerUrl, options);
      const data = await response.json();
      if (response.ok){
        loginFunction(username, password);
      } else {
        console.log("Problem login in after register.")
      };
    } catch(err) {
      console.log("Registeration Failed", err);
    };
  };
  console.log("auth", stateAuth.user);
  return (
    <AuthContext.Provider value={stateAuth}>
      {props.children}
    </AuthContext.Provider>
  );
}
