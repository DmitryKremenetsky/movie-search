import { useState } from "react";
import { MovieList, MoviePage, SearchBar } from "./components";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setMovies={setMovies}
      />
      <MovieList
        movies={movies}
        setMovies={setMovies}
        searchQuery={searchQuery}
      />
      <MoviePage />
    </main>
  );
}

export default App;
