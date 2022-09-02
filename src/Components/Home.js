import React, { useContext, useEffect } from "react";
import AnimeContext from "../Context/Animecontext";

const Home = (props) => {
  const context = useContext(AnimeContext);
  const { GetPopular , GetAllAnime} = context;
  useEffect(() => {
    GetPopular();
    // GetAllAnime()
    // eslint-disable-next-line
  }, []);

  return <div>home</div>;
};

export default Home;
