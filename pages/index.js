import React from "react";

import Head from "next/head";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

import {hours, locations} from "@/data/data.js";

function reducer(stateCookieStandAdmin, action){
  switch (action.type) {
    case 'updateCookieStand': return {...stateIndex, cookieStand: action.payload};
    case 'updateCookieStandsList': return {...stateIndex, cookieStandsList: action.payload};
  };
};

export default function CookieStandAdmin() {
  let [stateCookieStandAdmin, dispatch] = React.useReducer(reducer,{
    cookieStandsList: locations || [],
    // cookieStandsList: [],
    cookieStand:{
      location:"placeholder", 
      owner:null,
      description:"placeholder",
      minCustPerHour:0,
      maxCustPerHour:0,
      averCookiesPerSale:0},
  });

  return (
    <div className="bg-customColor-100 text-gray-800">
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <Header/>

      <Main
        cookieStand = {stateCookieStandAdmin.cookieStand}
        cookieStandsList = {stateCookieStandAdmin.cookieStandsList}
        dispatch = {dispatch}
      />

      <Footer
        cookieStandsList = {stateCookieStandAdmin.cookieStandsList}
      />
    </div>
  );
};


