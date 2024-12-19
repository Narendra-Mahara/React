import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      

      <div className="h-80 w-full flex items-center justify-center gap-1 font-serif">
        <div className="">
          <input
            className="w-80 h-20 text-2xl bg-[#FFFAE5] rounded-md p-5 border-2 border-black "
            placeholder="Enter book name"
            type="text"
            name="search"
            id=""
          />
        </div>
        <Link to="/books">
          <button className="h-20 text-2xl bg-[#ebb684] rounded-md border-2 border-black p-3 ">
            Search
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
