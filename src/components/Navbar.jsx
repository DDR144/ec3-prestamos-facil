import { Link } from "react-router-dom";
import logoCompleto from "../assets/images/prestamosLogoCompleto.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src={logoCompleto}
            alt="Logo de Prestamos Facil"
            height="75"
            className="me-2"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Simular Crédito
              </Link>
            </li>
            <li className="nav-link">|</li>
            <li className="nav-item">
              <Link className="nav-link" to="/nosotros">
                Nosotros
              </Link>
            </li>
            <li className="nav-link">|</li>
            <li className="nav-item">
              <Link className="nav-link" to="/prestamos">
                Préstamos
              </Link>
            </li>
            <li className="nav-link">|</li>
            <li className="nav-item">
              <Link className="nav-link" to="/preguntas-frecuentes">
                Preguntas Frecuentes
              </Link>
            </li>
            <li className="nav-link">|</li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
