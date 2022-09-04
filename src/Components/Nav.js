import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <header className="text-gray-400 bg-gray-900 body-font sticky top-0 z-50">
        <div className="container mx-auto flex flex-wrap p-4  flex-col md:flex-row items-center">
          <Link
            to={"/"}
            className="flex title-font font-medium items-center text-white mb-2 md:mb-0"
          ></Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
            <Link
              to={"/"}
              className="mr-5 border-b-[2px] hover:scale-105 duration-75  border-white hover:text-white"
            >
              Recent
            </Link>
            <Link
              to={"/all"}
              className="mr-5 border-b-[2px] hover:scale-105 duration-75  border-white hover:text-white"
            >
              All Anime
            </Link>
            <Link
              to={"/POPULAR"}
              className="mr-5 border-b-[2px] hover:scale-105 duration-75  border-white hover:text-white"
            >
              Popular
            </Link>
            <Link
              to={"/"}
              className="mr-5 border-b-[2px] hover:scale-105 duration-75  border-white hover:text-white"
            >
              Recommendation
            </Link>
          </nav>
          <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};

export default Nav;
