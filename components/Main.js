import CreateForm from "@/components/CreateForm";
import ReportTable from "@/components/ReportTable";
import React from "react";


export default function Main(props) {

  return (
    <main className="flex flex-col flex-nowrap justify-center items-center mt-10 mb-10">
      <CreateForm 
        cookieStand={props.cookieStand} 
        dispatch={props.dispatch}
        />
      <ReportTable 
        cookieStandsList = {props.cookieStandsList}
        />
    </main>
  );
}
