import AnimeContext from "./Animecontext";

import React, { useState } from "react";
var url = "https://lmaohost.herokuapp.com";
// var url = "http://localhost:4000";
const AnimeState = (props) => {
  const [Anime, setAnime] = useState([]);
  // const [Page, setPage] = useState(1)
  // const [Limit , setLimit] = useState(30)
  const GetAllAnime = async () => {
    try {
      const functionurl = `${url}/9anime/all`;
      const response = await fetch(functionurl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const AllAnimeJson = await response.json();
      console.log(AllAnimeJson)
      setAnime(AllAnimeJson);
    } catch (error) {
      console.log(error);
    }
  };
  const GetPopularAnimes = async () => {
    try {
      const functionurl = `${url}/popular`;
      const response = await fetch(functionurl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const AllPopularAnime = await response.json();
      // console.log(AllPopularAnime);
      setAnime(AllPopularAnime);
    } catch (error) {
      console.log(error);
    }
  };
  const RecentAnimeReleases = async () => {
    try {
      const functionurl = `${url}/animix/recent-episodes`;
      const response = await fetch(functionurl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const RecentAnimeReleaseJson = await response.json();
      // console.log(RecentAnimeReleaseJson)
      setAnime(RecentAnimeReleaseJson);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <AnimeContext.Provider
        value={{ Anime, GetAllAnime, RecentAnimeReleases, GetPopularAnimes }}
      >
        {props.children}
      </AnimeContext.Provider>
    </>
  );
};

export default AnimeState;
