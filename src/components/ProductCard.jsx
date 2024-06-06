import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import ButtonProduct from "./ButtonProduct";

function ProductCard({ img, product, title, price, link }) {
  return (
    <div class="card border-0 overflow-hidden">
      <img
        src={img}
        class="card-img-top card-img-product bg-grey-secondary"
        alt="..."
      ></img>
      <div class="card-body">
        <h6 class="card-title text-grey">{product}</h6>
        <h5 class="card-title text-blue fw-bold">{title}</h5>
        <div class="ratings mb-lg-4 d-flex align-items-center gap-1">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>

        <div className="mt-4 d-flex align-items-center justify-content-between">
          <p class="card-text m-0 text-blue fs-5">{price}</p>
          <ButtonProduct link={link} />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
