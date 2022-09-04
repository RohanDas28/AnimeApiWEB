import React, { useContext } from "react";
import AnimeContext from "../Context/Animecontext";
import { useEffect } from "react";
const AllAnime = () => {
  const context = useContext(AnimeContext);
  const { Anime, GetAllAnime } = context;
  useEffect(() => {
    // GetAllAnime();
    // eslint-disable-next-line
  }, []);
  return <>
    {/* {Anime.map((AllAnimes) => {
    return <>1</>
  })} */}
  </>;
};

export default AllAnime;
