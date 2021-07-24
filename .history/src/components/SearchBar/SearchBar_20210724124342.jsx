import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";
import { DebounceInput } from 'react-debounce-input';
import "./styles.scss";

function SearchBar({ searchQuery, setSearchQuery, setMovies }) {
  const onChange = (event) => setSearchQuery(event.target.value);
  const onClear = () => {
    setSearchQuery('')
    setMovies([])
  }

  return (
    <div className="search-bar">
      <DebounceInput
        type="text"
        placeholder="Search..."
        value={searchQuery}
        debounceTimeout={300}
        onChange={onChange}
      />
      <FontAwesomeIcon
        className="backspace-icon"
        icon={faBackspace}
        onClick={onClear}
      />
    </div>
  );
}

export default SearchBar;
