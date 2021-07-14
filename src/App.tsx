import { SearchBar } from "./components";
import { useState, useEffect } from "react";
import MovieList from "./components/MovieList/MovieList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async () => {
    const url = "http://www.omdbapi.com/?s=star wars&apikey=35def29d";

    const response = await fetch(url);
    const responseJson = await response.json();
    setMovies(responseJson.Search);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
      </header>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
