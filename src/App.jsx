import { useState } from "react";
import { MovieList, MoviePage, SearchBar } from "./components";
import { useMoviesList } from './hooks'
import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const { movies, totalPages, isFetching } = useMoviesList(searchQuery, page);

  return (
    <main>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <MoviePage
        totalPages={totalPages}
        page={page}
        setPage={setPage}
      />
      <MovieList
        movies={movies}
        searchQuery={searchQuery}
        isFetching={isFetching}
      />
    </main>
  );
}

export default App;
