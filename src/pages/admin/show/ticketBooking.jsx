import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getListTicket } from "../../../redux/action/adminAction";
import { deleteTicket } from "../../../service/admin";

export default function TicketBooking() {
  const listShown = useSelector((item) => item.adminReducer.ticketBookings);
  const dispatch = useDispatch();

  const renderShown = () => {
    return listShown.map((item, key) => {
      return (
        <tr>
          <td>{item._id.length > 5 ? item._id.substr(0, 5) : item._id}</td>
          <td>{item.shownName}</td>
          <td>
            {item.shownPlace.length > 5
              ? item.shownPlace.substr(0, 5)
              : item.shownPlace}
          </td>
          <td>{item.timeStart}</td>
          <td>{item.levelUser}</td>
          <td>
            {item.user.userName > 5
              ? item.user.userName.substr(0, 5)
              : item.user.userName + ".."}
          </td>
          <td>
            {item.user.email > 5
              ? item.user.email.substr(0, 5)
              : item.user.email + ".."}
          </td>

          <td>
            <button
              onClick={async () => {
                await deleteTicket(item._id);
                alert("xóa thành công");
              }}
              className="btn btn-danger"
            >
              {" "}
              xóa
            </button>
          </td>
        </tr>
      );
    });
  };
  useEffect(() => {
    dispatch(getListTicket(dispatch));
  }, []);

  return (
    <div className="recentOrders">
      <div className="cardHeader">
        <h2 className="content">Danh Sách Vé Đặt </h2>
      </div>
      <table>
        <thead>
          <tr>
            <td>mã vé</td>
            <td>tên shown diễn</td>
            <td>nơi diễn</td>
            <td>thời gian bắt đầu</td>
            <td>số lượng vé đặt</td>
            <td>tài khoản đặt vé</td>
            <td>email</td>
            <td>xóa</td>
          </tr>
        </thead>
        <tbody>{renderShown()}</tbody>
      </table>
    </div>
  );
}
