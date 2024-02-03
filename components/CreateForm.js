// import React from "react"


// export default function CreateForm(props) {
//   const [stateForm, setFormState] = React.useState(props.cookieStand || {
//     location:"Cookie Stand Location", 
//     owner:null,
//     description:"placeholder",
//     minCustPerHour:0,
//     maxCustPerHour:0,
//     averCookiesPerSale:0});

//   function handlerOnSubmit(event){
//     event.preventDefault();
//     // console.log("handlerOnSubmit triggered");
//     props.dispatch({
//       type:"updateCookieStand",
//       payload: stateForm
//     });
//     setFormState(prevState => ({
//       location:"Cookie Stand Location", 
//       owner:null,
//       description:"placeholder",
//       minCustPerHour:0,
//       maxCustPerHour:0,
//       averCookiesPerSale:0}))
//   };
//   // console.log("Form", stateForm)

//   return (
//     <form className="w-4/5 p-5 rounded-lg bg-customColor-400 border border-slate-700"
//         onSubmit={handlerOnSubmit}>

//         <div className="flex flex-col flex-nowrap items-center font-bold uppercase">

//           <div className="flex flex-row flex-nowrap justify-between w-full">
//             <div className="flex flex-col flex-nowrap items-center w-2/3 mr-10">
//               <label
//                 className="block uppercase tracking-wide font-bold m-2"
//                 htmlFor="location"
//               >
//                 ADD LOCATION
//               </label>
//               <input
//                 className="w-full p-2 bg-customColor-100 border border-slate-700"
//                 id="location"
//                 placeholder={stateForm.location}
//                 type="text"
//                 onChange={(e)=>{
//                   setFormState((prevState)=>({...prevState,location:e.target.value}))}}
//               />
//             </div>

//             <div className="flex flex-col flex-nowrap w-1/3 h-90">
//               <button
//                   className="h-20 w-full rounded-md bg-customColor-500 hover:bg-customColor-100 border border-slate-700"
//                   type="submit"

//                 >
//                   CREATE STAND
//                 </button>
//             </div>


//           </div>

//           <div className="flex flex-row flex-nowrap justify-between items-center w-full text-xs text-center">

//             <div className="h-20 flex flex-col flex-nowrap justify-center w-1/3 rounded-md mr-10">
//               <label
//                 className="mb-2"
//                 htmlFor="minCustomersPerHour"
//               >
//                 Minimum Customers per Hour
//               </label>
//               <input
//                 className="w-full p-2 bg-customColor-100 border border-slate-700"
//                 id="minCustomersPerHour"
//                 type="number"
//                 placeholder={stateForm.minCustPerHour}
//                 min = "0"
//                 step="1"
//                 onChange={(e)=>{
//                   setFormState((prevState)=>({...prevState,minCustPerHour:e.target.value}))}}
//               />
//             </div>

//             <div className="h-20 flex flex-col flex-nowrap justify-center w-1/3 rounded-md mr-10">
//               <label
//                 className="mb-2"
//                 htmlFor="maxCustomersPerHour"
//               >
//                 Maximum Customers per Hour
//               </label>
//               <input
//                 className="w-full p-2 bg-customColor-100 border border-slate-700"
//                 id="maxCustomersPerHour"
//                 type="number"
//                 placeholder={stateForm.maxCustPerHour}
//                 min = "0"
//                 step="1"
//                 onChange={(e)=>{
//                   setFormState((prevState)=>({...prevState,maxCustPerHour:e.target.value}))}}
//               />
//             </div>

//             <div className="h-20 flex flex-col flex-nowrap justify-center w-1/3 rounded-md">
//               <label
//                 className="mb-2"
//                 htmlFor="averCookiesPerSale"
//               >
//                 Average Cookies per Sale
//               </label>
//               <input
//                 className="p-2 w-full bg-customColor-100 border border-slate-700"
//                 id="averCookiesPerSale"
//                 type="number"
//                 placeholder={stateForm.averCookiesPerSale}
//                 min = "0"
//                 step="1"
//                 onChange={(e)=>{
//                   setFormState((prevState)=>({...prevState,averCookiesPerSale:e.target.value}))}}
//               />
//             </div>





//           </div>

//         </div>
//       </form>
//   )
// }