import { useContextAuth } from "@/contexts/auth";

export default function LoginForm(){
  let { loginFunction} = useContextAuth();

  function handlerOnSubmit(e) {
    e.preventDefault();
    let username = e.target.username.value;
    let password = e.target.password.value;
    if (username && password){
      loginFunction(username, password);
    } else {
      console.error("Login username and/or password not provided.")
    };
  }

  return (
    <form className="flex flex-col flex-nowrap justify-center items-center mt-10 mb-10 mr-auto ml-auto w-10/12 p-5 rounded-lg bg-customColor-400 border border-slate-700" onSubmit={handlerOnSubmit}>
        <div className="w-11/12">
          <h2 className="w-full mt-1 text-center text-xl" >USER NAME</h2>
          <input className="w-full mt-3 border p-2" name="username" type="text" placeholder="User Name"></input>
          <h2 className="w-full mt-4 text-center text-xl" >PASSWORD</h2>
          <input className="w-full mt-3 border p-2" name="password" type="password" placeholder="Password"></input>
          <button className="w-full mt-5 border bg-customColor-500 hover:bg-customColor-100 border-slate-700 p-3 rounded-md" type="submit">Log In</button>
        </div>
    </form>
  );
};
