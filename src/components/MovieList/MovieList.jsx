import "./styles.scss";

const MovieList = ({ movies, searchQuery, isFetching }) => {
  if (isFetching) {
    return <div className="title">Loading...</div>;
  }

  if (searchQuery.length > 3 && movies.length === 0) {
    return <div className="title">No results found:(</div>;
  }

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
