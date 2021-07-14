const MovieList = (props: any) => {
  return (
    <>
      {props.movies.map((movie: any, index: any) => (
        <div>
          <img src={movie.Poster} alt="movie"></img>
        </div>
      ))}
    </>
  );
};

export default MovieList;
