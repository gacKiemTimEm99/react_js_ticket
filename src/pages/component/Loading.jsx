import React from "react";
import "../../style/loading.scss";

export default function Loading() {
  const logo = process.env.PUBLIC_URL + "/img/sharingan.jpg";
  const susano = process.env.PUBLIC_URL + "/img/susano.png";

  return (
    <div className="loading">
      <div className="loader">
        <img src={logo} alt="" />
      </div>{" "}
      <div className="cover" style={{ backgroundImage: `url(${susano})` }}>
        {/* <img src={logo} alt="" /> */}
      </div>
    </div>
  );
}
