import { hours } from "@/data/data.js";

export default function ReportTable(props) {
  let numLocations = props.cookieStandsList.length
  if (numLocations > 0) {
    // generate table header
    let header = ["Locations", ...hours, "Totals"];
    let tableHeader = header.map((time, idx) => (
      <th
        className="p-2" 
        key={`${time}_head_${idx}`}>{time}</th>
    ));

    // generate body of table
    let tableBody = props.cookieStandsList.map((item, idx) => {
      return (
        <tr
          className={idx%2==1?"bg-customColor-400":"bg-customColor-200"} 
          key={`${item.location}_${idx}`}>
          {/* each location cell within table */}
          <td className="border border-slate-700">{item.location}</td>

          {/* each cell of numbers in the table */}
          {item.cookies_each_hour.map((number, index) => (
            <td 
              className="border border-slate-700"
              key={`${item.location}_${number}_${index}`}>{number}</td>
          ))}

          <td
            className="border border-slate-700">
            {item.cookies_each_hour.reduce((acc, item) => {
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
      location.cookies_each_hour.forEach((number, idx) => {
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
        className="p-2 border border-slate-700"
        key={`${item}_foot_${idx}`}>{item}</td>
    ));


    return (
        <table className="w-4/5 m-10 border border-slate-700 bg-customColor-400 table-auto text-black text-center">
          <thead>
            <tr >{tableHeader}</tr>
          </thead>
          <tbody>{tableBody}</tbody>
          <tfoot>
            <tr
              className={`p-2 font-bold ${(numLocations%2==1)?" bg-customColor-500":"bg-customColor-200"}`}>{tableFoot}</tr>
          </tfoot>
        </table>
    );
  } else {
    return (
      <div className="w-4/5 m-10">
        <p
          className="text-center"
          >No Cookie Stands Available...</p>
      </div>
    );
  }
}
