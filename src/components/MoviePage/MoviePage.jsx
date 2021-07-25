import React, { useContext } from "react";
import { MovieList } from "..";

const MoviePage = () => {
  const { newPage , currentPage , showPage } = useContext(MovieList);

  return (
    <div className="movie-pages">
      {showPage && (
        <div>
          <React.Fragment>
            <button onClick={() => newPage("Previous")}>Prev Page</button>
            <button onClick={() => newPage("next")}>Next Page</button>
          </React.Fragment>
        </div>
      )}
    </div>
  );
};


export default MoviePage;
