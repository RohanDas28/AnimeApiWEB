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
    <div className="flex justify-center ">
        <h2 className="text-3xl mt-4 mb-2 underline underline-offset-8">
          All Animes
        </h2>
      </div>
      <div className="my-10 flex flex-row justify-center flex-wrap">
        <section className="grid grid-cols-5 gap-10">
          {Anime.map((Allanimes) => {
            return (
              <>
            <div className="m-4 w-64 flex flex-col place-content-between overflow-hidden shadow-md hover:scale-95 duration-300">
                <img
                  className="w-64 h-72 "
                  src={Allanimes.animeThumb}
                  alt="Never Gonna Give You Up"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    {Allanimes.AnimeTitle}
                  </div>
                </div>
                <div className="mx-6 mt-4 mb-2 flex flex-row justify-center">
                  <span className="text-white text-sm font-medium rounded-full object-fit">
                  <a class="inline-block text-white bg-purple-700 rounded-full px-3 py-2 text-sm font-semibold mr-2 my-1 cursor-pointer hover:bg-purple-900 text-center" href={Allanimes.AnimeLink}> <button class="font-semibold">Watch Now!</button></a>
                  </span>
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
