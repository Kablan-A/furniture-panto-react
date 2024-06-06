import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";

function ButtonProduct({ link }) {
  return (
    <a href={link} class="btn rounded-circle border-0 bg-blue text-white fs-5">
      <FontAwesomeIcon icon={faPlus} />
    </a>
  );
}

export default ButtonProduct;
