import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import "../css/reviewCard.css";

function ReviewCard({
  bgImg,
  userImg,
  userName,
  userProfession,
  text,
  starCount,
}) {
  const copyStarsArr = new Array(starCount).fill("");

  return (
    <div class="card border-0 overflow-hidden rounded-photo">
      <img src={bgImg} alt="Furniture" class="card-img" />

      <div class="card-img-overlay">
        <div className="d-flex flex h-100">
          <div className="card-body card-body--review bg-white text-primary rounded-photo">
            <div className="review__img-box rounded-circle overflow-hidden">
              <img
                src={userImg}
                alt={`${userName} user`}
                class="w-100 shadow-primary"
              />
            </div>
            <h4 class="card-title text-capitalize fs-5 fw-bold">{userName}</h4>
            <p class="card-text--review text-capitalize mb-1 mb-lg-2">
              {userProfession}
            </p>

            <p class="card-text--review">{text}</p>

            <div class="ratings d-flex align-items-center gap-1">
              {copyStarsArr.map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
