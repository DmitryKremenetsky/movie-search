import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss"

const MoviePage = ({ totalPages, page, setPage }) => {
  const showPrevButton = page > 1;
  const showNextButton = totalPages - page > 0;

  const onPrevClick = () => setPage(page - 1);
  const onNextClick = () => setPage(page + 1);

  return (
    <div className="movie-pages">
      {showPrevButton &&
        <button
          className="ButtonPage"
          onClick={onPrevClick}
        >
          <FontAwesomeIcon
            className="iconButtonPage"
            icon={faArrowLeft}
          />
        </button>
      }
      {showNextButton &&
        <button
          className="ButtonPage"
          onClick={onNextClick}
        >
          <FontAwesomeIcon
            className="iconButtonPage"
            icon={faArrowRight}
          />
        </button>
      }
    </div>
  );
};

export default MoviePage;
