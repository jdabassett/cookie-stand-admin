export default function Header() {
  return(
    <header className="flex flex-row flex-nowrap justify-between p-5 bg-customColor-500 font-bold border border-slate-700">
      <h1 
      className="text-3xl"
      >Cookie Stand Admin</h1>
      <button
                  className=" p-2 rounded-md bg-customColor-200 hover:bg-customColor-100 text-md border border-slate-700"
                      >
                  Overview
                </button>
    </header>
  );
}