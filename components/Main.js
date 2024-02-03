import React from "react";
import { TrashIcon } from "@heroicons/react/24/solid";

import { hours, api_locations } from "@/data/data.js";
// import CreateForm from "@/components/CreateForm";
// import ReportTable from "@/components/ReportTable";
import { useContextAuth } from "@/contexts/auth";
import useResource from "@/hooks/useResource";

export default function Main(props) {
  const { resources, deleteResource } = useResource();

  // console.log("Main",resources);

  return (
    <main className="flex flex-col flex-nowrap justify-center items-center mt-10 mb-10">
      <CreateForm cookieStand={props.cookieStand} dispatch={props.dispatch} />
      <ReportTable cookieStandsList={resources || []} />
    </main>
  );
}

function CreateForm(props) {
  let { user } = useContextAuth();
  let { createResource } = useResource();
  // TODO: stop inheriting cookieStand from main
  const [stateForm, setFormState] = React.useState({
      location: "Cookie Stand Location",
      description: "placeholder",
      minCustPerHour: 0,
      maxCustPerHour: 0,
      averCookiesPerSale: 0,
    }
  );

  function handlerOnSubmit(event) {
    // console.log("handlerOnSubmit", event.target.location.value, user);
    event.preventDefault();
    if (stateForm.location !== "Cookie Stand Location" && user) {
      try {
        let newRecord = {
          location: stateForm.location,
          minimum_customers_per_hour: parseInt(stateForm.minCustPerHour),
          maximum_customers_per_hour: parseInt(stateForm.maxCustPerHour),
          average_cookies_per_sale: parseFloat(stateForm.averCookiesPerSale),
          owner:user.id};
        // console.log("newRecord", newRecord);
        createResource(newRecord);
      } catch (err) {
        // TODO: Proper error handling
        console.log("Unable to create new record.");
      }
    } else {
      // TODO: Proper error handling
      console.log("Must submit new information with form.");
    }
    setFormState((prevState) => ({
      location: "Cookie Stand Location",
      owner: null,
      description: "placeholder",
      minCustPerHour: 0,
      maxCustPerHour: 0,
      averCookiesPerSale: 0,
    }));
  }

  return (
    <form
      className="w-4/5 p-5 rounded-lg bg-customColor-400 border border-slate-700"
      onSubmit={handlerOnSubmit}
    >
      <div className="flex flex-col flex-nowrap items-center font-bold uppercase">
        <div className="flex flex-row flex-nowrap justify-between w-full">
          <div className="flex flex-col flex-nowrap items-center w-2/3 mr-10">
            <label
              className="block uppercase tracking-wide font-bold m-2"
              htmlFor="location"
            >
              ADD LOCATION
            </label>
            <input
              className="w-full p-2 bg-customColor-100 border border-slate-700"
              id="location"
              placeholder={stateForm.location}
              type="text"
              name="location"
              onChange={(e) => {
                setFormState((prevState) => ({
                  ...prevState,
                  location: e.target.value,
                }));
              }}
            />
          </div>

          <div className="flex flex-col flex-nowrap w-1/3 h-90">
            <button
              className="h-20 w-full rounded-md bg-customColor-500 hover:bg-customColor-100 border border-slate-700"
              type="submit"
            >
              CREATE STAND
            </button>
          </div>
        </div>

        <div className="flex flex-row flex-nowrap justify-between items-center w-full text-xs text-center">
          <div className="h-20 flex flex-col flex-nowrap justify-center w-1/3 rounded-md mr-10">
            <label className="mb-2" htmlFor="minCustomersPerHour">
              Minimum Customers per Hour
            </label>
            <input
              className="w-full p-2 bg-customColor-100 border border-slate-700"
              id="minCustomersPerHour"
              type="number"
              placeholder={stateForm.minCustPerHour}
              min="0"
              step="1"
              onChange={(e) => {
                setFormState((prevState) => ({
                  ...prevState,
                  minCustPerHour: e.target.value,
                }));
              }}
            />
          </div>

          <div className="h-20 flex flex-col flex-nowrap justify-center w-1/3 rounded-md mr-10">
            <label className="mb-2" htmlFor="maxCustomersPerHour">
              Maximum Customers per Hour
            </label>
            <input
              className="w-full p-2 bg-customColor-100 border border-slate-700"
              id="maxCustomersPerHour"
              type="number"
              placeholder={stateForm.maxCustPerHour}
              min="0"
              step="1"
              onChange={(e) => {
                setFormState((prevState) => ({
                  ...prevState,
                  maxCustPerHour: e.target.value,
                }));
              }}
            />
          </div>

          <div className="h-20 flex flex-col flex-nowrap justify-center w-1/3 rounded-md">
            <label className="mb-2" htmlFor="averCookiesPerSale">
              Average Cookies per Sale
            </label>
            <input
              className="p-2 w-full bg-customColor-100 border border-slate-700"
              id="averCookiesPerSale"
              type="number"
              placeholder={stateForm.averCookiesPerSale}
              min="0"
              step="1"
              onChange={(e) => {
                setFormState((prevState) => ({
                  ...prevState,
                  averCookiesPerSale: e.target.value,
                }));
              }}
            />
          </div>
        </div>
      </div>
    </form>
  );
}

function ReportTable(props) {
  let { deleteResource } = useResource();
  // console.log("ReportTable", props.cookieStandsList);
  if (!props.cookieStandsList || props.cookieStandsList.length == 0) {
    return (
      <div className="w-4/5 m-10">
        <p className="text-center">No Cookie Stands Available...</p>
      </div>
    );
  }

  let numLocations = props.cookieStandsList.length;
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
  let tableBody = props.cookieStandsList.map((item, idx) => {
    return (
      <tr
        className={idx % 2 == 1 ? "bg-customColor-400" : "bg-customColor-200"}
        key={`${item.location}_${idx}`}
      >
        {/* each location cell within table */}
        <td className="w-1/5 text-left border border-slate-700 pl-1 p-1">
          {
            <div className="flex flex-row flex-nowrap justify-between align-center">
              <p>{item.location}</p>
              <TrashIcon className="h-5 w-1/5" onClick={()=>deleteResource(item.id)} />
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
  props.cookieStandsList.forEach((location) => {
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
