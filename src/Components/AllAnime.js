import React, { useContext, useState } from "react";
import AnimeContext from "../Context/Animecontext";
import { useEffect } from "react";
const AllAnime = () => {
  const context = useContext(AnimeContext);
  const { Anime, GetAllAnime } = context;
  useEffect(() => {
    GetAllAnime();
  }, []);

  return (
    <>
      <div className="my-4 flex flex-row justify-center flex-wrap">
      <section className="grid grid-cols-5 gap-10">
        {Anime.map((Allanimes) => {
          return (
            <>
              <div class=" w-64  rounded overflow-hidden shadow-md hover:scale-110 duration-300">
                <img
                  class="w-64 h-72 "
                  src={Allanimes.animeThumb}
                  alt="Sunset in the mountains"
                />
                <div class="text-center p-3">
                  <div class="font-bold text-xl mb-2">
                    {Allanimes.AnimeTitle}
                  </div>
                </div>
            
                <div class=" my-6 px-6 ">
                  <a
                    href={Allanimes.AnimeLink} 
                    target="_blank"
                    class=" flex justify-evenly items-baseline  text-center bg-[#0096FF] rounded-md px-3 my-10 py-1 text-xl font-semibold text-black mr-2 mb-2"
                  >
                    Watch!
                  </a>
                  </div>
                  {/* <a
                    href={Allanimes.AnimeLink}
                    class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >
                    Watch!
                  </a> */}
              </div>
            </>
          );
        })}
      </section>
      </div>
    </>
  );
};

export default AllAnime;
