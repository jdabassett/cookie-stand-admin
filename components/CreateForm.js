import React from "react"


export default function CreateForm(props) {
  const [stateForm, setFormState] = React.useState(props.cookieStand || {
    location:"placeholder", 
    owner:null,
    description:"placeholder",
    minCustPerHour:0,
    maxCustPerHour:0,
    averCookiesPerSale:0});

  function handlerOnSubmit(event){
    event.preventDefault();
    // console.log("handlerOnSubmit triggered");
    props.dispatch({
      type:"updateCookieStand",
      payload: stateForm
    });
    setFormState(prevState => ({
      location:"placeholder", 
      owner:null,
      description:"placeholder",
      minCustPerHour:0,
      maxCustPerHour:0,
      averCookiesPerSale:0}))
  };
  // console.log("Form", stateForm)

  return (
    <form className="w-4/5 p-5 rounded-lg bg-customColor-400 border border-slate-700"
        onSubmit={handlerOnSubmit}>
        <div className="flex flex-col flex-nowrap items-center font-bold uppercase">

          <div className="flex flex-row h-10 flex-nowrap w-11/12 justify-center items-center">
            <h2 className="text-2xl font-bold">Create Cookie Stand</h2>
          </div>


          <div className="flex flex-row flex-nowrap items-center w-11/12 m-2">
            <label
              className="block uppercase tracking-wide font-bold m-2"
              htmlFor="location"
            >
              Location
            </label>
            <input
              className="w-full bg-customColor-100 border border border-slate-700"
              id="location"
              placeholder={stateForm.location}
              type="text"
              onChange={(e)=>{
                setFormState((prevState)=>({...prevState,location:e.target.value}))}}
            />
          </div>

          <div className="flex flex-row flex-nowrap justify-between items-center w-11/12 text-xs text-center">
            <div className="h-20 flex flex-col flex-nowrap justify-center w-1/5 p-2 bg-customColor-200 rounded-md border border-slate-700">
              <label
                className="mb-2"
                htmlFor="minCustomersPerHour"
              >
                Min Customers per Hour
              </label>
              <input
                className="w-full bg-customColor-100 border border-slate-700"
                id="minCustomersPerHour"
                type="number"
                placeholder={stateForm.minCustPerHour}
                min = "0"
                step="1"
                onChange={(e)=>{
                  setFormState((prevState)=>({...prevState,minCustPerHour:e.target.value}))}}
              />
            </div>

            <div className="h-20  flex flex-col flex-nowrap justify-center w-1/5 p-2 bg-customColor-200 rounded-md border border-slate-700">
              <label
                className="mb-2"
                htmlFor="maxCustomersPerHour"
              >
                Max Customers per Hour
              </label>
              <input
                className="w-full bg-customColor-100 border border-slate-700"
                id="maxCustomersPerHour"
                type="number"
                placeholder={stateForm.maxCustPerHour}
                min = "0"
                step="1"
                onChange={(e)=>{
                  setFormState((prevState)=>({...prevState,maxCustPerHour:e.target.value}))}}
              />
            </div>

            <div className="h-20 flex flex-col flex-nowrap justify-center w-1/5 p-2 bg-customColor-200 rounded-md border border-slate-700">
              <label
                className="mb-2"
                htmlFor="averCookiesPerSale"
              >
                Aver Cookies per Sale
              </label>
              <input
                className="w-full bg-customColor-100 border border-slate-700"
                id="averCookiesPerSale"
                type="number"
                placeholder={stateForm.averCookiesPerSale}
                min = "0"
                step="1"
                onChange={(e)=>{
                  setFormState((prevState)=>({...prevState,averCookiesPerSale:e.target.value}))}}
              />
            </div>

            <div className="flex flex-col flex-nowrap w-1/5 h-90">
              <button
                  className="h-20 w-full rounded-md bg-customColor-500 hover:bg-customColor-100 border border-slate-700"
                  type="submit"

                >
                  CREATE
                </button>
            </div>





          </div>

        </div>
      </form>
  )
}