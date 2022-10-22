import React, { useContext, useEffect } from "react";
import AnimeContext from "../Context/Animecontext";
const Popular = () => {
  const context = useContext(AnimeContext);
  const { Anime, GetPopularAnimes } = context;
  useEffect(() => {
    GetPopularAnimes();
  }, []);

  return (
    <>
      <div className="flex justify-center ">
        <h2 className="text-3xl mt-4 mb-2 underline underline-offset-8">
          Popular Animes 
        </h2>
      </div>
      <div className="my-4 flex flex-row justify-center flex-wrap">
        {Anime.map((PopAnimes) => {
          return (
            <>
              <div className="m-4 w-64 flex flex-col place-content-between overflow-hidden shadow-md hover:scale-95 duration-300">
                <img
                  className="w-64 h-72 "
                  src={PopAnimes.animeImg}
                  alt="Never Gonna Give You Up"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    {PopAnimes.animeTitle}
                  </div>
                </div>
                <div className="mx-6 mt-4 mb-2 flex flex-row justify-between">
                  <span className=" px-2 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-full">
                    Score: {PopAnimes.score}
                  </span>
                  <span className="px-2 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-full object-fit">
                    Views: {PopAnimes.views}
                  </span>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Popular;
