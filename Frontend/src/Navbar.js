import React from "react";

import {
  Link,
  useNavigate
} from "react-router-dom";

import "./Navbar.css";

function Navbar({
  isLoggedIn,
  setIsLoggedIn
}) {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("isAdmin");
    
    setIsLoggedIn(false);

    navigate("/auth");

  };

  return (

    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">

      <div className="container">

        {/* LOGO */}

        <Link
          className="navbar-brand logo"
        >

          <span className="logo-icon">
            ✦
          </span>

          Nexora

        </Link>

        {/* MOBILE MENU BUTTON */}

        <button
          className="navbar-toggler"

          type="button"

          data-bs-toggle="collapse"

          data-bs-target="#navbarNav"

          aria-controls="navbarNav"

          aria-expanded="false"

          aria-label="Toggle navigation"
        >

          <span className="navbar-toggler-icon"></span>

        </button>

        {/* COLLAPSE MENU */}

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >

          <div className="ms-auto navbar-links">

            {
              localStorage.getItem("isAdmin") === "true" && 
              (<Link 
                className="nav-link" 
                to="/admin">
                  Admin
                 </Link>
              )
            }

            <Link
              className="nav-link"
              to="/"
            >
              Home
            </Link>

            <Link
              className="nav-link"
              to="/news"
            >
              News
            </Link>

            <Link
              className="nav-link"
              to="/gallery"
            >
              Gallery
            </Link>

            <Link
              className="nav-link"
              to="/contact"
            >
              Contact
            </Link>

            {isLoggedIn && (

              <button
                className="btn btn-danger ms-lg-3 mt-3 mt-lg-0"
                onClick={logout}
              >

                Logout

              </button>

            )}

          </div>

        </div>

      </div>

    </nav>

  );

}

export default Navbar;