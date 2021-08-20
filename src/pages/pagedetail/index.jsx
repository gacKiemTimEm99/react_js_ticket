import React from "react";
import Header from "../homePage/header";
import "../../style/detail.scss";
import Footer from "../homePage/footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getListShownPlace,
  getListShownTime,
  getShownDetail,
} from "../../redux/action/userAction";
import Booking from "./booking";
import { createAction } from "../../redux/action/action";
import { ADD_TICKET, POST_SHOWN_DETAIL } from "../../redux/action/type";
import { Link } from "react-router-dom";
import Loading from "../component/Loading";

export default function PageDetail(props) {
  const { id } = props.match.params;
  const showDetail = useSelector((item) => item.shownReducer.shownDetail);
  let shownTime = useSelector((item) => item.shownReducer.shownTime);
  let shownPlaces = useSelector((item) => item.shownReducer.shownPlaces);
  // console.log({ shownTime });

  let trailer = "";

  if (showDetail) {
    trailer = showDetail.trailer.slice(
      showDetail.trailer.lastIndexOf("=") + 1,
      showDetail.trailer.length
    );

    shownTime = shownTime.filter((item) => {
      return item.shownId === id;
    });

    console.log("trailer", trailer);
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListShownTime(dispatch));
    dispatch(getListShownPlace(dispatch));
  }, []);
  useEffect(() => {
    dispatch(getShownDetail(dispatch, id));
    // dispatch(getListShownTime(dispatch));
  }, []);
  useEffect(() => {
    return () => {
      dispatch(createAction(POST_SHOWN_DETAIL, null));
    };
  }, []);
  const booking = async (shownDetail, shownTime) => {
    let showPlace =
      shownPlaces[
        shownPlaces.findIndex((item) => {
          return shownTime.shownPlaceId === item._id;
        })
      ].placeName;

    if (showPlace) {
      const ticket = {
        ...shownDetail,
        time: shownTime.timeStart,
        showPlace,
        count: 1,
        idTicket:
          shownDetail._id + shownTime.shownPlaceId + shownTime.timeStart,
      };
      dispatch(createAction(ADD_TICKET, ticket));
    }
  };

  return (
    <>
      <Header />

      {showDetail ? (
        <div>
          <div className="container">
            <div
              style={{ backgroundImage: `url(${showDetail.image})` }}
              className="movie-slider"
            >
              <div className="overlay" />
              <div className="trailer">
                <a
                  className="video-play-button"
                  data-toggle="modal"
                  href="#trailer"
                >
                  <i className="fa fa-play" />
                </a>
              </div>
            </div>
            <div className="movie-detail">
              <div className="poster">
                <img src={showDetail.image} alt />
              </div>
              <div className="detail">
                <div className="movie-name">
                  <h1> {showDetail.shownName} </h1>
                  <h2> {showDetail.shownName} </h2>
                </div>
                <div className="movie-under-name">
                  <p>
                    <span> thời Lượng :</span> {showDetail.price}
                  </p>
                  <p>
                    <span> khởi chiếu:</span> {showDetail.dateStart}
                  </p>
                  <p>
                    <span> thể Loại: </span> {showDetail.category}
                  </p>
                  <p>
                    <span> đạo diễn: </span>
                    {showDetail.director}
                  </p>
                  <p>
                    <span> diễn viên: </span> {showDetail.director}
                  </p>
                  <p>
                    <span> độ tuổi: </span>
                    C16 - PHIM CẤM PHỔ BIẾN ĐẾN KHÁN GIẢ DƯỚI 16 TUỔI
                  </p>
                  <button>Đặt vé</button>
                  <Link to="/ticketbooking">
                    <button className="button">tiến hành Đặt vé</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="content">
              <h5>{showDetail.description}</h5>
            </div>
            <div className="shown-time" id="lichchieu">
              <h2 id="div">lịch chiếu</h2>
              <div className="time">
                {shownTime.length > 0 ? (
                  shownTime.map((item, index) => {
                    return (
                      <button
                        onClick={() => {
                          booking(showDetail, item);
                        }}
                        data-toggle="modal"
                        data-target="#modelId"
                        index={index}
                      >
                        {item.timeStart}
                      </button>
                    );
                  })
                ) : (
                  <button> show này hiện chưa có lịch chiếu</button>
                )}
              </div>
            </div>
          </div>
          <div className="modal fade" id="trailer">
            <div className="modal-dialog me " role="document">
              <div className="modal-content">
                <div className="modal-header ">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    title="Đóng"
                    aria-hidden="true"
                  >
                    ×
                  </button>
                </div>
                <div className="modal-body">
                  <div className="video-container">
                    <iframe
                      // width={853}
                      // height={480}
                      src={"https://www.youtube.com/embed/" + trailer}
                      title="YouTube video player"
                      // frameBorder={0}
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
      <Booking />
      <Footer />
    </>
  );
}
