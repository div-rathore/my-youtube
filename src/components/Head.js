import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {

    const dispatch = useDispatch();
    const toggleMenuHandler= () => {
     dispatch(toggleMenu())
    }
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer "
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"
          alt="menu"
          onClick={()=> toggleMenuHandler()}
        />
        <img
          className="h-8 mx-2"
          alt="youtube logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png"
        />
      </div>
      <div className="col-span-10 text-center ">
        <input
          className="w-1/3 border border-gray-300 rounded-l-full p-2"
          type="text"
        />
        <button className="border border-gray-300 px-5 py-2 text-slate-100 rounded-r-full bg-gray-600">
          Search{" "}
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
