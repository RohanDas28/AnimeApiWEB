import React, { useContext, useEffect } from "react";
import AnimeContext from "../Context/Animecontext";
import "../CSS/ComponentsCSS/Grid.css";
const RecentRelease = () => {
  const context = useContext(AnimeContext);
  const { Anime, RecentAnimeReleases } = context;
  useEffect(() => {
    RecentAnimeReleases();
    // GetPopular();
    // GetAllAnime();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="flex justify-center ">
        <h2 className="text-2xl border-b-2 border-black w-44 ">
          Recent Releases
        </h2>
      </div>

      <section className="my-4 flex flex-row justify-center flex-wrap ">
        {Anime.map((animes) => {
          return (
            <>
              <div class="m-4 w-64  rounded overflow-hidden shadow-md hover:scale-95 duration-300">
                <img
                  class="w-64 h-72 "
                  src={animes.animeImg}
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">
                    {animes.episodeTitle}
                  </div>
                </div>
                <p className="text-center"></p>
                <div class="px-6 pt-4 pb-2">
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    EP: {animes.episodeNum}
                  </span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    Number of EPS: {animes.episodes}
                  </span>
                  {/* <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #winter
                  </span> */}
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default RecentRelease;
