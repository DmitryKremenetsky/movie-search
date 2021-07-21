import { useState } from "react";
import { MovieList, SearchBar } from "./components";
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
    </main>
  );
}

export default App;
