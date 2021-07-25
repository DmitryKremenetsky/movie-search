import React, { useContext } from "react";
import { MovieList } from "..";

const MoviePage = () => {
  const { pageNumber , showPage } = useContext(MovieList);

  return (
    <div className="movie-pages">
      {showPage && (
        <div>
          <React.Fragment>
            <button onClick={() => pageNumber("Previous")}>Prev Page</button>
            <button onClick={() => pageNumber("next")}>Next Page</button>
          </React.Fragment>
        </div>
      )}
    </div>
  );
};


export default MoviePage;
