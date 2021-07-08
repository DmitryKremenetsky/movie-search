import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..."></input>
      <button type="submit"></button>
      <FontAwesomeIcon icon={faBackspace} />
      <FontAwesomeIcon icon={faSearch} />
    </div>
  );
}

export default SearchBar;
