import React, { useContext } from "react";
import MovieList from '../MovieList/MovieList';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const MoviePage = ({pageNumber, setPageNumber}) => {

  return (
    <div className="movie-pages">
      {pageNumber > 1 &&
        <button
          className="previousPage"
          onClick={() => setPageNumber(pageNumber - 1)}
        >
          Prev Page
        </button>
      }

      <button
      onClick={() => setPageNumber(pageNumber + 1)}
      >
        Next Page
      </button>

      <faArrowRight/>
    </div>
  );
};

export default MoviePage;
