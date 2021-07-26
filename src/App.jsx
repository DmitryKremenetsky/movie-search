import { useState } from "react";
import { MovieList, MoviePage, SearchBar } from "./components";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <main>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setMovies={setMovies}
      />
      <MoviePage
      pageNumber={pageNumber}
      setPageNumber={setPageNumber}
      />

      <MovieList
        movies={movies}
        setMovies={setMovies}
        searchQuery={searchQuery}
        pageNumber={pageNumber}
      />
    </main>
  );
}

export default App;
