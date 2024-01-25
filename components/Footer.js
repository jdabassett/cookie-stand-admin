export default function Footer(props) {
  let numLocations = props.cookieStandsList.length
  return(
    <footer className="flex flex-row flex-nowrap p-5 bg-customColor-500 border border-slate-700">
      <p>{numLocations>0 ? `${numLocations} Location World Wide`: "Deliciousness In Ever Bite!"}</p>
    </footer>
  );
}