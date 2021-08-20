import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createAction } from "../../redux/action/action";
import { CHANGE_AMOUNT_TICKET, DELETE_TICKET } from "../../redux/action/type";
import { Link } from "react-router-dom";

export default function Booking() {
  let listTicket = useSelector((item) => item.ticketReducer.ticketBooking);

  const dispatch = useDispatch();
  const deleteTicket = (id) => {
    dispatch(createAction(DELETE_TICKET, id));
  };
  const changeAmount = (id, flag) => {
    const data = { id, flag };
    dispatch(createAction(CHANGE_AMOUNT_TICKET, data));
  };
  const renderList = () => {
    return listTicket.map((item, key) => {
      return (
        <tr key={key}>
          <td>
            <img src={item.image} style={{ width: "100px" }} alt="image" />
          </td>
          <td>{item.shownName}</td>
          <td>{item.director}</td>
          <td>{item.showPlace}</td>
          <td>{item.time}</td>
          <td>
            {" "}
            <button
              onClick={() => {
                changeAmount(item.idTicket, false);
              }}
              className="btn btn-primary"
            >
              -
            </button>
            {item.count}
            <button
              onClick={() => {
                changeAmount(item.idTicket, true);
              }}
              className="btn btn-primary"
            >
              +
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                deleteTicket(item.idTicket);
              }}
              className="btn btn-danger"
            >
              delete
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      <div
        class="modal fade"
        id="modelId"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div
            style={{ width: "100vw", transform: "translateX(-33%)" }}
            class="modal-content"
          >
            <div class="modal-header">
              <h5 class="modal-title">Danh sách vé đã đặt</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <table width="100%">
                <thead>
                  <tr>
                    <th>hình ảnh</th>
                    <th>tên shown</th>
                    <th>đạo diễn</th>
                    <th>địa điểm</th>
                    <th>thời gian bắt đầu</th>
                    <th>số lượng vé</th>
                    <th>xóa</th>
                  </tr>
                </thead>
                <tbody>{renderList()}</tbody>
              </table>
            </div>
            <div class="modal-footer">
              <button type="button" class="button" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
