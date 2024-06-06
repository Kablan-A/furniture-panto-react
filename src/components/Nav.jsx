import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons/faShoppingBag";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent">
      <div className="container-fluid p-0">
        <a href="#" className="navbar-brand me-auto">
          Panto
        </a>

        <button
          className="navbar-toggler custom-toggler nav-icon-font-size"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        <div
          className="collapse navbar-collapse nav justify-content-lg-center"
          id="navbarCollapse"
        >
          <ul className="navbar-nav mt-2 mt-lg-0 mb-2 mb-lg-0 gap-lg-5">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Furniture
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Something
                </a>
                <a className="dropdown-item" href="#">
                  Something
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <a
          href="#"
          className="nav-link p-0 d-none d-lg-block nav-icon-font-size"
        >
          <FontAwesomeIcon icon={faShoppingBag} />
        </a>
      </div>
    </nav>
  );
}

export default Nav;
