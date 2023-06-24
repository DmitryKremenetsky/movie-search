import { useState , useEffect } from 'react';

export default function useMoviesList(searchQuery, page) {
  const [movies, setMovies] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (searchQuery.trim().length < 3) {
      return setMovies([]);
    };

    setMovies([]);
    setIsFetching(true);
    setTotalPages(0);

    fetch(`https://www.omdbapi.com/?&apikey=35def29d&s=${searchQuery}&page=${page}`)
      .then((res) => res.json())
      .then(({ Response, Search, totalResults }) => {
        setMovies(Response === 'True' ? Search : []);
        setTotalPages(Response === 'True' ? Math.round(totalResults / 10) : 0);
      })
      .catch((err) => {
        console.log(err);
        setMovies([]);
        setTotalPages(0);
      })
      .finally(() => setIsFetching(false));
  }, [searchQuery, page]);

  return {
    movies,
    totalPages,
    isFetching,
    setMovies,
  }
}
