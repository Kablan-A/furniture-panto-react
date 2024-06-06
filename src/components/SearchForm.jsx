import "../css/searchForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";

function SearchForm() {
  return (
    <form action="#" class="search">
      <input type="text" placeholder="Search Furniture" class="search__input" />

      <button class="search__button">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </form>
  );
}

export default SearchForm;
