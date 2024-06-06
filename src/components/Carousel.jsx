import "../css/carousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";

function Carousel({ id, children, childrenCount, hasIndicators }) {
  const copyChildrenArr = new Array(childrenCount).fill("");

  const setIndicatorActive = (selectedIndicator) => {
    const allIndicators = document.querySelectorAll(
      ".carousel-indicator-custom"
    );

    allIndicators.forEach((indicator) => indicator.classList.remove("active"));

    selectedIndicator.classList.add("active");
  };

  return (
    <div className="container-fluid mb-5">
      {hasIndicators && (
        <div className="container d-flex justify-content-center mx-0 mb-5">
          <ol class="carousel-indicators-custom rounded-pill m-0">
            <li
              data-bs-target={`#${id}`}
              data-bs-slide-to="0"
              class="active carousel-indicator-custom btn rounded-pill"
              aria-label="Slide 1"
              onClick={(event) => setIndicatorActive(event.target)}
            >
              Chair
            </li>
            <li
              data-bs-target={`#${id}`}
              data-bs-slide-to="1"
              class="carousel-indicator-custom btn rounded-pill"
              aria-label="Slide 2"
              onClick={(event) => setIndicatorActive(event.target)}
            >
              Beds
            </li>
            <li
              data-bs-target={`#${id}`}
              data-bs-slide-to="2"
              class="carousel-indicator-custom btn rounded-pill"
              aria-label="Slide 3"
              onClick={(event) => setIndicatorActive(event.target)}
            >
              Sofa
            </li>
            <li
              data-bs-target={`#${id}`}
              data-bs-slide-to="3"
              class="carousel-indicator-custom btn rounded-pill"
              aria-label="Slide 4"
              onClick={(event) => setIndicatorActive(event.target)}
            >
              Lamp
            </li>
          </ol>
        </div>
      )}

      <div
        id={id}
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="false"
      >
        <div className="container-fluid">
          <div className="carousel-inner">
            {copyChildrenArr.map((_, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                {children}
              </div>
            ))}
          </div>
        </div>

        <button
          className="carousel-control-prev carousel-control d-none d-md-block"
          type="button"
          data-bs-target={`#${id}`}
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true">
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next carousel-control d-none d-md-block"
          type="button"
          data-bs-target={`#${id}`}
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
