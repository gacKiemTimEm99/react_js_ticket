import React, { useEffect } from "react";
import ShownItem from "./shownItem";
import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../../style/shownComing.scss";
import { useDispatch, useSelector } from "react-redux";
import { getListShown } from "../../redux/action/userAction";

export default function ShownComing() {
  const left = process.env.PUBLIC_URL + "/img/arrow-left.png";
  const right = process.env.PUBLIC_URL + "/img/arrow-right.png";

  const listShown = useSelector((state) => state.shownReducer.showns);

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
