import React from "react";
import "../../style/ticket_booking.scss";
import Footer from "../homePage/footer";
import Header from "../homePage/header";
import { useDispatch, useSelector } from "react-redux";
import { bookingTicket } from "../../service/user";
import { useHistory, Redirect } from "react-router-dom";
import { createAction } from "../../redux/action/action";
import { ADD_TICKET } from "../../redux/action/type";

export default function DetailBooking() {
  const history = useHistory();
  const dispatch = useDispatch();
  const img = process.env.PUBLIC_URL + "/img/webpnet-resizeimage-43-poster.jpg";

  const listTicket = useSelector((item) => item.ticketReducer.ticketBooking);
  const User = useSelector((item) => item.userReducer.user);

  const sumTicket = listTicket.reduce((pre, curr) => {
    return (pre += curr.count);
  }, 0);
  const sum = listTicket.reduce((pre, curr) => {
    return (pre += curr.count * curr.price);
  }, 0);

  const listData = listTicket.map((item) => {
    return {
      shownName: item.shownName,
      shownPlace: item.showPlace,
      timeStart: item.time,
      levelUser: item.count,
      user: {
        userName: User.userName,
        email: User.email,
        phoneNumber: User.phoneNumber,
        fullName: User.fullName,
      },
    };
  });

  const finishBooking = () => {
    listData.forEach((item) => {
      try {
        bookingTicket(item).then((item) => console.log(item));
      } catch (error) {
        throw error;
      }
    });
  };

  return (
    <>
      <Header />
      <div className="detail container overlay">
        <div className="time">
          <button>chi tiết thông tin vé đặt</button>
        </div>
        <div className="row">
          {listTicket.map((item, key) => {
            return (
              <div className="col-2 ticket_item" key={key}>
                <img width="100%" src={item.image} alt />
                <p>{item.shownName}</p>
                <p>
                  Địa Điểm <br />
                  <span> {item.showPlace}</span>
                </p>
                <p>
                  Thời Gian : <br />
                  <span>{item.time}</span>
                </p>
                <p>
                  Số Lượng : <br />
                  <span>{item.count}</span>
                </p>
              </div>
            );
          })}
        </div>

        <div className="time">
          <button>kiểm tra lại thông tin trước khi đặt vé</button>
        </div>
        <div className="row info">
          <div className="col-4">
            <h1> Khách Hàng</h1>
            <h5>
              họ tên : <span> {User.fullName} </span>
            </h5>
            <h5>
              tổng tiền : <span>{User.phoneNumber} </span>
            </h5>
            <h5>
              email : <span> {User.email} </span>
            </h5>
          </div>
          <div className="col-4">
            <h1> Vé Đặt</h1>
            <h5>
              số lượng show : <span>{listTicket.length} </span>
            </h5>
            <h5>
              số lượng vé : <span> {sumTicket} </span>
            </h5>
            <h5>
              tổng tiền : <span> {sum} </span> VND
            </h5>
          </div>
          <div className="col-4">
            <h1> Thanh Toán</h1>
            <p>
              thông tin về phương thức thanh toán sẻ được gửi thông qua email
              hoặc số điện thoại khách hàng đã đăng ký , vui lòng kiểm tra tin
              nhắn email
            </p>
            <p>
              <i class="fa fa-exclamation-triangle"></i>
              vé đã đặt không được trả lại đâu á !!
            </p>
          </div>
        </div>
        <div className="time">
          <button
            onClick={() => {
              try {
                finishBooking();
                dispatch(createAction(ADD_TICKET, null));
                alert("đặt vé thành công");
                history.push("/");
              } catch (error) {
                alert("lỗi đặt vé");
                throw error;
              }
            }}
          >
            Thanh Toán
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
