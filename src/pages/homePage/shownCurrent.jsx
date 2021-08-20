import React from "react";
import ShownItem from "./shownItem";
import ReactOwlCarousel from "react-owl-carousel";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../../style/showncurrent.scss";
import { getListShown } from "../../redux/action/userAction";
export default function ShownCurrent() {
  const left = process.env.PUBLIC_URL + "/img/arrow-left.png";
  const right = process.env.PUBLIC_URL + "/img/arrow-right.png";

  const listShown = useSelector((item) => item.shownReducer.showns);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListShown(dispatch));
  }, []);
  const renderlistShown = () => {
    return listShown.map((item, key) => {
      return <ShownItem shown={item} key={key} />;
    });
  };

  return (
    <ReactOwlCarousel
      items="4"
      nav
      dots
      loop
      navText={[`<img src=${left}>`, `<img src=${right}>`]}
      style={{ display: "block" }}
      className="owl-carousel owl-theme"
    >
      {renderlistShown()}
    </ReactOwlCarousel>
  );
}
