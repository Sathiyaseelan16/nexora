import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-container">

        {/* LEFT */}

        <div className="footer-section">

          <h2>Nexora</h2>

          <p>
            Build modern websites with
            creative design and secure
            technologies using MERN Stack.
          </p>

        </div>

        {/* QUICK LINKS */}

        <div className="footer-section">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/news">News</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>

        </div>

        {/* SERVICES */}

        <div className="footer-section">

          <h3>Services</h3>

          <Link to="/web-design">
            Web Design
          </Link>

          <Link to="/development">
            Development
          </Link>

          <Link to="/security">
            Security
          </Link>

          <Link to="/support">
            Support
          </Link>

        </div>

        {/* CONTACT */}

        <div className="footer-section">

          <h3>Contact Info</h3>

          <p>Email: nexostud16@gmail.com</p>

          <p>Phone: +91 9976764859</p>

          <p>Location: Chennai, India</p>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 Nexora |
        All Rights Reserved

      </div>

    </footer>

  );

}

export default Footer;