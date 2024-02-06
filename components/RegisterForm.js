export default function RegisterForm(props){

  return (
        <form className="flex flex-col flex-nowrap justify-center items-center mt-10 mb-10 mr-auto ml-auto w-10/12 p-5 rounded-lg bg-customColor-400 border border-slate-700" onSubmit={props.handlerOnRegister}>
          <div className="w-11/12">
            <h2 className="w-full mt-1 text-center text-xl" >USER NAME</h2>
            <input className="w-full mt-3 border p-2" name="username" type="text" placeholder="User Name"></input>
            <h2 className="w-full mt-1 text-center text-xl" >EMAIL</h2>
            <input className="w-full mt-3 border p-2" name="email" type="text" placeholder="Email"></input>
            <h2 className="w-full mt-4 text-center text-xl" >PASSWORD</h2>
            <input className="w-full mt-3 border p-2" name="password1" type="password" placeholder="Password"></input>
            <h2 className="w-full mt-4 text-center text-xl" >REPEAT PASSWORD</h2>
            <input className="w-full mt-3 border p-2" name="password2" type="password" placeholder="Password"></input>
            <button className="w-full mt-5 border bg-customColor-500 hover:bg-customColor-100 border-slate-700 p-3 rounded-md" type="submit">Register</button>
            <button className="w-full mt-5 border bg-customColor-500 hover:bg-customColor-100 border-slate-700 p-3 rounded-md" onClick={props.handlerBoolRegister} type="button">Login Instead</button>
          </div>
      </form>
  );
};