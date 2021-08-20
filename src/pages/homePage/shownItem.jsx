import React from "react";
import "../../style/shownItem.scss";
import { Link } from "react-router-dom";
const img = process.env.PUBLIC_URL + "/img/webpnet-resizeimage-43-poster.jpg";

export default function ShownItem(props) {
  let { image, shownName, dateStart, _id, price, category } = props.shown;
  return (
    <div className="item">
      <div className="item__img">
        <img src={image} alt />
      </div>
      <div className="item__title">
        <h5>
          <a href="#"> {shownName} </a>
        </h5>
        <p> {dateStart} </p>
      </div>
      <div className="item__detail">
        <Link to={"detail/" + _id}>
          {" "}
          <button className="ticket">chi tiết</button>
        </Link>
        <button className="ticket">mua vé</button>
        <p>
          <span>thời lượng: </span> {price}{" "}
        </p>
        <p>
          <span>thể loại: </span>
          {category}
        </p>
      </div>
    </div>
  );
}
