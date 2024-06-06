import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="p-footer">
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 pt-5 my-5 border-top">
        <div className="col col-md-4 mb-5 me-auto">
          <a
            href="/"
            className="mb-3 text-decoration-none text-primary fw-bold fs-3"
          >
            Panto
          </a>
          <p className="text-primary mb-5">
            The advantage of hiring a workspace with us is that it provides you
            comfortable service and all-around facilities.
          </p>

          <div className="d-flex justify-content-between">
            <a
              href="/"
              className="mb-3 text-decoration-none text-primary text-capitalize"
            >
              terms & conditions
            </a>
            <a
              href="/"
              className="mb-3 text-decoration-none text-primary text-capitalize"
            >
              privacy policy
            </a>
          </div>

          <p className="text-primary">© 2024</p>
        </div>

        <div className="col mb-3 text-secondary text-capitalize">
          <h5>Services</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-primary text-capitalize">
                Email Marketing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-primary text-capitalize">
                Campaigns
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-primary text-capitalize">
                Branding
              </a>
            </li>
          </ul>
        </div>

        <div className="col mb-3 text-secondary text-capitalize">
          <h5>Furniture</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-primary text-capitalize">
                bed
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-primary text-capitalize">
                chair
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-primary text-capitalize">
                all
              </a>
            </li>
          </ul>
        </div>

        <div className="col mb-3 text-secondary text-capitalize">
          <h5>Follow us</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-primary text-capitalize">
                <div className="d-flex align-items-center gap-2">
                  <FontAwesomeIcon icon={faFacebook} />
                  <span>Facebook</span>
                </div>
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-primary text-capitalize">
                <div className="d-flex align-items-center gap-2">
                  <FontAwesomeIcon icon={faTwitter} />
                  <span>Twitter</span>
                </div>
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-primary text-capitalize">
                <div className="d-flex align-items-center gap-2">
                  <FontAwesomeIcon icon={faInstagram} />
                  <span>instagram</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
