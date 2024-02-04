import React from "react"

import { useContextAuth } from "@/contexts/auth";
import useResource from "@/hooks/useResource";

export default function CreateForm(props) {
  let { user } = useContextAuth();
  let { resources, createResource, updateResource } = useResource();
  // TODO: stop inheriting cookieStand from main
  
  const [stateForm, setStateForm] = React.useState(
      {
      location: "Cookie Stand Location",
      minimum_customers_per_hour: 0,
      maximum_customers_per_hour: 0,
      average_cookies_per_sale: 0,
    }
  );

  React.useEffect(()=>{
    let resource = (resources && props.numEditing) ? resources.find(item => item.id===props.numEditing) : {
      location: "Cookie Stand Location",
      minimum_customers_per_hour: 0,
      maximum_customers_per_hour: 0,
      average_cookies_per_sale: 0,
      owner:{id:null},
      id:null,
    };
    let newResource = {
      location: resource.location,
      minimum_customers_per_hour: resource.minimum_customers_per_hour,
      maximum_customers_per_hour: resource.maximum_customers_per_hour,
      average_cookies_per_sale: resource.average_cookies_per_sale,
      owner: resource.owner.id,
      id: resource.id
    };
    setStateForm(prevState=>({...newResource}));
  },[resources, props.numEditing]);



  function handlerOnSubmit(event) {
    event.preventDefault();
    if (stateForm.location !== "Cookie Stand Location" && user && stateForm.id === null) {
      try {
        let newRecord = {
          location: stateForm.location,
          minimum_customers_per_hour: parseInt(stateForm.minimum_customers_per_hour),
          maximum_customers_per_hour: parseInt(stateForm.maximum_customers_per_hour),
          average_cookies_per_sale: parseInt(stateForm.average_cookies_per_sale),
          owner:user.id};
        createResource(newRecord);
        props.handlerEditing(null);
      } catch (err) {
        // TODO: Proper error handling
        console.log("Unable to create new record.");
      };
    } else if (stateForm.location !== "Cookie Stand Location" && user && stateForm.id !== null) {
      try {
        let newRecord = {
          location: stateForm.location,
          minimum_customers_per_hour: parseInt(stateForm.minimum_customers_per_hour),
          maximum_customers_per_hour: parseInt(stateForm.maximum_customers_per_hour),
          average_cookies_per_sale: parseInt(stateForm.average_cookies_per_sale),
          hourly_sales: [],
          owner:user.id,
          id:parseInt(stateForm.id)
        };
        updateResource(newRecord);
        props.handlerEditing(null);
      } catch (err) {
        // TODO: Proper error handling
        console.log("Unable to create new record.");
      };
    } else {
      // TODO: Proper error handling
      console.log("Must submit new information with form.");
    }
  }

  return (
    <form
      className="w-4/5 p-5 rounded-lg bg-customColor-400 border border-slate-700"
      onSubmit={handlerOnSubmit}
    >
      <div className="flex flex-col flex-nowrap items-center font-bold uppercase">
        <div className="flex flex-row flex-nowrap justify-between w-full">
          <div className="flex flex-col flex-nowrap items-center w-1/2 mr-10">
            <label
              className="block uppercase tracking-wide font-bold m-2"
              htmlFor="location"
            >
              ADD LOCATION
            </label>
            <input
              className="w-full p-2 bg-customColor-100 border border-slate-700"
              id="location"
              value = {stateForm.location}
              type="text"
              name="location"
              onChange={(e) => {
                setStateForm((prevState) => ({
                  ...prevState,
                  location: e.target.value,
                }));
              }}
            />
          </div>

          <div className="flex flex-col flex-nowrap w-1/4 h-90 mr-10">
            <button
              className="h-20 w-full rounded-md bg-customColor-500 hover:bg-customColor-100 border border-slate-700"
              type="submit"
            >
              {props.numEditing !== null? "UPDATE STAND": "CREATE STAND"}
            </button>
          </div>

          <div className="flex flex-col flex-nowrap w-1/4 h-90">
            <button
              className="h-20 w-full rounded-md bg-customColor-500 hover:bg-customColor-100 border border-slate-700"
              onClick={()=>props.handlerEditing(null)}
              type="button"
            >
              DISCARD
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
              id="minimum_customers_per_hour"
              type="number"
              value={stateForm.minimum_customers_per_hour}
              min="0"
              step="1"
              onChange={(e) => {
                setStateForm((prevState) => ({
                  ...prevState,
                  minimum_customers_per_hour: e.target.value,
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
              id="maximum_customers_per_hour"
              type="number"
              value={stateForm.maximum_customers_per_hour}
              min="0"
              step="1"
              onChange={(e) => {
                setStateForm((prevState) => ({
                  ...prevState,
                  maximum_customers_per_hour: e.target.value,
                }));
              }}
            />
          </div>

          <div className="h-20 flex flex-col flex-nowrap justify-center w-1/3 rounded-md">
            <label className="mb-2" htmlFor="average_cookies_per_sale">
              Average Cookies per Sale
            </label>
            <input
              className="p-2 w-full bg-customColor-100 border border-slate-700"
              id="average_cookies_per_sale"
              type="number"
              value={stateForm.average_cookies_per_sale}
              min="0"
              step="1"
              onChange={(e) => {
                setStateForm((prevState) => ({
                  ...prevState,
                  average_cookies_per_sale: e.target.value,
                }));
              }}
            />
          </div>
        </div>
      </div>
    </form>
  );
}