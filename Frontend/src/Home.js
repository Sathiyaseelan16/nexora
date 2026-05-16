import "./Home.css";

import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (

    <div className="home-page">

      <div className="overlay">

        <div className="hero-content">

          <h3 className="hero-subtitle">
            ------ YOU CAN CREATE ------
          </h3>

          <h1 className="hero-title">
            YOUR OWN WEBSITE
          </h1>

          <p className="hero-text">
            Create modern websites with
            beautiful responsive design.
          </p>

          <div className="hero-buttons">

            <button
              className="buy-btn"
              onClick={() => navigate("/gallery")}
            >
              BUY A THEME
            </button>

            <button
              className="feature-btn"
              onClick={() => navigate("/news")}
            >
              VIEW FEATURES
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;