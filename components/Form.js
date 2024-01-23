import React from "react"


export default function Form(props) {
  const [stateForm, setFormState] = React.useState({
    location:"placeholder", 
    owner:null,
    description:"placeholder",
    minCustPerHour:0,
    maxCustPerHour:0,
    averCookiesPerSale:0});

  function handlerOnSubmit(event){
    event.preventDefault();
    console.log("handlerOnSubmit triggered");
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
    <form className="w-3/5 p-5 rounded-lg bg-customColor-200"
        onSubmit={handlerOnSubmit}>
        <div className="flex flex-col flex-nowrap items-center">

          <div className="flex flex-row h-10 flex-nowrap w-11/12 justify-center items-center">
            <h2 className="text-2xl font-bold">Create Cookie Stand</h2>
          </div>


          <div className="flex flex-row flex-nowrap items-center w-11/12 m-2">
            <label
              className="block uppercase tracking-wide text-xs font-bold m-2"
              for="location"
            >
              Location
            </label>
            <input
              className="w-full bg-gray-50 border"
              id="location"
              placeholder={stateForm.location}
              type="text"
              onChange={(e)=>{
                setFormState((prevState)=>({...prevState,location:e.target.value}))}}
            />
          </div>

          <div className="flex flex-row flex-nowrap justify-between items-center w-11/12">
            <div className="flex flex-col flex-nowrap w-1/5">
              <label
                className="block uppercase tracking-wide text-xs text-center font-bold mb-2"
                for="minCustomersPerHour"
              >
                Minimum Customers per Hour
              </label>
              <input
                className="w-full bg-gray-50 border"
                id="minCustomersPerHour"
                type="number"
                placeholder={stateForm.minCustPerHour}
                min = "0"
                step="1"
                onChange={(e)=>{
                  setFormState((prevState)=>({...prevState,minCustPerHour:e.target.value}))}}
              />
            </div>

            <div className="flex flex-col flex-nowrap w-1/5">
              <label
                className="block uppercase tracking-wide text-xs text-center font-bold mb-2"
                for="maxCustomersPerHour"
              >
                Maximum Customers per Hour
              </label>
              <input
                className="w-full bg-gray-50 border"
                id="maxCustomersPerHour"
                type="number"
                placeholder={stateForm.maxCustPerHour}
                min = "0"
                step="1"
                onChange={(e)=>{
                  setFormState((prevState)=>({...prevState,maxCustPerHour:e.target.value}))}}
              />
            </div>

            <div className="flex flex-col flex-nowrap w-1/5">
              <label
                className="block uppercase tracking-wide text-xs font-bold text-center mb-2"
                for="averCookiesPerSale"
              >
                Average Cookies per Sale
              </label>
              <input
                className="w-full bg-gray-50 border"
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
                  className="w-full h-20 bg-customColor-900 hover:bg-customColor-100 text-md"
                  type="submit"

                >
                  Create
                </button>
            </div>





          </div>

        </div>
      </form>
  )
}