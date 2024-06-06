function ButtonPrimary({ text, link }) {
  return (
    <a href={link} class="btn btn-primary text-capitalize">
      {text} <span>&rarr;</span>
    </a>
  );
}

export default ButtonPrimary;
