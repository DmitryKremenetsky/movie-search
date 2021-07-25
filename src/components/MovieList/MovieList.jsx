import { useEffect, useState } from "react";
import "./styles.scss";

const MovieList = ({ searchQuery, movies, setMovies }) => {
  const [isLoading, setIsLoading] = useState(false);

  const getMovieRequest = async (searchQuery, pageNumber = 1) => {
    const url = `http://www.omdbapi.com/?&apikey=35def29d&s=${searchQuery}&page=${pageNumber}`;
    const response = await fetch(url);
    return await response.json();
  };

  const pageNumber = (direction, setCurrentPage) => {
    if(direction === "next") {
      setCurrentPage(pageNumber => pageNumber + 1);
      setIsLoading(true);
    // eslint-disable-next-line no-unused-vars
    } else if (direction === "previous" && pageNumber !== 1) {
      setCurrentPage(pageNumber => pageNumber - 1);
    }
  };

  useEffect(() => {
    if (searchQuery.length < 3) return;

    setIsLoading(true);

    getMovieRequest(searchQuery)
      .then((response) => {
        setMovies(response.Search || []);
        setIsLoading(false);
      })

      .catch(() => setIsLoading(false));
  }, [searchQuery, setMovies]);

  if (isLoading) return <div className="loading">Loading...</div>;

  return (
    <div className="movies">
      {movies.map((movie) => (
        <div className="movie" key={movie.imdbID}>
          <img src={movie.Poster} alt="movie" />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
