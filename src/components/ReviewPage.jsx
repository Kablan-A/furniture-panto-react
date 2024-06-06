import Carousel from "./Carousel";
import ReviewLine from "./ReviewLine";

function ReviewPage() {
  return (
    <section class="section-reviews d-flex flex-column align-items-center bg-white">
      <h5 class="text-uppercase mb-3 text-secondary fs-6 letter-spacing-wide">
        Testimonials
      </h5>
      <h2 class="mb-5 fs-3 text-primary text-capitalize">Our Client Reviews</h2>

      <Carousel id={"carouselReviews"} hasIndicators={false} childrenCount={4}>
        <ReviewLine />
      </Carousel>
    </section>
  );
}

export default ReviewPage;
