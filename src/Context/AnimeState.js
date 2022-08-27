import AnimeContext from "./Animecontext";

import React from "react";

const AnimeState = (props) => {
  return (
    <>
      <AnimeContext.Provider>{props.children}</AnimeContext.Provider>
    </>
  );
};

export default AnimeState;
