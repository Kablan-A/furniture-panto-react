import ButtonPrimary from "./ButtonPrimary";

function Card({ titlePrimary, titleSecondary, text, btnText, btnLink }) {
  return (
    <div class="card border-0">
      <div class="card-body">
        {titleSecondary && (
          <h5 class="text-uppercase mb-3 text-secondary fs-6 letter-spacing-wide">
            {titleSecondary}
          </h5>
        )}
        <h5 class="card-title mb-4 fs-3 text-primary text-capitalize">
          {titlePrimary}
        </h5>
        <p class="card-text text-primary">{text}</p>
        <ButtonPrimary text={btnText} link={btnLink} />
      </div>
    </div>
  );
}

export default Card;
