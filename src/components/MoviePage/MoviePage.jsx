import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";

const MoviePage = ({ pageNumber, setPageNumber }) => {
  return (
    <div className="movie-pages">
      {pageNumber > 1 && (
        <FontAwesomeIcon
          className="pages-icon"
          icon={faArrowLeft}
          onClick={() => setPageNumber(pageNumber - 1)}
        />
      )}

      <FontAwesomeIcon
        className="pages-icon"
        icon={faArrowRight}
        onClick={() => setPageNumber(pageNumber + 1)}
      />
    </div>
  );
};

export default MoviePage;
