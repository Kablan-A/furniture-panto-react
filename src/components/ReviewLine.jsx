import reviewsData from "../data/reviewsData";
import ReviewCard from "./ReviewCard";

function ReviewLine() {
  return (
    <div class="container m-0 p-0">
      <div class="row g-4">
        {reviewsData.map((review, index) => (
          <div key={index} class="col-12 col-md-4">
            <div class="grid-item">
              <ReviewCard key={index} {...review} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewLine;
