import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const [searchQuey, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions,setShowSuggestions] = useState(false);

  useEffect(() => {
    // console.log(searchQuey);

    //make an api ca; after every keypress
    //bit of the diff between 2 keypress is < 200ms, decline the api call
    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuey]);

  const getSearchSuggestions = async () => {
    // console.log(searchQuey);

    const data = await fetch(YOUTUBE_SEARCH_API + searchQuey);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);
  };
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer "
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"
          alt="menu"
          onClick={() => toggleMenuHandler()}
        />
        <img
          className="h-8 mx-2"
          alt="youtube logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png"
        />
      </div>
      <div className="col-span-10 px-10 ">
        <div>
          <input
            className="w-1/2 border px-5 border-gray-300 rounded-l-full p-2"
            type="text"
            value={searchQuey}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={()=>setShowSuggestions(true)}
            onBlur={()=> setShowSuggestions(false)}
          />
          <button className="border border-gray-300 px-5 py-2 text-slate-100 rounded-r-full bg-gray-600">
            Search{" "}
          </button>
        </div>
        { showSuggestions && searchQuey?  (<div className="fixed bg-white py-2 px-5 w-[29.5rem] rounded-md shadow-lg border border-gray-200">
         <ul>
            {suggestions.map((s) => (
              <li key={s} className=" py-2 shadow-sm hover:bg-gray-100">
                🔍 {s}
              </li>
            ))}
          </ul>
        </div>):''}
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
