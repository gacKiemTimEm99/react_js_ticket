import React from "react";

export default function Slider() {
  const naruto1 = process.env.PUBLIC_URL + "/img/poster1.jpg";
  const obito = process.env.PUBLIC_URL + "/img/poster2.jpg";
  const sasuke = process.env.PUBLIC_URL + "/img/poster3.jpg";
  const arrowleft = process.env.PUBLIC_URL + "/img/arrow-left.png";
  const arrowright = process.env.PUBLIC_URL + "/img/arrow-right.png";

  return (
    <div className="carousel">
      <div
        style={{ opacity: "0.85" }}
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to={0}
            className="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block" src={naruto1} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block" src={obito} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block" src={sasuke} alt="Third slide" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <img src={arrowleft} alt />
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <img src={arrowright} alt />
        </a>
      </div>
    </div>
  );
}
