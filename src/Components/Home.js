import React, { useContext, useEffect } from "react";
import AnimeContext from "../Context/Animecontext";
import RecentRelease from "./RecentRelease";

const Home = (props) => {
  // const context = useContext(AnimeContext);
  // const { GetPopular , GetAllAnime , RecentAnimeReleases} = context;
  // useEffect(() => {
  //   RecentAnimeReleases()
  //   // GetPopular();
  //   // GetAllAnime()
  //   // eslint-disable-next-line
  // }, []);

  return (
    <>
      <RecentRelease></RecentRelease>
    </>
  );
};

export default Home;
