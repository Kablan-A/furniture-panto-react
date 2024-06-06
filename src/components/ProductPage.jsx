import Carousel from "./Carousel";
import "../css/product.css";
import ProductLine from "./ProductLine";
import ButtonPrimary from "./ButtonPrimary";

function ProductPage() {
  return (
    <section className="section-products bg-grey-primary container-fluid d-flex flex-column">
      <h3 class="align-self-center fs-1 mb-4 text-primary text-capitalize">
        Best Selling Products
      </h3>

      <Carousel id={"carouselProducts"} hasIndicators={true} childrenCount={4}>
        <ProductLine />
      </Carousel>

      <ButtonPrimary text={"view all"} link={"/"} />
    </section>
  );
}

export default ProductPage;
