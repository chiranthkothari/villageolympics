import React, { useEffect, useState } from "react";
import { sportsData } from "./sportsData";

function SportsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="flex content-center justify-center">
        <form className="w-11/12 mb-16 md:flex-row lg:w-8/12">
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for sports"
            type="search"
            className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          />
        </form>
      </div>
      <div className="grid grid-cols-2 gap-8 row-gap-5 sm:grid-cols-3 lg:grid-cols-6">
        {sportsData
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((sport) => {
            return (
              <div className="text-center">
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-3 rounded-full sm:w-28 sm:h-28">
                  <img src={"/villageolympics" + sport.icon} />
                </div>
                <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
                  {sport.title.replaceAll("-", " ")}
                </h6>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default SportsPage;
