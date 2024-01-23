import Form from "@/components/Form";
import Table from "@/components/Table";
import React from "react";

function reducer(stateMain, action){
  switch (action.type) {
    case 'updateCookieStand': return {...stateMain, cookieStand: action.payload};
  };
};

export default function Main() {
  const [stateMain, dispatch] = React.useReducer(
    reducer,
    {
    cookieStand:{
    location:"placeholder", 
    owner:null,
    description:"placeholder",
    minCustPerHour:0,
    maxCustPerHour:0,
    averCookiesPerSale:0},
    }
  );


  // console.log("main",stateMain.cookieStand)
  return (
    <main className="flex flex-col flex-nowrap justify-center items-center mt-10 mb-10">
      <Form 
        cookieStand={stateMain.cookieStand} 
        dispatch={dispatch}
        />
      <Table />
    </main>
  );
}
