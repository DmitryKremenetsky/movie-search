import { useState } from "react";
import { MovieList, MoviePage, SearchBar } from "./components";
import { useMoviesList } from './hooks'
import "./App.css";
import HeaderTittle from "./components/HeaderTittle/HeaderTittle";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const { movies, totalPages, isFetching, setMovies } = useMoviesList(searchQuery, page);

  return (
    <main>
      <HeaderTittle />
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setMovies={setMovies}
      />
      <MoviePage
        totalPages={totalPages}
        page={page}
        setPage={setPage}
      />
      <MovieList
        movies={movies}
        searchQuery={searchQuery}
        setMovies={setMovies}
        isFetching={isFetching}
      />
    </main>
  );
}

export default App;
