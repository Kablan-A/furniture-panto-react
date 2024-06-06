import reasonsData from "../data/reasonsData";
import Card from "./Card";

function Reasons() {
  return (
    <section className="section-reasons">
      <div className="container d-flex flex-column flex-xl-row align-items-center justify-content-center">
        <h3 class="align-self-center fs-1 mb-5 text-primary text-capitalize">
          Why Choose Us
        </h3>

        <div className="container d-flex flex-column flex-md-row">
          {reasonsData.map((reason, index) => (
            <Card
              key={index}
              titlePrimary={reason.title}
              text={reason.text}
              btnText={"more info"}
              btnLink={reason.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reasons;
