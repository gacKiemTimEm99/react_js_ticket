import React from "react";
import ShownTimeForm from "../form/shownTime";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getShownsTime } from "../../../redux/action/adminAction";
import { deleteShownTime } from "../../../service/admin";
import ShownTimeFormUpdate from "../form/shownTimeUpdate";

export default function ShownTime(props) {
  const listShown = useSelector((item) => item.adminReducer.shownTimes);
  const dispatch = useDispatch();

  const renderShown = () => {
    return listShown.map((item, key) => {
      return (
        <tr>
          <td>{item._id.length > 5 ? item._id.substr(0, 5) : item._id}</td>
          <td>{item.shownId}</td>
          <td>
            {item.shownPlaceId.length > 5
              ? item.shownPlaceId.substr(0, 5)
              : item.shownPlaceId}
          </td>
          <td>{item.timeStart}</td>
          <td>{item.space}</td>

          <td>
            <button
              data-toggle="modal"
              data-target={"#n" + item._id}
              data-id={item._id}
              className="btn btn-primary"
            >
              {" "}
              sửa
            </button>
            <ShownTimeFormUpdate id={item._id} />
          </td>
          <td>
            <button
              onClick={async () => {
                await deleteShownTime(item._id);
                alert("xóa show thành công");
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
    dispatch(getShownsTime(dispatch));
  }, []);

  return (
    <div className="recentOrders">
      <div className="cardHeader">
        <h2 className="content">Lịch Khởi Chiếu</h2>
        <button data-toggle="modal" data-target="#modelId" className="button">
          +
        </button>
        <ShownTimeForm />
      </div>
      <table>
        <thead>
          <tr>
            <td>mã lịch chiếu</td>
            <td>mã shown diễn</td>
            <td>mã địa điểm</td>
            <td>thời gian bắt đầu</td>
            <td>số lượng khách tối đa</td>
            <td>sửa</td>
            <td>xóa</td>
          </tr>
        </thead>
        <tbody>{renderShown()}</tbody>
      </table>
    </div>
  );
}
