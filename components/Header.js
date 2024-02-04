import { useContextAuth } from "@/contexts/auth";

export default function Header(props) {
  let { user, logoutFunction } = useContextAuth();
  return(
    <header className="flex flex-row flex-nowrap justify-between p-5 bg-customColor-500 font-bold border border-slate-700">
      <h1 className="text-3xl"
        >Cookie Stand Admin</h1>
      {user
        ?
        <div>
          <button className="p-2 rounded-md bg-customColor-200 text-md border border-slate-700">
           {user.username}
          </button>
          <button className=" m-1 p-2 rounded-md bg-customColor-200 hover:bg-customColor-100 text-md border border-slate-700"
          onClick={logoutFunction}>
            Sign Out
          </button>
          <button className=" p-2 rounded-md bg-customColor-200 hover:bg-customColor-100 text-md border border-slate-700">
            Overview
          </button>
        </div>
        :
        <div>
          <button className=" p-2 rounded-md bg-customColor-200 hover:bg-customColor-100 text-md border border-slate-700">
            Overview
          </button>
        </div>

      }
    </header>
  );
}