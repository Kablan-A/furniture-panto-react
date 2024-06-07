import furniturePhoto1 from "../img/section-materials-1.jpg";
import furniturePhoto2 from "../img/section-materials-2.jpg";
import furniturePhoto3 from "../img/section-materials-3.jpg";
import Card from "./Card";

function SectionMaterials() {
  return (
    <section class="section-materials gap-5">
      <div class="section-materials__photo-box order-lg-2 gap-3 gap-lg-4">
        <div class="w-50 d-flex flex-column gap-3 gap-lg-4">
          <img
            class="section__photo section__photo--materials rounded-photo"
            src={furniturePhoto1}
            alt="Furniture"
          />
          <img
            class="section__photo section__photo--materials rounded-photo"
            src={furniturePhoto2}
            alt="Furniture"
          />
        </div>

        <div class="d-flex align-self-end position-relative w-75">
          <div class="grey-block grey-block--horizontal grey-block--right"></div>
          <img
            class="section__photo section__photo--materials w-100"
            src={furniturePhoto3}
            alt="Furniture"
          />
        </div>
      </div>

      <div className="section-materials__card-container">
        <Card
          titlePrimary={"Very serious materials for making furniture"}
          titleSecondary={"materials"}
          text={
            "Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price"
          }
          btnText={"more info"}
          btnLink={"/"}
        />
      </div>
    </section>
  );
}

export default SectionMaterials;
