import React, { useContext } from "react";

const MoviePage = () => {
  const { pageNumber , showPage } = useContext(MovieList);

  return (
    <div className="movie-pages">
      {showPage && (
        <div>
            <button onClick={() => pageNumber("Previous")}>Prev Page</button>
            <button onClick={() => pageNumber("next")}>Next Page</button>
        </div>
      )}
    </div>
  );
};


export default MoviePage;
