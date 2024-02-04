import useResource from "@/hooks/useResource";

export default function Footer() {
  let {resources} = useResource();
  let numLocations = resources ? resources.length : 0
  return(
    <footer className="flex flex-row flex-nowrap p-5 bg-customColor-500 border border-slate-700">
      <p>{numLocations>0 ? `${numLocations} Locations World Wide`: "Deliciousness In Ever Bite!"}</p>
    </footer>
  );
}