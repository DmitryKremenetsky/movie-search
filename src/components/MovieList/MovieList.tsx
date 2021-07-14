import "./MovieList.scss";

const MovieList = (props: any) => {
  return (
    <div className="movie-row">
        {props.movies.map((movie: any, index: any) => (
          <div>
            <img src={movie.Poster} alt="movie"></img>
          </div>
        ))}
    </div>
  );
};

export default MovieList;
