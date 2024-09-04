import React from "react";
import "../under-construction.scss";

const UnderConstruction = () => {
  return (
    <div className="under-construction">
      <div className="overlay"></div>
      <div className="stars" aria-hidden="true"></div>
      <div className="starts2" aria-hidden="true"></div>
      <div className="stars3" aria-hidden="true"></div>
      <main className="main">
        <section className="contact-construction">
          <h1 className="title">Sorry for the inconvinience</h1>
          <h2 className="sub-title">Page Under Construction</h2>
        </section>
      </main>
    </div>
  );
};

export default UnderConstruction;
