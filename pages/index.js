import React from "react";

import Head from "next/head";
// import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import { useContextAuth } from "@/contexts/auth";
// import { useResources } from "@/hooks/useResource";

import {hours, api_locations} from "@/data/data.js";

function reducer(stateCookieStandAdmin, action){
  switch (action.type) {
    // case 'createCookieStand': TODO trigger creation of cookiestand;
    case 'updateCookieStandsList': return {...stateIndex, cookieStandsList: action.payload};
  };
};

export default function CookieStandAdmin() {
  let { tokens, user, loginFunction, logoutFunction } = useContextAuth();
  // TODO: remove 
  let [stateCookieStandAdmin, dispatch] = React.useReducer(reducer,{
    cookieStandsList: api_locations || [],
    // cookieStandsList: [],
    cookieStand:{
      location:"Cookie Stand Location", 
      owner:null,
      description:"placeholder",
      minCustPerHour:0,
      maxCustPerHour:0,
      averCookiesPerSale:0},
  });

  // console.log("Index", stateCookieStandAdmin.cookieStandsList);
  return (
    <div className="bg-customColor-100 text-gray-800">
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <Header user={user} logoutFunction={logoutFunction} />

      { user ?

      <Main
        cookieStand = {stateCookieStandAdmin.cookieStand}
        cookieStandsList = {stateCookieStandAdmin.cookieStandsList}
        dispatch = {dispatch}
      />:

      <LoginForm 
        loginFunction={loginFunction}/>
      }

      <Footer
        cookieStandsList = {stateCookieStandAdmin.cookieStandsList}
      />
    </div>
  );
};



function Header(props) {
  return(
    <header className="flex flex-row flex-nowrap justify-between p-5 bg-customColor-500 font-bold border border-slate-700">
      <h1 className="text-3xl"
        >Cookie Stand Admin</h1>
      {props.user
        ?
        <div>
          <button className="p-2 rounded-md bg-customColor-200 text-md border border-slate-700">
           {props.user.username}
          </button>
          <button className=" m-1 p-2 rounded-md bg-customColor-200 hover:bg-customColor-100 text-md border border-slate-700"
          onClick={props.logoutFunction}>
            Sign Out
          </button>
          <button className=" p-2 rounded-md bg-customColor-200 hover:bg-customColor-100 text-md border border-slate-700">
            Overview
          </button>
        </div>
        :
        <div>
          <button className=" p-2 rounded-md bg-customColor-200 hover:bg-customColor-100 text-md border border-slate-700">
            Overview
          </button>
        </div>

      }
    </header>
  );
}


function LoginForm(props){
  
  function handlerOnSubmit(e) {
    e.preventDefault();
    let username = e.target.username.value;
    let password = e.target.password.value;
    if (username && password){
      props.loginFunction(username, password)
    } else {
      console.error("Login username and/or password not provided.")
    };
  }

  return (
    <form className="flex flex-col flex-nowrap justify-center items-center mt-10 mb-10 mr-auto ml-auto w-10/12 p-5 rounded-lg bg-customColor-400 border border-slate-700" onSubmit={handlerOnSubmit}>
        <div className="w-11/12">
          <h2 className="w-full mt-1 text-center text-xl" >USER NAME</h2>
          <input className="w-full mt-3 border p-2" name="username" type="text" placeholder="User Name"></input>
          <h2 className="w-full mt-4 text-center text-xl" >PASSWORD</h2>
          <input className="w-full mt-3 border p-2" name="password" type="password" placeholder="Password"></input>
          <button className="w-full mt-5 border bg-customColor-500 hover:bg-customColor-100 border-slate-700 p-3 rounded-md" type="submit">Log In</button>
        </div>
    </form>
  );
};


