import "../css/header.css";
import Nav from "./Nav";
import SearchForm from "./SearchForm";

function Vignette() {
  return <div class="header-vignette"></div>;
}

function Header() {
  return (
    <header class="header w-100 min-vh-100 d-flex flex-column bg-header position-relative">
      <Nav />

      <section class="absolute-center text-lg-center text-white">
        <h1 class="w-100 display-5 mb-5 text-capitalize">
          Make Your Interior More Minimalistic & Modern
        </h1>

        <SearchForm />
      </section>

      <Vignette />
    </header>
  );
}

export default Header;
