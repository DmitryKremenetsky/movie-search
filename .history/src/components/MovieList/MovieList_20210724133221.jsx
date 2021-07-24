import { useEffect, useState } from "react";
import "./styles.scss";

const MovieList = ({ searchQuery, movies, setMovies }) => {
  const [isLoading, setIsLoading] = useState(false);

  const getMovieRequest = async (searchQuery) => {
    const url = `http://www.omdbapi.com/?&apikey=35def29d&s=${searchQuery}`;
    // const url = `http://www.omdbapi.com/?&page=2&apikey=35def29d&s=${searchQuery}`;
    const response = await fetch(url);
    return await response.json();
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
  }, [searchQuery]);

  if (isLoading) return <div className="loading">Loading...</div>;

  return (
    <div>

    <div className="movies">
      {movies.map((movie) => (
        <div className="movie" key={movie.imdbID}>
          <img src={movie.Poster} alt="movie" />
        </div>
      ))}
    </div>

    <div className="movies2">
      {movies.map((movie) => (
        <div className="movie" key={movie.imdbID}>
          <img src={movie.Poster} alt="movie" />
        </div>
      ))}
    </div>

    </div>

  );
};

export default MovieList;
