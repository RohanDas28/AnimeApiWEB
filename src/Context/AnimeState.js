import AnimeContext from "./Animecontext";

import React, { useState } from "react";
var url = "https://animeapi-demo.herokuapp.com";
const AnimeState = (props) => {
  const [Anime, setAnime] = useState([]);

  const GetPopular = async () => {
    try {
      const functionurl = `${url}/popular`;
      const response = await fetch(functionurl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const PopularAnimeJson = await response.json();
      console.log(PopularAnimeJson);
      setAnime(PopularAnimeJson);
    } catch (error) {
      console.log(error)
    }
  };
  const GetAllAnime = async () => {
    try {
      const functionurl = `${url}/animix/all`
      const response = await fetch(functionurl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });
      const AllAnimeJson = await response.json()
      console.log(AllAnimeJson)
      setAnime(AllAnimeJson)
    } catch (error) {
     console.log(error) 
    }
  }
  const RecentAnimeReleases = async () => {
    try {
      const functionurl = `${url}/animix/recent-episodes`
      const response = await fetch(functionurl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });
      const RecentAnimeReleaseJson = await response.json()
      console.log(RecentAnimeReleaseJson)
      setAnime(RecentAnimeReleaseJson)
    
    } catch (error) {
    console.log(error)  
    }
    
  }
  return (
    <>
      <AnimeContext.Provider value={{ Anime , GetPopular , GetAllAnime , RecentAnimeReleases}}>{props.children}</AnimeContext.Provider>
    </>
  );
};

export default AnimeState;
