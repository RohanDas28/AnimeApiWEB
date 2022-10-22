import React , {useEffect} from "react";
import { Link , useLocation} from "react-router-dom";

const Nav = () => {
  let location = useLocation();
  useEffect(() => {
  }, [location.pathname])
  
  return (
    <>
      <header className="text-gray-400 bg-gray-900 body-font sticky top-0 z-50">
        <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
          <Link
            to={"/"}
            className="flex title-font font-medium items-center text-white mb-2 md:mb-0"
          ></Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
            <Link
              to={"/"}
              className={`mr-5  hover:scale-105 duration-75 ${location.pathname ==="/" ? "border-white border-b-[2px]" : " "} hover:text-white`}
            >
              Recent
            </Link>
            <Link
              to={"/all"}
              className={`mr-5  hover:scale-105 duration-75 ${location.pathname ==="/all" ? "border-white border-b-[2px]" : " "} hover:text-white`}
            >
              All Anime
            </Link>
            <Link
              to={"/popular"}
              className={`mr-5  hover:scale-105 duration-75 ${location.pathname ==="/popular" ? "border-white border-b-[2px] " : " "} hover:text-white`}
            >
              Popular
            </Link>
            <Link
              to={"/"}
              className={`mr-5  hover:scale-105 duration-75 ${location.pathname ==="/reco" ? "border-white border-b-[2px]" : " "} hover:text-white`}
            >
              Recommendation
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Nav;
