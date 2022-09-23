import React, { useContext, useEffect } from "react";
import AnimeContext from "../Context/Animecontext";

const AllAnime = () => {
  const context = useContext(AnimeContext);
  const { Anime, GetAllAnime } = context;
  useEffect(() => {
    GetAllAnime();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="my-10 flex flex-row justify-center flex-wrap">
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
                  <div class="text-center p-2">
                    <div class="font-bold text-xl mb-2">
                      {Allanimes.AnimeTitle}
                    </div>
                  </div>
                  <div class=" my-6 px-6 ">
                    <a
                      href={Allanimes.AnimeLink}
                      target="_blank"
                      rel="noreferrer"
                      class=" flex justify-evenly items-baseline  text-center bg-[#0096FF] rounded-md px-3 my-10 py-1 text-xl font-semibold text-black mr-2 mb-2"
                    >
                      Watch!
                    </a>
                  </div>
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
