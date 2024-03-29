import { useState } from "react";
import { MovieList, MoviePage, SearchBar, HeaderTitle, Footer } from "./components";
import { useMoviesList } from './hooks'
import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const { movies, totalPages, isFetching, setMovies } = useMoviesList(searchQuery, page);

  return (
    <main>
      <HeaderTitle />
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
        isFetching={isFetching}
      />
      <Footer />
    </main>
  );
}

export default App;
