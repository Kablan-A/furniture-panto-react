import ProductCard from "./ProductCard";
import productData from "../data/productData";

function ProductLine() {
  return (
    <div class="container m-0 p-0">
      <div class="row g-3">
        {productData.map((product, index) => (
          <div key={index} class="col-12 col-sm-6 col-lg-3">
            <div class="grid-item">
              <ProductCard key={index} {...product} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductLine;
