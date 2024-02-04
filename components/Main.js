import React from "react";

import CreateForm from "@/components/CreateForm";
import ReportTable from "@/components/ReportTable";

export default function Main(props) {
  let [ stateMain, setStateMain ] = React.useState({
    numEditing:null,
  });

  function handlerEditing(val) {
    setStateMain(prevState=>({...prevState, numEditing:val}))
  };

  return (
    <main className="flex flex-col flex-nowrap justify-center items-center mt-10 mb-10">
      <CreateForm numEditing={stateMain.numEditing} handlerEditing={handlerEditing} />
      <ReportTable handlerEditing={handlerEditing}/>
    </main>
  );
}

