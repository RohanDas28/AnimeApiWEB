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
        <h2 className="text-2xl">
          <p className="border-b-2 border-black">Trending </p>
        </h2>
      </div>
        <div className="my-4 flex flex-row justify-center flex-wrap">
          {Anime.map((PopAnimes) => {
            return (
              <>
                <div class="m-4 w-64  rounded overflow-hidden shadow-md hover:scale-110 duration-300">
                  <img
                    class="w-64 h-72 "
                    src={PopAnimes.animeImg}
                    alt="Sunset in the mountains"
                  />
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">
                      {PopAnimes.animeTitle}
                    </div>
                  </div>
                  <p className="text-center"></p>
                  <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      Score: {PopAnimes.score}
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      Views: {PopAnimes.views}
                    </span>
                    {/* <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #winter
                  </span> */}
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
