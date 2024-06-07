import furniturePhoto from "../img/section-experience.jpg";
import Card from "./Card";

function SectionExperience() {
  return (
    <section className="section-experience gap-5">
      <div className="section-experience__photo-box">
        <div className="grey-block grey-block--horizontal grey-block--left"></div>
        <img
          src={furniturePhoto}
          alt="Furniture"
          className="section__photo section__photo--experience"
        />
        <div className="grey-block grey-block--vertical"></div>
      </div>

      <div className="section-experience__card-container">
        <Card
          titlePrimary={"we provide you the best experience"}
          titleSecondary={"experience"}
          text={
            "You don't have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials"
          }
          btnText={"more info"}
          btnLink={"/"}
        />
      </div>
    </section>
  );
}

export default SectionExperience;
