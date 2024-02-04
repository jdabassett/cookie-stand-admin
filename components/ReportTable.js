import React from "react";
import { TrashIcon, PencilIcon, XCircleIcon } from '@heroicons/react/24/solid';

import {hours} from "@/data/data";
import useResource from "@/hooks/useResource";

export default function ReportTable(props) {
  const { resources, deleteResource } = useResource();
  let [ stateReportTable, setStateReportTable ] = React.useState({
    numDeleting:null,
  });
  

  if (!resources || resources.length == 0) {
    return (
      <div className="w-4/5 m-10">
        <p className="text-center">No Cookie Stands Available...</p>
      </div>
    );
  }

  let numLocations = resources.length;
  // generate table header
  let header = ["Locations", ...hours, "Totals"];
  let tableHeader = header.map((time, idx) => (
    <th
      className={
        idx === 0
          ? "w-1/5 text-left p-1 border border-slate-700"
          : "w-1/20 text-right p-1 border border-slate-700"
      }
      key={`${time}_head_${idx}`}
    >
      {time}
    </th>
  ));

  // generate body of table
  let tableBody = resources.map((item, idx) => {
    return (
      <tr
        className={`${(idx % 2 == 1) ? "bg-customColor-400 " : "bg-customColor-200 "}`}
        key={`${item.location}_${idx}`}
      >
        {/* each location cell within table */}
        <td className={`w-1/4 text-left border border-slate-700 pl-1 p-1`}>
          {
            <div className="flex flex-row flex-nowrap justify-between align-center">
              <p>{item.location}</p>
              { stateReportTable.numDeleting == item.id ? (
                <div className="flex-row flex-nowrap w-1/2">
                  <TrashIcon className="h-4 w-1/20 inline" onClick={()=>deleteResource(item.id)} />
                  <XCircleIcon className="h-4 w-1/20 inline" onClick={()=>setStateReportTable((prevState)=>({...prevState, numDeleting:null, numEditing:null}))}/>
                
                </div>
              ):(
                <div className="flex-row flex-nowrap justify-end">
                  <PencilIcon className="h-4 w-1/20 inline" onClick={()=>props.handlerEditing(item.id)}/>
                  <TrashIcon className="h-4 w-1/20 inline" onClick={()=>setStateReportTable((prevState)=>({...prevState, numDeleting:item.id, numEditing:null}))} />
                </div>
              )}
            </div>
          }
        </td>

        {/* each cell of numbers in the table */}
        {item.hourly_sales.map((number, index) => (
          <td
            className="w-1/20 text-right p-1 border border-slate-700"
            key={`${item.location}_${number}_${index}`}
          >
            {number}
          </td>
        ))}

        <td className="w-1/20 text-right p-1 border border-slate-700">
          {item.hourly_sales.reduce((acc, item) => {
            return acc + item;
          }, 0)}
        </td>
      </tr>
    );
  });

  // generate footer of table
  // each column sum
  let foot = new Array(hours.length).fill(0);
  resources.forEach((location) => {
    location.hourly_sales.forEach((number, idx) => {
      foot[idx] += number;
    });
  });

  // table total
  let total = foot.reduce((acc, number) => {
    return acc + number;
  }, 0);

  let footer = ["Totals", ...foot, total];

  let tableFoot = footer.map((item, idx) => (
    <td
      className={`${
        idx === 0 ? "w-1/5 text-left " : "w-1/20 text-right "
      } p-2 border border-slate-700`}
      key={`${item}_foot_${idx}`}
    >
      {item}
    </td>
  ));

  return (
    <table className="w-4/5 m-10 border border-slate-700 bg-customColor-400 table-auto text-black text-center">
      <thead>
        <tr>{tableHeader}</tr>
      </thead>
      <tbody>{tableBody}</tbody>
      <tfoot>
        <tr
          className={`p-1 font-bold ${
            numLocations % 2 == 1 ? " bg-customColor-500" : "bg-customColor-200"
          }`}
        >
          {tableFoot}
        </tr>
      </tfoot>
    </table>
  );
}