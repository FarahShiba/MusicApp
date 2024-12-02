import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Video from "../../video/production_id_4706235 (2160p).mp4";

function Home() {
  return (
    <div>
      <div className="video-container">
        <video autoPlay muted loop>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
      <Navbar className="custom-navbar">
        <Navbar.Brand href="/">Music</Navbar.Brand>
      </Navbar>
      <section className="contents">
        <div className="main-row">
          <div className="main-row-text">
            <h2>Appreciate it when you listen to my music app.</h2>
            <p>
              If music is absent from your life, it will be dull and pointless.
            </p>
            <Link to="/songs">
              <button className="btn btn-warning">Start Listening!</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
